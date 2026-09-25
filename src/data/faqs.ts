// Cada respuesta es HTML (se pinta con set:html) y también alimenta el esquema FAQPage.
export const faqs: { question: string; answer: string }[] = [
	{
		question: "¿Qué es una Recovery House y para qué sirve?",
		answer: `
			<p>Una Recovery House es un espacio especializado en recibir y acompañar a pacientes durante su recuperación después de una cirugía.</p>
			<p>A diferencia de un hotel, está pensado alrededor de las necesidades del paciente durante el periodo postoperatorio: cuidado, descanso, alimentación, movilidad, higiene y acompañamiento.</p>
			<p>En Bellas Te Cuida, somos una Recovery House en Medellín especializada en pacientes de cirugía plástica, estética y reconstructiva, con más de 10 años de experiencia.</p>
		`,
	},
	{
		question: "¿Cuál es la diferencia entre una Recovery House y una casa de recuperación?",
		answer: `
			<p>Ninguna. Recovery House y casa de recuperación hacen referencia al mismo concepto: un lugar especializado para el alojamiento y acompañamiento durante el periodo posterior a una cirugía.</p>
			<p>“Recovery House” es el término en inglés que se ha popularizado para este tipo de servicio, mientras que “casa de recuperación” es su equivalente en español.</p>
		`,
	},
	{
		question: "¿Qué incluye una Recovery House?",
		answer: `
			<p>Los servicios pueden variar según cada establecimiento. En Bellas Te Cuida contamos con:</p>
			<ul>
				<li>Hospedaje especializado.</li>
				<li>Enfermería y cuidadoras.</li>
				<li>Alimentación y nutrición especializada.</li>
				<li>Transporte.</li>
				<li>Limpieza.</li>
				<li>Lavandería.</li>
				<li>Servicios complementarios.</li>
			</ul>
			<p>Contamos con 14 servicios especializados, más de 15 aliados estratégicos y más de 10 años de experiencia acompañando pacientes.</p>
		`,
	},
	{
		question: "¿Es seguro recuperarse en una Recovery House?",
		answer: `
			<p>Sí, siempre que elijas una casa de recuperación que cuente con procesos y condiciones adecuadas para el cuidado postoperatorio.</p>
			<p>En Bellas Te Cuida, la seguridad y el bienestar de nuestras pacientes son una prioridad. Contamos con cuidado profesional, protocolos de higiene y atención, manejo adecuado de pólizas médicas y comunicación constante con el cirujano responsable de cada procedimiento.</p>
			<p>Nuestro equipo acompaña la recuperación respetando siempre las indicaciones del cirujano y del equipo médico responsable.</p>
		`,
	},
	{
		question: "¿Puedo ir sola a una Recovery House?",
		answer: `
			<p>Sí. Puedes venir sola o acompañada.</p>
			<p>Si decides viajar sola, en Bellas Te Cuida te acompañamos desde tu llegada a Medellín: te recogemos en el aeropuerto, te acompañamos el día de tu cirugía y te llevamos al quirófano, y también te acompañamos a tus citas de control posteriores.</p>
			<p>Si prefieres viajar con un familiar o acompañante, también puedes hacerlo.</p>
			<p>Recibimos pacientes nacionales e internacionales y adaptamos nuestro acompañamiento a las necesidades de cada persona.</p>
		`,
	},
	{
		question: "¿Cuál es la diferencia entre recuperarse en casa y en una Recovery House?",
		answer: `
			<p>Ambas alternativas son posibles, pero la experiencia y la logística pueden ser diferentes.</p>
			<p><strong>Recuperarte en casa:</strong> Para algunas pacientes, regresar a casa significa estar cerca de su familia y en un entorno conocido. Sin embargo, el cuidado postoperatorio no termina al llegar a casa.</p>
			<p>Durante los primeros días puedes necesitar apoyo profesional para el manejo de drenajes, medicamentos, control del dolor, monitoreo de síntomas y otros cuidados indicados por tu cirujano. Además, tendrás que resolver por separado necesidades como alimentación especializada, transporte a tus controles, limpieza y otros servicios que puedas requerir durante tu recuperación.</p>
			<p>En Bellas Te Cuida, con agendamiento previo, ofrecemos enfermería a domicilio en Medellín y su área metropolitana como una alternativa para quienes deciden recuperarse en casa.</p>
			<p><strong>Recuperarte en una Recovery House:</strong> Una Recovery House está diseñada específicamente para acompañar tu recuperación, por eso muchos de estos servicios ya están integrados en un mismo lugar.</p>
			<p>En Bellas Te Cuida, además del cuidado profesional, cuentas con hospedaje especializado, nutrición, transporte, limpieza, lavandería y servicios complementarios, evitando tener que coordinar cada necesidad por separado mientras te recuperas.</p>
			<p>Estar en una Recovery House te permite tener un entorno preparado para tu postoperatorio y un equipo enfocado en acompañarte durante esta etapa, mientras sigues las indicaciones de tu cirujano.</p>
		`,
	},
	{
		question: "Recovery House vs. hotel: ¿cuál es la diferencia?",
		answer: `
			<p>Aunque un hotel puede ofrecer hospedaje y comodidad, no está diseñado para el cuidado de un paciente postoperatorio.</p>
			<p>En un hotel, generalmente no encontrarás los protocolos y el acompañamiento especializado que requiere una recuperación. El paciente no cuenta con control de signos vitales, seguimiento de medicamentos, manejo del dolor, espacios adaptados para su cuidado ni nutrición especializada. Además, tampoco tendrá un equipo preparado para mantener una comunicación constante con su cirujano ante cualquier situación que requiera atención.</p>
			<p>En una Recovery House o casa de recuperación, en cambio, el entorno está pensado específicamente para acompañar el periodo posterior a una cirugía, con servicios y cuidados organizados alrededor de las necesidades del paciente.</p>
			<p>En Bellas Te Cuida, contamos con cuidado profesional 24 horas, hospedaje especializado, nutrición, transporte, limpieza y lavandería, además de servicios complementarios y comunicación con el equipo médico responsable de cada paciente.</p>
		`,
	},
	{
		question: "¿Qué debe saber un paciente extranjero antes de operarse en Colombia?",
		answer: `
			<p>Si viajas desde otro país para realizarte una cirugía plástica en Colombia, es importante que antes de viajar verifiques:</p>
			<ol>
				<li><strong>Que tu cirujano esté certificado y sea apto para realizar el procedimiento.</strong> Verifica su formación, certificaciones y registro en las entidades correspondientes.</li>
				<li><strong>Que la clínica esté habilitada y cuente con las condiciones necesarias.</strong> Verifica que la institución donde se realizará tu procedimiento esté debidamente habilitada por las autoridades de salud correspondientes y que cuente con los recursos necesarios para atender una eventual emergencia u hospitalización.</li>
				<li><strong>Qué cobertura tiene tu póliza o seguro.</strong> Antes de viajar, pregunta qué póliza o seguro necesitas para realizar tu procedimiento y qué cobertura tendrás durante tu estancia en Colombia.</li>
				<li><strong>Dónde realizarás tu recuperación y quién te acompañará.</strong> Este punto es fundamental. Antes de programar tu cirugía, debes tener claro quién te acompañará después del procedimiento y dónde realizarás tu cuidado postoperatorio.</li>
			</ol>
			<p>En Bellas Te Cuida recibimos pacientes internacionales y contamos con una Recovery House especializada para acompañarlas durante su estancia en Medellín.</p>
		`,
	},
	{
		question: "¿Cómo organizar un viaje a Medellín para una cirugía plástica?",
		answer: `
			<p>Lo ideal es organizar tu viaje con suficiente anticipación:</p>
			<ol>
				<li><strong>Agenda una valoración con tu cirujano.</strong> Puede ser presencial o virtual. Allí podrás conocer tu diagnóstico, resolver tus dudas, determinar si eres candidata para el procedimiento y definir una posible fecha de cirugía.</li>
				<li><strong>Realiza los exámenes prequirúrgicos.</strong> Consulta con tu cirujano cuáles necesitas realizar antes de viajar. Dependiendo del procedimiento y de cada paciente, pueden solicitarse hemograma, pruebas de coagulación, glicemia, electrocardiograma u otros estudios.</li>
				<li><strong>Compra tiquetes con fechas flexibles.</strong> No programes tu regreso de manera demasiado ajustada. Después de una cirugía debes esperar la evolución correspondiente y el alta médica de tu cirujano antes de viajar. Si todavía tienes drenajes u otra condición postoperatoria que requiera atención, tu cirujano puede indicarte que debes permanecer más tiempo en Medellín. Por eso es recomendable contar con un tiquete que permita cambios de fecha y consultar las condiciones de la aerolínea.</li>
				<li><strong>Reserva tu Recovery House con anticipación.</strong> Tu recuperación también debe hacer parte de la planificación del viaje. Reservar con tiempo te permite garantizar tu espacio en Bellas Te Cuida y organizar tu estancia postoperatoria.</li>
				<li><strong>Organiza tus medicamentos de uso propio.</strong> Lleva tus medicamentos habituales y los indicados por tu equipo médico, preferiblemente en sus envases originales y con la documentación correspondiente cuando sea necesario.</li>
				<li><strong>Prepara los insumos para tu recuperación.</strong> Consulta con tu cirujano qué elementos debes llevar. Para tu ropa, prioriza prendas cómodas y fáciles de colocar. Evita las que deban pasar por la cabeza y prefiere prendas con botones o cremalleras frontales.</li>
				<li><strong>Organiza tu documentación.</strong> Lleva pasaporte o documento de identidad, información de contacto de tu cirujano, órdenes médicas, resultados de exámenes y la documentación relacionada con tu procedimiento y seguro.</li>
			</ol>
		`,
	},
	{
		question: "¿Cuántos días antes debo llegar a Medellín para mi cirugía?",
		answer: `
			<p>Como referencia, se recomienda llegar mínimo 2 días antes de la cirugía.</p>
			<p>El primer día puedes dedicarlo a llegar y descansar después del vuelo. Al día siguiente pueden realizarse, según las indicaciones de tu equipo médico, la valoración presencial final con el cirujano, exámenes de laboratorio y valoración preanestésica.</p>
			<p>Si vienes desde Estados Unidos, Europa u otro destino con un vuelo largo, tu equipo médico puede recomendarte llegar con mayor anticipación.</p>
		`,
	},
	{
		question: "¿Cuánto dura el postoperatorio?",
		answer: `
			<p>El tiempo depende de la cirugía, de la evolución de cada paciente y del protocolo de su cirujano. Como referencia, algunas pacientes pueden requerir una estancia de aproximadamente 15 días para procedimientos como mamoplastia o liposucción pequeña, mientras que procedimientos de mayor complejidad, como abdominoplastia o Lipo 360° con transferencia, pueden requerir 21 días o más.</p>
			<p>En una rinoplastia, la estancia puede ser de aproximadamente 15 días, dependiendo de la evolución.</p>
			<p>Es importante diferenciar la estancia postoperatoria del proceso completo de recuperación. La inflamación y evolución del resultado pueden continuar durante 6 meses a 1 año, según la cirugía y cada paciente.</p>
		`,
	},
	{
		question: "¿Cuánto tiempo debo quedarme en Medellín después de una cirugía?",
		answer: `
			<p>La duración debe determinarse de acuerdo con el procedimiento y la evolución de cada paciente.</p>
			<p>Como referencia:</p>
			<ul>
				<li>Procedimientos de menor complejidad: aproximadamente 10 a 12 días.</li>
				<li>Procedimientos de mayor complejidad: aproximadamente 15 a 21 días o más.</li>
			</ul>
			<p>Si eres paciente internacional, no recomendamos planificar tu regreso con una fecha demasiado ajustada. La fecha de viaje debe contemplar tu evolución y la autorización de tu cirujano.</p>
		`,
	},
	{
		question: "¿Cuándo puedo volver a viajar después de una cirugía?",
		answer: `
			<p>El momento adecuado para viajar depende de la cirugía, tu evolución y la autorización de tu cirujano.</p>
			<p>Los vuelos largos requieren especial planificación, ya que permanecer sentada durante varias horas después de una cirugía puede aumentar ciertos riesgos postoperatorios. Tu equipo médico determinará cuándo es seguro viajar y qué medidas debes seguir durante el trayecto.</p>
			<p>Por eso, antes de comprar tu tiquete de regreso, considera una tarifa flexible y deja margen suficiente para tu recuperación.</p>
		`,
	},
	{
		question: "¿Cuándo puedo retomar mis actividades?",
		answer: `
			<p>Los tiempos varían según cada procedimiento y paciente. Como referencia general:</p>
			<ul>
				<li><strong>Trabajo remoto o de escritorio:</strong> aproximadamente 7 a 10 días.</li>
				<li><strong>Caminatas suaves:</strong> pueden iniciarse tempranamente si tu cirujano las autoriza.</li>
				<li><strong>Conducir:</strong> aproximadamente 15 días, dependiendo de tu movilidad y cirugía.</li>
				<li><strong>Ejercicio suave:</strong> alrededor de 4 semanas, según autorización médica.</li>
				<li><strong>Pesas, abdomen, correr y ejercicios de mayor intensidad:</strong> aproximadamente 6 a 8 semanas.</li>
				<li><strong>Piscina, playa, sauna y exposición solar:</strong> según la evolución de la piel y autorización médica.</li>
				<li><strong>Actividad sexual:</strong> el tiempo depende del procedimiento y debe seguir las indicaciones de tu cirujano.</li>
			</ul>
			<p>Durante la recuperación también es importante mantener una alimentación adecuada e hidratación, siguiendo las recomendaciones de tu equipo médico. En Bellas Te Cuida contamos con nutrición especializada como parte de nuestra atención.</p>
		`,
	},
	{
		question: "¿Qué debo tener en cuenta antes de elegir una Recovery House?",
		answer: `
			<p>Antes de reservar, no te fijes únicamente en el precio o las fotografías. Pregunta:</p>
			<ul>
				<li>¿Cuánta experiencia tiene?</li>
				<li>¿Quién estará disponible durante mi estancia?</li>
				<li>¿Qué tipo de cuidado ofrecen?</li>
				<li>¿Qué servicios están incluidos?</li>
				<li>¿Qué protocolos tienen para el cuidado postoperatorio?</li>
				<li>¿Cómo se comunican con mi cirujano?</li>
				<li>¿Qué servicios complementarios tienen disponibles?</li>
				<li>¿Cómo funciona el transporte a mis controles?</li>
			</ul>
			<p>En Bellas Te Cuida contamos con más de 10 años de experiencia, 1.000+ recuperaciones exitosas, 15+ aliados estratégicos y 14 servicios especializados.</p>
		`,
	},
	{
		question: "¿Por qué elegir una Recovery House en Medellín?",
		answer: `
			<p>Medellín es un destino al que llegan pacientes de diferentes ciudades y países para realizarse procedimientos de cirugía plástica, estética y reconstructiva. Si vas a viajar para realizarte una cirugía, es importante planificar no solo el procedimiento, sino también dónde y cómo realizarás tu recuperación.</p>
			<p>Una Recovery House en Medellín puede facilitar esta etapa al integrar cuidado, alojamiento y diferentes servicios en un mismo lugar.</p>
			<p>En Bellas Te Cuida acompañamos a nuestras pacientes desde su llegada a la ciudad y durante su estancia postoperatoria, siguiendo siempre las indicaciones de su cirujano.</p>
		`,
	},
	{
		question: "¿Por qué elegir Bellas Te Cuida?",
		answer: `
			<p>En Bellas Te Cuida buscamos ofrecer mucho más que hospedaje postoperatorio.</p>
			<p>Contamos con más de 10 años de experiencia, 1.000+ recuperaciones exitosas, 15+ aliados estratégicos y 14 servicios especializados, además de un equipo enfocado en brindar cuidado profesional y acompañamiento humano.</p>
			<p>Porque entendemos que recuperarte no significa únicamente atender tus necesidades físicas. También significa sentirte acompañada, tranquila y cuidada durante una etapa importante de tu proceso.</p>
			<p>En Bellas Te Cuida te cuidamos de adentro hacia afuera.</p>
		`,
	},
];
