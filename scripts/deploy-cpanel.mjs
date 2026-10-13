// Publica la carpeta dist/ en el hosting cPanel de cirugiascasaderecuperacionmedellin.com.
//
// 1. Comprime dist/ y lo sube a la carpeta home de la cuenta.
// 2. Lo extrae dentro de public_html (sobrescribe lo que haya).
// 3. Borra de public_html todo lo que ya no exista en dist/, para que el
//    servidor quede idéntico a lo que hay en Git.
// 4. Comprueba que la página principal responda.
//
// Credenciales: variables de entorno CPANEL_URL, CPANEL_USER y CPANEL_TOKEN
// (secretos en GitHub Actions) o, en local, el archivo .cpanel.env / .cpanel.env.txt
// (ignorado por Git). Uso: npm run build && node scripts/deploy-cpanel.mjs
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const SITE = 'https://cirugiascasaderecuperacionmedellin.com';
const DIST = path.resolve('dist');
// Carpetas del servidor que no vienen de Git y nunca se tocan.
const KEEP = new Set(['.well-known', 'cgi-bin', 'error_log', '.user.ini']);

const env = { ...process.env };
for (const file of ['.cpanel.env', '.cpanel.env.txt']) {
	if (env.CPANEL_TOKEN || !fs.existsSync(file)) continue;
	for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
		const m = line.match(/^\s*([A-Z_]+)\s*[:=]\s*"?([^"]*?)"?\s*$/);
		if (m) env[m[1]] = m[2];
	}
}
for (const k of ['CPANEL_URL', 'CPANEL_USER', 'CPANEL_TOKEN']) {
	if (!env[k]) throw new Error(`Falta la variable ${k}`);
}
const base = env.CPANEL_URL.replace(/\/+$/, '');
const headers = { Authorization: `cpanel ${env.CPANEL_USER}:${env.CPANEL_TOKEN}` };

async function uapi(fn, params = {}, body) {
	const res = await fetch(`${base}/execute/${fn}`, {
		method: 'POST',
		headers,
		body: body ?? new URLSearchParams(params),
	});
	const json = await res.json();
	if (!json.status) throw new Error(`${fn}: ${JSON.stringify(json.errors)}`);
	return json.data;
}

async function fileop(op, sources, dest) {
	const p = new URLSearchParams({
		cpanel_jsonapi_user: env.CPANEL_USER,
		cpanel_jsonapi_apiversion: '2',
		cpanel_jsonapi_module: 'Fileman',
		cpanel_jsonapi_func: 'fileop',
		op,
		doubledecode: '0',
	});
	for (const s of sources) p.append('sourcefiles', s);
	if (dest) p.append('destfiles', dest);
	const res = await fetch(`${base}/json-api/cpanel`, { method: 'POST', headers, body: p });
	const json = await res.json();
	const failed = (json.cpanelresult?.data ?? []).filter((r) => !r.result);
	if (json.cpanelresult?.error || failed.length) {
		throw new Error(`fileop ${op}: ${json.cpanelresult?.error ?? JSON.stringify(failed)}`);
	}
}

// Lista recursiva de archivos del servidor, relativa a `root`.
async function remoteTree(root, rel = '') {
	const out = [];
	const items = await uapi('Fileman/list_files', { dir: path.posix.join(root, rel), show_hidden: 1 });
	for (const f of items) {
		const p = rel ? `${rel}/${f.file}` : f.file;
		if (!rel && KEEP.has(f.file)) continue;
		out.push({ path: p, dir: f.type === 'dir' });
		if (f.type === 'dir') out.push(...(await remoteTree(root, p)));
	}
	return out;
}

function localTree(dir, rel = '') {
	const out = new Set();
	for (const e of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
		const p = rel ? `${rel}/${e.name}` : e.name;
		out.add(p);
		if (e.isDirectory()) for (const x of localTree(dir, p)) out.add(x);
	}
	return out;
}

if (!fs.existsSync(path.join(DIST, 'index.html'))) throw new Error('No existe dist/index.html: ejecuta npm run build');

const domains = await uapi('DomainInfo/domains_data');
const docroot = domains.main_domain.documentroot;
const home = path.posix.dirname(docroot);
console.log(`Destino: ${docroot}`);

const zipName = '.deploy-web.zip';
const zipPath = path.join(os.tmpdir(), zipName);
fs.rmSync(zipPath, { force: true });
if (process.platform === 'win32') {
	// tar de Windows genera ZIP con rutas "/" (Compress-Archive usa "\" y rompe en Linux).
	execFileSync('C:\\Windows\\System32\\tar.exe', ['-a', '-c', '-f', zipPath, '-C', DIST, ...fs.readdirSync(DIST)]);
} else {
	execFileSync('zip', ['-qr', zipPath, '.'], { cwd: DIST });
}
console.log(`ZIP: ${(fs.statSync(zipPath).size / 1048576).toFixed(1)} MB`);

const form = new FormData();
form.append('dir', home);
form.append('overwrite', '1');
form.append('file-1', new Blob([fs.readFileSync(zipPath)]), zipName);
const up = await uapi('Fileman/upload_files', {}, form);
if (up.failed) throw new Error(`Subida fallida: ${JSON.stringify(up.uploads)}`);
console.log('Subido');

try {
	await fileop('extract', [`${home}/${zipName}`], docroot);
	console.log('Extraído en public_html');
} finally {
	await fileop('unlink', [`${home}/${zipName}`]);
}

const local = localTree(DIST);
const extra = (await remoteTree(docroot)).filter((f) => !local.has(f.path));
// Solo se borran los elementos "raíz" de lo sobrante (borrar una carpeta ya borra su contenido).
const toDelete = extra.filter((f) => !extra.some((o) => o.dir && f.path.startsWith(`${o.path}/`)));
for (const f of toDelete) console.log(`Borrando del servidor: ${f.path}`);
if (toDelete.length) await fileop('unlink', toDelete.map((f) => `${docroot}/${f.path}`));

const check = await fetch(`${SITE}/`, { cache: 'no-store' });
if (check.status !== 200) throw new Error(`La web respondió ${check.status}`);
console.log(`Listo: ${SITE}/ responde ${check.status}`);
