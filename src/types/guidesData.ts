type GuideData = {
  slug: string;
  title: string;
  summary: string;
  sections: {
    order: number;
    heading: string;
    body: string;
  }[];
};

export const guidesData: GuideData[] = [
  {
    slug: "material-accesible",
    title: "Principios básicos para adaptar material didáctico accesible",
    summary:
      "Conocé los fundamentos para crear y adaptar materiales educativos que sean inclusivos y accesibles para todos tus estudiantes.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "La adaptación de materiales accesibles no depende de un solo ajuste: consiste en reconocer que cada estudiante aprende de forma diferente. Aplicar principios de accesibilidad desde el diseño es un gran fundamento del trabajo docente, ya que te permite llegar a más estudiantes sin necesidad de adaptar caso por caso.",
      },
      {
        order: 2,
        heading: "¿Qué es la adaptación de material accesible?",
        body: "La adaptación accesible en educación se refiere al proceso de convertir los contenidos de modo que sean comprensibles, navegables e interactuables por personas con distintas capacidades. Esto incluye ajustes visuales, auditivos, cognitivos y motores. El objetivo no es simplificar, sino remover barreras para que el aprendizaje sea posible.",
      },
      {
        order: 3,
        heading: "Principios básicos para el docente",
        body: "Usá texto alternativo en todas las imágenes. Asegurate de que el contraste entre texto y fondo sea suficiente (mínimo 4.5:1 para texto normal). Estructurá los documentos con encabezados jerárquicos (H1, H2, H3). Evitá transmitir información únicamente por color. Ofrecé transcripciones o subtítulos para todo contenido de audio y video.",
      },
      {
        order: 4,
        heading: "Flexibilidad clara",
        body: "Proporcionar alternativas es esencial: si tenés un video, incluí una transcripción escrita; si usás un diagrama, describilo textualmente. La flexibilidad no significa más trabajo, sino pensar con anticipación en la diversidad de tu estudiantado.",
      },
      {
        order: 5,
        heading: "Conclusiones",
        body: "La accesibilidad es una responsabilidad compartida. Al incorporarla desde el inicio de tu planificación, construís un entorno más justo para todos los estudiantes. Pequeños cambios como usar encabezados, añadir alt text y asegurar buen contraste marcan una diferencia enorme en la experiencia de aprendizaje.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "Web Content Accessibility Guidelines (WCAG) 2.1 — W3C. Universal Design for Learning (UDL) Guidelines — CAST. Guías de accesibilidad del Ministerio de Educación de Costa Rica.",
      },
    ],
  },
  {
    slug: "estrategias-ensenanza",
    title: "Estrategias de enseñanza inclusiva en programación",
    summary:
      "Explorá técnicas concretas para adaptar la enseñanza de programación a estudiantes con distintas necesidades y estilos de aprendizaje.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "Enseñar programación de forma inclusiva implica reconocer que no todos los estudiantes aprenden igual ni parten del mismo punto. Esta guía presenta estrategias prácticas para adaptar tus clases y materiales.",
      },
      {
        order: 2,
        heading: "Diseño Universal para el Aprendizaje (DUA)",
        body: "El DUA propone ofrecer múltiples medios de representación, acción y expresión. En programación esto significa: mostrar el mismo concepto con código, diagramas y explicación verbal; permitir que los estudiantes demuestren su aprendizaje de distintas formas.",
      },
      {
        order: 3,
        heading: "Andamiaje y apoyo gradual",
        body: "Comenzá con ejemplos completos y funcionales, luego retirá apoyos progresivamente. Usá comentarios en el código para guiar la comprensión. Ofrecé plantillas o código base como punto de partida antes de pedir producción independiente.",
      },
      {
        order: 4,
        heading: "Evaluación flexible",
        body: "Permitís distintas formas de entrega: código comentado, video explicativo, documento escrito o presentación oral. Esto reduce barreras para estudiantes con dificultades específicas sin comprometer los objetivos de aprendizaje.",
      },
      {
        order: 5,
        heading: "Entorno de trabajo accesible",
        body: "Asegurate de que las herramientas que usás (editores, plataformas, sistemas de entrega) sean accesibles. VS Code, por ejemplo, tiene buen soporte para lectores de pantalla. Evitá depender exclusivamente de herramientas que requieran mouse.",
      },
      {
        order: 6,
        heading: "Conclusiones",
        body: "La inclusión en la enseñanza de programación es posible y necesaria. Pequeños ajustes en cómo presentás el contenido, cómo evaluás y qué herramientas usás pueden marcar una diferencia enorme para tus estudiantes.",
      },
    ],
  },
  {
    slug: "evaluaciones",
    title: "Cómo adaptar evaluaciones para estudiantes con discapacidad",
    summary:
      "Estrategias concretas para diseñar evaluaciones justas e inclusivas que midan el aprendizaje real sin que la discapacidad sea una barrera.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "Evaluar de forma inclusiva significa medir lo que el estudiante sabe, no las barreras que enfrenta. Adaptar una evaluación no implica reducir su exigencia, sino eliminar los obstáculos que impiden que el conocimiento se exprese.",
      },
      {
        order: 2,
        heading: "¿Qué es una adaptación de evaluación?",
        body: "Una adaptación de evaluación es cualquier ajuste en el formato, tiempo, medio o condiciones de una prueba que permita a un estudiante con discapacidad demostrar su aprendizaje en igualdad de condiciones. No cambia los objetivos de aprendizaje.",
      },
      {
        order: 3,
        heading: "Tipos de adaptaciones más comunes",
        body: "Tiempo extendido para completar la prueba. Uso de lectores de pantalla o texto en voz alta. Respuestas orales en lugar de escritas. Preguntas en formato alternativo (opción múltiple en vez de desarrollo). Evaluaciones en partes más pequeñas distribuidas en el tiempo.",
      },
      {
        order: 4,
        heading: "Cómo documentar las adaptaciones",
        body: "Es importante registrar qué adaptaciones se aplicaron, por qué y con qué resultado. Esto permite dar continuidad al proceso del estudiante, compartir información con otros docentes y respaldar decisiones pedagógicas ante la institución.",
      },
      {
        order: 5,
        heading: "Evaluaciones alternativas",
        body: "En algunos casos, una evaluación alternativa completa puede ser más adecuada: portafolios, proyectos, exposiciones orales o demostraciones prácticas. Estas modalidades permiten evidenciar el aprendizaje de formas que las pruebas tradicionales no siempre capturan.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "CAST — Universal Design for Learning Guidelines. UNESCO — Educación inclusiva: el camino hacia el futuro. Ministerio de Educación Pública de Costa Rica — Adecuaciones curriculares.",
      },
    ],
  },
  {
    slug: "tecnologias-asistivas",
    title: "Uso de tecnologías asistivas en el aula",
    summary:
      "Conocé las herramientas tecnológicas que apoyan a estudiantes con discapacidad y cómo integrarlas en tus clases sin complicar la dinámica.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "Las tecnologías asistivas son herramientas diseñadas para compensar limitaciones funcionales y potenciar la autonomía de personas con discapacidad. En el aula, su integración puede transformar la experiencia de aprendizaje de un estudiante.",
      },
      {
        order: 2,
        heading: "¿Qué son las tecnologías asistivas?",
        body: "Son dispositivos, software o sistemas que ayudan a personas con discapacidad a realizar tareas que de otro modo serían difíciles o imposibles. Van desde aplicaciones de texto a voz hasta teclados adaptados, lectores de pantalla y software de predicción de texto.",
      },
      {
        order: 3,
        heading: "Herramientas clave para el aula",
        body: "Lectores de pantalla: NVDA (gratuito) y JAWS para discapacidad visual. Texto a voz: NaturalReader, Read&Write. Ampliadores de pantalla: ZoomText, lupas del sistema operativo. Comunicadores: aplicaciones AAC para estudiantes con dificultades del habla. Subtitulado automático: Google Meet y Teams ofrecen esta función en tiempo real.",
      },
      {
        order: 4,
        heading: "Cómo introducirlas sin interrumpir la clase",
        body: "La clave es normalizar el uso de estas herramientas desde el inicio del curso. Comunicá al grupo que algunos estudiantes usarán apoyos tecnológicos, sin exponer a nadie. Asegurate de que los materiales digitales que compartís sean compatibles con lectores de pantalla.",
      },
      {
        order: 5,
        heading: "Recursos gratuitos disponibles",
        body: "La mayoría de sistemas operativos modernos incluyen tecnologías asistivas nativas: narrador en Windows, VoiceOver en macOS e iOS, TalkBack en Android. Google Workspace y Microsoft 365 también tienen funciones de accesibilidad integradas que no requieren instalación adicional.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "ATIA — Assistive Technology Industry Association. Web Accessibility Initiative (WAI) — W3C. Microsoft Accessibility. Google Accessibility.",
      },
    ],
  },
  {
    slug: "dislexia",
    title: "Adaptación de material escrito para estudiantes con dislexia",
    summary:
      "Ajustes tipográficos, de formato y de estructura que hacen que los textos sean más accesibles para estudiantes con dislexia u otras dificultades lectoras.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "La dislexia es una dificultad específica del aprendizaje que afecta la lectura y la escritura, no la inteligencia. Con ajustes simples en el formato del material escrito, podés reducir significativamente la carga cognitiva de estos estudiantes.",
      },
      {
        order: 2,
        heading: "¿Qué es la dislexia?",
        body: "Es una condición neurológica que dificulta el reconocimiento preciso y fluido de palabras, la decodificación y la ortografía. Afecta entre el 5% y el 15% de la población. No tiene relación con la capacidad intelectual ni con el esfuerzo del estudiante.",
      },
      {
        order: 3,
        heading: "Ajustes tipográficos recomendados",
        body: "Usá fuentes sin serifa: Arial, Verdana, Calibri o la fuente OpenDyslexic (diseñada específicamente). Tamaño mínimo de 12-14 puntos. Interlineado de 1.5 o doble. Evitá texto justificado: el alineado a la izquierda es más fácil de seguir. Párrafos cortos con espacio entre ellos.",
      },
      {
        order: 4,
        heading: "Ajustes de formato y estructura",
        body: "Usá listas con viñetas en vez de párrafos densos. Resaltá palabras clave con negrita, no con cursiva ni subrayado. Evitá fondos blancos puros: un fondo crema o gris claro reduce el contraste agresivo. Incluí imágenes o íconos que apoyen el texto.",
      },
      {
        order: 5,
        heading: "Materiales digitales accesibles",
        body: "Los documentos digitales permiten que el estudiante use texto a voz, cambie el tamaño de fuente y ajuste colores. Compartí materiales en formato editable cuando sea posible. Evitá PDFs escaneados que no sean seleccionables: no son compatibles con lectores de pantalla.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "British Dyslexia Association — Dyslexia Style Guide. International Dyslexia Association. Understood.org — recursos para docentes.",
      },
    ],
  },
  {
    slug: "presentaciones-accesibles",
    title: "Accesibilidad en presentaciones y diapositivas",
    summary:
      "Guía práctica para crear presentaciones que puedan ser comprendidas por estudiantes con discapacidad visual, auditiva o cognitiva.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "Las presentaciones son uno de los materiales más usados en el aula y también uno de los menos accesibles. Con ajustes sencillos podés asegurarte de que todos tus estudiantes, independientemente de su discapacidad, puedan aprovecharlas.",
      },
      {
        order: 2,
        heading: "Contraste y color",
        body: "Usá siempre alto contraste entre texto y fondo. Negro sobre blanco o blanco sobre azul oscuro funcionan bien. Nunca transmitas información únicamente por color: por ejemplo, no uses solo rojo para señalar un error. Acompañalo con un ícono o texto.",
      },
      {
        order: 3,
        heading: "Texto e imágenes",
        body: "Limitá el texto por diapositiva: máximo 6 líneas. Usá fuentes sin serifa de al menos 24 puntos. Toda imagen debe tener texto alternativo en las propiedades del archivo. Evitá fondos con texturas o imágenes detrás del texto.",
      },
      {
        order: 4,
        heading: "Accesibilidad auditiva",
        body: "Si incluís videos, asegurate de que tengan subtítulos. Si usás audio, ofrecé una transcripción escrita. Hablá mirando al frente durante las clases presenciales para facilitar la lectura labial. En clases virtuales, activá el subtitulado automático de la plataforma.",
      },
      {
        order: 5,
        heading: "Compartir el material con anticipación",
        body: "Compartir las diapositivas antes de la clase permite que estudiantes con discapacidad visual las revisen con su lector de pantalla, que estudiantes con procesamiento lento las lean a su ritmo, y que todos lleguen con contexto previo que facilita la comprensión.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "Microsoft — Hacer que las presentaciones de PowerPoint sean accesibles. Google — Accesibilidad en Presentaciones de Google. WebAIM — Accessible PowerPoint Presentations.",
      },
    ],
  },
  {
    slug: "discapacidad-auditiva",
    title:
      "Apoyo a estudiantes con discapacidad auditiva en clases presenciales y virtuales",
    summary:
      "Estrategias de comunicación, uso de subtítulos y adaptaciones del entorno para garantizar la participación plena de estudiantes sordos o con hipoacusia.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "Los estudiantes sordos o con hipoacusia enfrentan barreras específicas en un aula donde la comunicación oral es el canal principal. Adaptar tu práctica docente para incluirlos no requiere conocer lengua de señas: hay muchas estrategias accesibles desde ya.",
      },
      {
        order: 2,
        heading: "Comunicación en el aula presencial",
        body: "Hablá siempre de frente al estudiante. Mantené buena iluminación en tu rostro para facilitar la lectura labial. Evitá cubrirte la boca al hablar. Repetí en voz alta las preguntas del grupo antes de responderlas. Avisá cuando vayas a cambiar de tema.",
      },
      {
        order: 3,
        heading: "Herramientas para clases virtuales",
        body: "Activá los subtítulos automáticos en Zoom, Google Meet o Teams. Usá el chat como canal paralelo para compartir puntos clave. Grabá las sesiones para que el estudiante pueda revisarlas. Si hay un intérprete de lengua de señas, asegurate de que su video sea visible en todo momento.",
      },
      {
        order: 4,
        heading: "Material escrito de apoyo",
        body: "Compensá la comunicación oral con material escrito: guías, resúmenes, transcripciones. Los videos deben tener subtítulos: YouTube permite agregarlos manualmente o generar subtítulos automáticos. Herramientas como Otter.ai pueden transcribir clases en tiempo real.",
      },
      {
        order: 5,
        heading: "Ambiente inclusivo",
        body: "Normalizá el uso de apoyos comunicativos en el grupo. Asegurate de que el estudiante tenga una ubicación con buena visibilidad del docente y del pizarrón. Facilitá la participación en discusiones grupales dando tiempo suficiente y avisando con antelación cuando se va a debatir.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "National Deaf Center — Teaching Deaf and Hard-of-Hearing Students. Gallaudet University — Resources for Educators. FENASORD Costa Rica.",
      },
    ],
  },
  {
    slug: "discapacidad-visual",
    title: "Diseño de materiales para estudiantes con discapacidad visual",
    summary:
      "Cómo transformar contenidos visuales en formatos accesibles: texto alternativo, descripciones, audio y materiales táctiles.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "Los materiales didácticos tradicionales dependen en gran medida de lo visual. Para estudiantes con discapacidad visual, esto representa una barrera directa al aprendizaje. Esta guía te muestra cómo transformar tus materiales en formatos que funcionen para todos.",
      },
      {
        order: 2,
        heading: "Texto alternativo en imágenes",
        body: 'Todo contenido visual debe tener una descripción textual. En documentos Word y PowerPoint podés agregar texto alternativo desde las propiedades de la imagen. En HTML usá el atributo alt. La descripción debe explicar qué muestra la imagen y qué información aporta, no solo "imagen de...".',
      },
      {
        order: 3,
        heading: "Documentos accesibles",
        body: "Usá encabezados jerárquicos reales (no texto en negrita que simula un título). Creá tablas con encabezados de fila y columna definidos. Evitá PDFs generados desde imagen escaneada. Los documentos de Word y Google Docs tienen verificadores de accesibilidad integrados que podés usar antes de compartir.",
      },
      {
        order: 4,
        heading: "Contenido de audio y video",
        body: "Para estudiantes con ceguera, el audio es el canal principal. Describí en voz alta lo que mostrás en pantalla durante las clases. En videos, incluí audiodescripción cuando haya contenido visual relevante que no se explica oralmente. Los podcasts y grabaciones de audio son formatos naturalmente accesibles.",
      },
      {
        order: 5,
        heading: "Herramientas y recursos",
        body: "Lectores de pantalla gratuitos: NVDA para Windows, VoiceOver en macOS. Para materiales táctiles: impresoras Braille disponibles en algunas universidades. Para gráficos: ofrecé una descripción textual detallada o una tabla de datos equivalente. Consultá con el estudiante qué formato le funciona mejor.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "WebAIM — Creating Accessible Documents. American Foundation for the Blind — Resources for Educators. ONCE — Materiales educativos accesibles.",
      },
    ],
  },
  {
    slug: "tdah",
    title: "Adaptaciones para estudiantes con TDAH en el aula",
    summary:
      "Estrategias de organización, presentación del contenido y gestión del aula que favorecen la concentración y el desempeño de estudiantes con TDAH.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "El Trastorno por Déficit de Atención e Hiperactividad afecta la regulación de la atención, el control de impulsos y la organización. En el aula, esto se traduce en dificultades para sostener el esfuerzo en tareas largas, seguir instrucciones complejas y gestionar el tiempo.",
      },
      {
        order: 2,
        heading: "¿Qué es el TDAH?",
        body: "El TDAH es una condición neurológica con base genética que afecta las funciones ejecutivas del cerebro. Existen tres presentaciones: predominantemente inatento, predominantemente hiperactivo-impulsivo, y combinado. No es falta de voluntad ni de inteligencia.",
      },
      {
        order: 3,
        heading: "Adaptaciones en la presentación del contenido",
        body: "Dividí las tareas largas en pasos pequeños y claros. Usá instrucciones numeradas y cortas. Alternás actividades activas con pasivas para mantener el engagement. Usá apoyo visual: esquemas, listas, colores. Evitá bloques de texto densos sin estructura visible.",
      },
      {
        order: 4,
        heading: "Gestión del tiempo y organización",
        body: "Avisá con anticipación los cambios de actividad. Usá temporizadores visibles. Permitís el uso de agendas, recordatorios o apps de organización. Para entregas, considerá plazos intermedios en lugar de una sola fecha final. La estructura predecible reduce la ansiedad y mejora el desempeño.",
      },
      {
        order: 5,
        heading: "Ambiente y evaluación",
        body: "Ubicá al estudiante cerca del docente y lejos de distracciones. Para evaluaciones, considerá tiempo extendido y un ambiente con menos estímulos. Permitís pausas activas cortas. Valorá el proceso tanto como el resultado: los estudiantes con TDAH pueden tener gran comprensión conceptual aunque su presentación escrita sea irregular.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "CHADD — Educators and Schools. ADDitude Magazine — Teaching Students with ADHD. American Psychiatric Association — DSM-5 ADHD.",
      },
    ],
  },
  {
    slug: "comunicacion-efectiva",
    title: "Comunicación efectiva con estudiantes con discapacidad",
    summary:
      "Pautas de lenguaje inclusivo, comunicación aumentativa y alternativa, y cómo crear un ambiente donde todos los estudiantes puedan expresarse.",
    sections: [
      {
        order: 1,
        heading: "Introducción",
        body: "La forma en que te comunicás con tus estudiantes con discapacidad impacta directamente en su participación y bienestar. Pequeños ajustes en el lenguaje y en la dinámica del aula pueden marcar una diferencia enorme en cómo se sienten incluidos.",
      },
      {
        order: 2,
        heading: "Lenguaje inclusivo y centrado en la persona",
        body: 'Usá lenguaje centrado en la persona: "estudiante con discapacidad" en lugar de "discapacitado". Evitá términos como "sufre de", "padece" o "tiene limitaciones". En algunos contextos, la comunidad sorda prefiere "persona sorda" sobre "persona con discapacidad auditiva". Preguntá cuando tengas dudas.',
      },
      {
        order: 3,
        heading: "Comunicación aumentativa y alternativa (CAA)",
        body: "La CAA incluye todos los métodos de comunicación que complementan o reemplazan el habla: tableros de comunicación, pictogramas, aplicaciones como Proloquo2Go o LetMeTalk, y lengua de señas. Si un estudiante usa CAA, aprendé lo básico y asegurate de que tenga tiempo suficiente para comunicarse.",
      },
      {
        order: 4,
        heading: "Crear un ambiente de participación segura",
        body: "Establecé normas claras de respeto desde el inicio del curso. Normalizá las diferencias sin sobreexponerlas. Ofrecé múltiples formas de participación: oral, escrita, visual. No respondas por el estudiante ni termines sus ideas. Dales el tiempo que necesitan para expresarse.",
      },
      {
        order: 5,
        heading: "Coordinación con el equipo de apoyo",
        body: "En muchas instituciones existen equipos de orientación, trabajo social o apoyos especializados. Coordinarte con ellos te permite conocer las necesidades específicas de cada estudiante, recibir orientación sobre adaptaciones y dar seguimiento conjunto al proceso educativo.",
      },
      {
        order: 6,
        heading: "Referencias",
        body: "ISAAC — International Society for Augmentative and Alternative Communication. Disability Language Style Guide — National Center on Disability and Journalism. FENADIS Costa Rica.",
      },
    ],
  },
];