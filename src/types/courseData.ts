type SlideData = {
  text: string;
};

type LessonData = {
  lessonName: string;
  lessonType: 'theory' | 'practice';
  slides: SlideData[];
};

type TopicData = {
  topicName: string;
  lessons: LessonData[];
};

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
};

type CourseData = {
  user: UserData;
  title: string;
  subtitle: string;
  initialism: string;
  credits: string;
  courseType: 'theoryPractice' | 'theory';
  description: string;
  topics: TopicData[];
};

export const courseData: CourseData = {
  user: {
    firstName: "Sistema",
    lastName: "EMCODE",
    email: "sistema@emcode.ac.cr",
    role: "teacher",
  },
  title: "Python: De Principiante a Desarrollador Profesional",
  subtitle: "Un curso completo de programación con Python",
  initialism: "PYTHON",
  credits: "3",
  courseType: "theoryPractice",
  description:
    "Un curso completo que te lleva desde cero hasta construir aplicaciones profesionales en Python. Aprenderás fundamentos de programación, programación orientada a objetos, trabajo con archivos y bases de datos, APIs, automatización y buenas prácticas de código limpio.",
  topics: [
    {
      topicName: "Módulo 1: Introducción a Python y Fundamentos de Programación",
      lessons: [
        {
          lessonName: "Capítulo 1: ¿Qué es programar?",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Comprender qué significa programar.\n• Entender la diferencia entre un algoritmo y un programa.\n• Explicar cómo una computadora ejecuta instrucciones.\n• Comprender por qué existen los lenguajes de programación.\n• Identificar las etapas para resolver un problema mediante software.\n• Escribir tu primer algoritmo utilizando pseudocódigo.",
            },
            {
              text:
                "1.1 ¿Qué es una computadora?\n\nUna computadora es una máquina diseñada para procesar información. Recibe datos, realiza operaciones sobre ellos y produce un resultado.\n\nEste proceso se resume en tres etapas:\n  Entrada → Procesamiento → Salida\n\nEjemplo:\n  Entrada: 2 + 5\n  Procesamiento: La CPU realiza la suma\n  Salida: 7\n\nLa computadora no \"entiende\" los datos; ejecuta instrucciones predefinidas.",
            },
            {
              text:
                "1.2 ¿Qué significa programar?\n\nProgramar es diseñar una secuencia ordenada de instrucciones que una computadora ejecuta para resolver un problema.\n\nDefinición formal:\n\"Programar es analizar un problema, diseñar una solución lógica y traducirla a un lenguaje interpretable o compilable por una computadora.\"\n\nEtapas del proceso:\n  1. Comprender el problema\n  2. Analizar la información\n  3. Diseñar una solución\n  4. Escribir el código\n  5. Probar\n  6. Corregir errores\n  7. Mejorar el diseño\n\nAnalogía: una receta de cocina. La computadora necesita una \"receta\" extremadamente precisa; si alteras el orden, el resultado es incorrecto.",
            },
            {
              text:
                "1.3 El lenguaje de las computadoras\n\nLas computadoras entienden solo dos estados: 1 (encendido) y 0 (apagado). Sistema binario.\n\nEjemplos:\n  Letra A → 01000001\n  Número 25 → 00011001\n\nEvolución de los lenguajes:\n  1ª generación: Lenguaje máquina (binario)\n    101101010001010101010\n  2ª generación: Ensamblador\n    MOV AX, 10 / ADD AX, 5\n  3ª generación: Alto nivel\n    numero = 10; numero += 5; print(numero)\n\nPython pertenece a la tercera generación.",
            },
            {
              text:
                "1.4 ¿Qué es un lenguaje de programación?\n\nConjunto de reglas sintácticas y semánticas para expresar algoritmos que una computadora pueda ejecutar.\n\nEjemplo correcto:\n  print(\"Hola\")\n\nEjemplo incorrecto (no sigue la sintaxis de Python):\n  imprimir Hola\n\nCada lenguaje tiene su propia sintaxis y semántica.",
            },
            {
              text:
                "1.5 ¿Qué es un algoritmo?\n\nSecuencia finita, ordenada y no ambigua de pasos para resolver un problema.\n\nCaracterísticas:\n  • Tener un inicio\n  • Tener un final\n  • Ser claro\n  • Ser ejecutable\n  • Resolver un problema\n\nEjemplo: Calcular área de un rectángulo\n  1. Leer base\n  2. Leer altura\n  3. Multiplicar base × altura\n  4. Mostrar resultado\n\nPrimero se diseña la solución; luego se implementa.",
            },
            {
              text:
                "1.6 Algoritmos en la vida diaria\n\nPreparar café:\n  Inicio → Calentar agua → Agregar café → Verter agua → Mezclar → Servir → Fin\n\nRetirar dinero de un cajero automático:\n  1. Insertar tarjeta\n  2. Ingresar PIN\n  3. Validar PIN\n  4. Seleccionar retiro\n  5. Ingresar monto\n  6. Verificar saldo\n  7. Entregar dinero\n  8. Imprimir recibo\n  9. Expulsar tarjeta\n\nCada proceso sigue una secuencia lógica de pasos.",
            },
            {
              text:
                "1.7 ¿Qué es un programa?\n\nAlgoritmo + Lenguaje = Programa\n\nEjemplo:\n  Algoritmo:\n    1. Leer dos números\n    2. Sumarlos\n    3. Mostrar resultado\n\n  Programa en Python:\n    numero1 = 10\n    numero2 = 20\n    resultado = numero1 + numero2\n    print(resultado)\n\nEl algoritmo describe la lógica; el programa la implementa.",
            },
            {
              text:
                "1.8 Resolución de problemas mediante programación\n\nProceso completo:\n  Problema → Análisis → Diseño → Codificación → Pruebas → Corrección → Programa final\n\nEjemplo: precio con 15% de descuento\n  Análisis:\n    Entrada: precio del producto\n    Proceso: calcular descuento y restarlo\n    Salida: precio final\n  Pseudocódigo:\n    Leer precio\n    descuento = precio × 0.15\n    precioFinal = precio − descuento\n    Mostrar precioFinal\n\nEl diseño es independiente del lenguaje.",
            },
            {
              text:
                "Resumen del capítulo\n\n• Una computadora procesa datos mediante instrucciones.\n• Programar es diseñar soluciones y traducirlas a un lenguaje de programación.\n• Un algoritmo es una secuencia ordenada de pasos para resolver un problema.\n• Un programa es la implementación de un algoritmo en un lenguaje específico.\n• Python es un lenguaje de alto nivel para programas claros y legibles.\n• Antes de escribir código, hay que comprender el problema y diseñar la solución.",
            },
            {
              text:
                "Conceptos clave\n\n• Computadora\n• Programa\n• Programación\n• Algoritmo\n• Lenguaje de programación\n• Lenguaje máquina\n• Lenguaje ensamblador\n• Lenguaje de alto nivel\n• Entrada\n• Procesamiento\n• Salida\n• Sintaxis\n• Semántica\n• Pseudocódigo",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Explica con tus propias palabras qué significa programar.\n2. Describe tres algoritmos de la vida cotidiana.\n3. ¿Cuál es la diferencia entre un algoritmo y un programa?\n4. Investiga por qué las computadoras utilizan el sistema binario.\n5. Diseña un algoritmo para calcular el promedio de tres notas.\n6. Diseña un algoritmo para determinar si una persona puede votar según su edad.\n7. Representa con un diagrama de flujo el inicio de sesión en una app.\n8. Escribe un algoritmo para calcular el área de un triángulo.\n9. Identifica entradas, procesamiento y salidas de un cajero automático.\n10. Explica por qué es importante diseñar un algoritmo antes de codificar.",
            },
          ],
        },
        {
          lessonName: "Capítulo 2: Historia de Python",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Conocer el origen y la historia del lenguaje Python.\n• Identificar las versiones más importantes de Python.\n• Comprender por qué Python se llama así.\n• Reconocer las áreas donde Python es más utilizado.\n• Entender la evolución del lenguaje hasta la actualidad.",
            },
            {
              text:
                "2.1 El origen de Python\n\nCreador: Guido van Rossum\nAño: 1989 (implementación iniciada en diciembre)\nLanzamiento: 1991\n\nGuido trabajaba en el Centro de Matemáticas y Ciencias de la Computación (CWI) en los Países Bajos.\n\nPython nació como un proyecto de fin de año para ocupar el tiempo durante las vacaciones de Navidad.\n\nInspiración: Guido había trabajado con el lenguaje ABC, diseñado para la enseñanza, y quería crear un lenguaje más potente pero igualmente fácil de aprender.",
            },
            {
              text:
                "2.2 ¿Por qué el nombre Python?\n\nEl nombre no proviene de la serpiente.\n\nGuido van Rossum era fanático del grupo cómico británico Monty Python's Flying Circus.\n\nNecesitaba un nombre corto, único y con un toque de humor.\n\n\"Python\" cumplía todos los requisitos.\n\nPor eso la documentación de Python suele incluir referencias humorísticas a los sketches de Monty Python.",
            },
            {
              text:
                "2.3 Historia de versiones\n\nPython 1.0 - enero 1994:\n  • Primer lanzamiento oficial\n  • Incluía lambda, map, filter y reduce\n\nPython 2.0 - octubre 2000:\n  • Comprensión de listas\n  • Recolector de basura\n  • Unicode\n\nPython 3.0 - diciembre 2008:\n  • Ruptura con Python 2 (no retrocompatible)\n  • print como función\n  • División real con /\n  • Mejor manejo de strings y Unicode\n\nPython 2 llegó a su fin de vida en enero de 2020.",
            },
            {
              text:
                "2.4 Python 2 vs Python 3\n\nDiferencias clave:\n\n  print \"Hola\"      # Python 2\n  print(\"Hola\")     # Python 3\n\n   10 / 3 = 3       # Python 2 (división entera)\n   10 / 3 = 3.333   # Python 3 (división real)\n\n  raw_input()        # Python 2\n  input()            # Python 3\n\n  Unicode y strings:\n    Python 2: str = bytes, unicode aparte\n    Python 3: str = Unicode, bytes aparte\n\nLa migración masiva tomó casi una década.",
            },
            {
              text:
                "2.5 Python en la actualidad\n\nPython es uno de los lenguajes más populares del mundo (TIOBE, Stack Overflow).\n\nÁreas de aplicación:\n  • Desarrollo web (Django, Flask, FastAPI)\n  • Ciencia de datos (NumPy, Pandas, Matplotlib)\n  • Inteligencia artificial y Machine Learning (TensorFlow, PyTorch)\n  • Automatización (scripts, web scraping)\n  • Desarrollo de APIs\n  • Ciberseguridad\n  • Educación\n  • IoT y Raspberry Pi\n\nUsado por: Google, Netflix, Spotify, NASA, Instagram, Dropbox.",
            },
            {
              text:
                "2.6 El futuro de Python\n\nPython 3.x continúa evolucionando con releases anuales:\n  • 3.8: operador walrus ( := )\n  • 3.9: nuevos operadores de diccionario\n  • 3.10: pattern matching (match/case)\n  • 3.11: mejoras de rendimiento significativas\n  • 3.12: f-strings más flexibles\n\nCPython (implementación oficial) sigue siendo la referencia.\n\nAlternativas: PyPy (más rápido), MicroPython (embebido), Cython (extensiones C).\n\nPython continúa siendo el lenguaje de entrada para nuevos programadores.",
            },
            {
              text:
                "Resumen del capítulo\n\n• Python fue creado por Guido van Rossum en 1989.\n• Su nombre proviene de Monty Python, no de la serpiente.\n• Python 3 rompió la compatibilidad con Python 2 en 2008.\n• Hoy es uno de los lenguajes más usados en IA, datos, web y automatización.\n• El lenguaje sigue evolucionando con releases anuales.\n• Su filosofía de legibilidad y simplicidad lo hace ideal para principiantes y expertos.",
            },
            {
              text:
                "Conceptos clave\n\n• Guido van Rossum\n• CPython\n• Python 2 vs Python 3\n• Monty Python\n• CWI\n• ABC\n• PyPy\n• Release cadence (PEP 602)\n• BDFL (Benevolent Dictator For Life)",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Investiga quién fue el BDFL de Python y qué significa ese rol.\n2. ¿Por qué Java y C# no cambiaron tan drásticamente como Python 2→3?\n3. Busca tres empresas que usen Python y qué hacen con él.\n4. ¿Qué es PEP y cuál es su propósito?\n5. ¿Cuál es la versión actual de Python y qué novedades trajo?",
            },
          ],
        },
        {
          lessonName: "Capítulo 3: Filosofía de Python",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Comprender la filosofía que guía el diseño de Python.\n• Explicar el Zen de Python y sus principios.\n• Reconocer la importancia de la legibilidad en el código.\n• Entender el significado de \"baterías incluidas\".\n• Aplicar los principios de Python al escribir código.",
            },
            {
              text:
                "3.1 El Zen de Python (PEP 20)\n\nEscribir en el intérprete de Python:\n  >>> import this\n\nResultado:\n  Hermoso es mejor que feo.\n  Explícito es mejor que implícito.\n  Simple es mejor que complejo.\n  Complejo es mejor que complicado.\n  Plano es mejor que anidado.\n  Espaciado es mejor que denso.\n  La legibilidad cuenta.\n\nEstos 19 principios guían el diseño del lenguaje.",
            },
            {
              text:
                "3.2 Principios fundamentales del Zen\n\n\"Bello es mejor que feo\":\n  El código debe ser estéticamente agradable.\n\n\"Explícito es mejor que implícito\":\n  Preferir código claro que oculte su funcionamiento.\n  Malo: from x import *\n  Bueno: from x import funcion_especifica\n\n\"Simple es mejor que complejo\":\n  La solución más simple suele ser la mejor.\n  No añadas complejidad innecesaria.",
            },
            {
              text:
                "3.3 Más principios del Zen\n\n\"Plano es mejor que anidado\":\n  Evitar estructuras excesivamente anidadas (if dentro de if dentro de if).\n\n\"Espaciado es mejor que denso\":\n  Usar líneas en blanco y espacios para mejorar la legibilidad.\n\n\"La legibilidad cuenta\":\n  El código se lee muchas más veces de las que se escribe.\n  Optimizar para la lectura, no solo para la ejecución.\n\n\"Si la implementación es difícil de explicar, es una mala idea.\"\n  Si no puedes explicarlo simplemente, probablemente está mal diseñado.",
            },
            {
              text:
                "3.4 El aforismo completo\n\nLos 19 aforismos del Zen de Python incluyen:\n\n  • Los casos especiales no son lo suficientemente especiales como para romper las reglas.\n  • Aunque la practicidad le gana a la pureza.\n  • Los errores nunca deberían pasar silenciosamente.\n  • A menos que se silencien explícitamente.\n  • Frente a la ambigüedad, rechaza la tentación de adivinar.\n  • Debería haber una —y preferiblemente solo una— forma obvia de hacerlo.\n  • Ahora es mejor que nunca.\n  • Aunque nunca es a menudo mejor que ya mismo.",
            },
            {
              text:
                "3.5 PEP 8 — Guía de estilo\n\nPEP 8 es la guía de estilo oficial de Python.\n\nRecomendaciones principales:\n  • 4 espacios por nivel de sangría (no tabs)\n  • Máximo 79 caracteres por línea\n  • Líneas en blanco para separar funciones y clases\n  • Importaciones en líneas separadas\n  • Espacios alrededor de operadores\n  • Nombres en snake_case para variables y funciones\n  • Nombres en CamelCase para clases\n  • Constantes en MAYUSCULAS\n\nNo es obligatorio, pero es el estándar de la comunidad.",
            },
            {
              text:
                "3.6 Baterías incluidas\n\nPython viene con una amplia biblioteca estándar que cubre la mayoría de necesidades comunes.\n\nMódulos incluidos:\n  • math, random, datetime\n  • os, sys, pathlib\n  • json, csv, xml\n  • re (expresiones regulares)\n  • collections, itertools\n  • unittest (pruebas)\n  • sqlite3\n  • http.server\n  • tkinter (interfaces gráficas)\n\nEsto permite resolver problemas sin instalar paquetes externos.",
            },
            {
              text:
                "3.7 El principio DUCK TYPING\n\n\"Si camina como pato y suena como pato, entonces es un pato.\"\n\nEn Python, no importa el tipo exacto de un objeto, sino qué métodos tiene.\n\nEjemplo:\n  def hacer_sonar(objeto):\n      objeto.sonido()\n\n  # Cualquier objeto con método sonido() funciona\n  # Sin necesidad de herencia o interfaces\n\nEsto hace a Python flexible y dinámico.",
            },
            {
              text:
                "3.8 EAFP vs LBYL\n\nEAFP (Easier to Ask for Forgiveness than Permission):\n  Intentar la operación y manejar el error si ocurre.\n  try:\n      resultado = x / y\n  except ZeroDivisionError:\n      print(\"No se puede dividir por cero\")\n\nLBYL (Look Before You Leap):\n  Verificar antes de ejecutar.\n  if y != 0:\n      resultado = x / y\n\nPython favorece EAFP: es más legible y evita condiciones redundantes.",
            },
            {
              text:
                "Resumen del capítulo\n\n• El Zen de Python (PEP 20) define la filosofía del lenguaje.\n• La legibilidad, simplicidad y claridad son valores fundamentales.\n• PEP 8 establece el estándar de estilo para código Python.\n• \"Baterías incluidas\" significa que la biblioteca estándar es muy completa.\n• Python favorece EAFP sobre LBYL.\n• Duck typing permite escribir código genérico y flexible.",
            },
            {
              text:
                "Conceptos clave\n\n• Zen de Python (PEP 20)\n• PEP 8\n• Baterías incluidas\n• Duck typing\n• EAFP (Easier to Ask for Forgiveness than Permission)\n• LBYL (Look Before You Leap)\n• import this\n• Legibilidad\n• Explícito vs implícito",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Ejecuta import this en el intérprete de Python y elige tu aforismo favorito.\n2. ¿Cuál es la diferencia entre EAFP y LBYL? Da un ejemplo de cada uno.\n3. ¿Por qué es importante la legibilidad en el código?\n4. Investiga qué es el PEP 1 y cómo funciona el proceso de propuestas.\n5. Reescribe el siguiente código aplicando PEP 8:\n   def suma(a,b):return a+b\ndef resta(a,b):return a-b",
            },
          ],
        },
        {
          lessonName: "Capítulo 4: Instalación y entorno de desarrollo",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Descargar e instalar Python en tu sistema operativo.\n• Verificar la instalación desde la terminal.\n• Conocer los diferentes IDEs y editores para Python.\n• Configurar Visual Studio Code para desarrollo en Python.\n• Instalar paquetes con pip.\n• Crear y activar entornos virtuales.",
            },
            {
              text:
                "4.1 Descargar Python\n\nSitio oficial: python.org\n\nSección: Downloads\n\nVersión recomendada: La más reciente estable (Python 3.x)\n\nImportante: marcar \"Add Python to PATH\" durante la instalación en Windows.\n\nInstaladores disponibles:\n  • Windows: instalador MSI o ejecutable\n  • macOS: paquete .pkg o Homebrew\n  • Linux: gestor de paquetes (apt, yum, dnf)\n    sudo apt install python3 python3-pip",
            },
            {
              text:
                "4.2 Verificar la instalación\n\nAbrir terminal (cmd, PowerShell, Terminal):\n\n  python --version\n  Python 3.x.x\n\n  pip --version\n  pip x.x.x from ...\n\nEn macOS/Linux puede ser python3:\n\n  python3 --version\n\nModo interactivo:\n\n  python\n  >>> print(\"¡Hola, mundo!\")\n  ¡Hola, mundo!\n  >>> exit()\n\nSi el comando no se encuentra, verificar PATH.",
            },
            {
              text:
                "4.3 El intérprete interactivo (REPL)\n\nREPL: Read-Eval-Print Loop\n\nAl ejecutar python sin argumentos, entras al modo interactivo.\n\nÚtil para:\n  • Probar código rápidamente\n  • Experimentar con funciones\n  • Calcular operaciones\n  • Explorar módulos\n\nCaracterísticas:\n  >>> es el prompt principal\n  ... es el prompt secundario (bloques multilínea)\n  exit() o Ctrl+Z (Windows) / Ctrl+D (Unix) para salir\n\nEjemplo:\n  >>> 2 + 2\n  4\n  >>> print(\"Hola\" * 3)\n  HolaHolaHola",
            },
            {
              text:
                "4.4 Editores e IDEs\n\nIDEs completos (recomendados para el curso):\n\n  • VS Code — ligero, extensible, el más usado\n  • PyCharm — IDE dedicado a Python (Community es gratuita)\n  • Thonny — ideal para principiantes absolutos\n\nEditores alternativos:\n  • Sublime Text\n  • Vim / Neovim\n  • IDLE (viene con Python)\n  • Jupyter Notebook (ideal para ciencia de datos)\n\nPara este curso usaremos VS Code.",
            },
            {
              text:
                "4.5 Configurar VS Code para Python\n\nPasos:\n  1. Descargar VS Code desde code.visualstudio.com\n  2. Instalar la extensión Python (Microsoft)\n  3. Crear un archivo .py\n  4. Seleccionar el intérprete (Ctrl+Shift+P → Python: Select Interpreter)\n  5. Ejecutar con el botón ▶ o con F5\n\nExtensiones recomendadas:\n  • Python (Microsoft) — linting, debugging, IntelliSense\n  • Pylance — análisis de código rápido\n  • Python Docstring Generator\n  • GitLens\n  • Prettier",
            },
            {
              text:
                "4.6 pip — Gestor de paquetes\n\npip instala paquetes desde PyPI (Python Package Index).\n\nComandos básicos:\n  pip install nombre_paquete\n  pip install nombre_paquete==version\n  pip uninstall nombre_paquete\n  pip list\n  pip freeze\n\nEjemplos:\n  pip install requests\n  pip install numpy pandas matplotlib\n  pip install flask\n\nPyPI tiene más de 500,000 paquetes disponibles.",
            },
            {
              text:
                "4.7 Entornos virtuales\n\nLos entornos virtuales aíslan dependencias entre proyectos.\n\nCrear entorno virtual:\n  python -m venv nombre_entorno\n  # Ejemplo: python -m venv venv\n\nActivar:\n  Windows: .\\venv\\Scripts\\activate\n  macOS/Linux: source venv/bin/activate\n\nDesactivar:\n  deactivate\n\nBeneficios:\n  • Cada proyecto tiene sus dependencias\n  • Evita conflictos entre versiones\n  • No contamina la instalación global\n  • Reproducibilidad con requirements.txt\n    pip freeze > requirements.txt",
            },
            {
              text:
                "4.8 Tu primer entorno de trabajo\n\nFlujo de trabajo recomendado:\n\n  1. Crear carpeta del proyecto:\n     mkdir mi_proyecto\n     cd mi_proyecto\n\n  2. Crear entorno virtual:\n     python -m venv venv\n\n  3. Activar entorno:\n     .\\venv\\Scripts\\activate\n\n  4. Instalar dependencias:\n     pip install nombre_paquete\n\n  5. Crear archivo main.py y comenzar a programar\n\n  6. Ejecutar:\n     python main.py",
            },
            {
              text:
                "4.9 Buenas prácticas con el entorno\n\n  • No compartir la carpeta venv (agregar a .gitignore)\n  • Mantener actualizado requirements.txt\n  • Usar .env para variables de entorno\n  • Nombrar los archivos en snake_case.py\n  • Usar main.py como punto de entrada\n  • Mantener una estructura de carpetas ordenada:\n    mi_proyecto/\n    ├── venv/\n    ├── src/\n    │   └── main.py\n    ├── requirements.txt\n    └── .gitignore\n\nEsta estructura te acompañará durante todo el curso.",
            },
            {
              text:
                "Resumen del capítulo\n\n• Python se descarga desde python.org.\n• Verificar instalación con python --version.\n• El REPL permite probar código interactivamente.\n• VS Code con la extensión Python es el entorno recomendado.\n• pip instala paquetes desde PyPI.\n• Los entornos virtuales aíslan dependencias entre proyectos.\n• Activar el entorno antes de trabajar en cada proyecto.",
            },
            {
              text:
                "Conceptos clave\n\n• PATH\n• REPL (Read-Eval-Print Loop)\n• IDE\n• pip\n• PyPI (Python Package Index)\n• Entorno virtual (venv)\n• requirements.txt\n• Intérprete\n• .gitignore\n• VS Code",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Instala Python y verifica la versión con python --version.\n2. Abre el REPL, calcula 15 * 37 y sal con exit().\n3. Crea un entorno virtual, actívalo y ejecuta pip list.\n4. Instala la biblioteca requests con pip.\n5. Configura VS Code con la extensión Python y crea un archivo hola.py.\n6. Ejecuta hola.py desde la terminal con python hola.py.",
            },
          ],
        },
        {
          lessonName: "Capítulo 5: Primer programa",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Escribir y ejecutar tu primer programa en Python.\n• Utilizar la función print() para mostrar información.\n• Agregar comentarios a tu código.\n• Identificar y corregir errores comunes.\n• Entender la diferencia entre errores de sintaxis y de ejecución.",
            },
            {
              text:
                "5.1 ¡Hola, mundo!\n\nEl programa más famoso de la programación:\n\n  print(\"¡Hola, mundo!\")\n\nPara ejecutarlo:\n  1. Crear archivo hola.py\n  2. Escribir la línea\n  3. Ejecutar: python hola.py\n\nSalida:\n  ¡Hola, mundo!\n\nprint() muestra texto en la consola.\nLas comillas delimitan una cadena de texto (string).\nLos paréntesis indican que print es una función.",
            },
            {
              text:
                "5.2 La función print()\n\nprint() puede recibir múltiples argumentos:\n  print(\"Hola\", \"mundo\", \"desde\", \"Python\")\n  # Salida: Hola mundo desde Python\n\nParámetro sep (separador):\n  print(\"a\", \"b\", \"c\", sep=\"-\")\n  # Salida: a-b-c\n\nParámetro end (final):\n  print(\"Hola\", end=\"\")\n  print(\" mundo\")\n  # Salida: Hola mundo\n\nPor defecto: sep=\" \", end=\"\\n\"",
            },
            {
              text:
                "5.3 Comentarios\n\nLos comentarios son ignorados por Python. Sirven para explicar el código.\n\nComentario de una línea:\n  # Esto es un comentario\n  print(\"Hola\")  # Comentario al final de línea\n\nComentario multilínea (docstring):\n  \"\"\"\n  Esto es un comentario\n  de múltiples líneas\n  \"\"\"\n\nBuenas prácticas:\n  • Explicar el POR QUÉ, no el QUÉ\n  • No comentar código obvio\n  • Mantener comentarios actualizados\n  • Usar comentarios para documentar funciones complejas",
            },
            {
              text:
                "5.4 Errores de sintaxis (SyntaxError)\n\nOcurren cuando el código no sigue las reglas gramaticales de Python.\n\nEjemplos:\n  print(\"Hola\"  # Falta paréntesis de cierre\n  # SyntaxError: '(' was never closed\n\n  print(\"Hola)    # Comillas sin cerrar\n  # SyntaxError: unterminated string literal\n\n  print \"Hola\"   # Python 3 requiere paréntesis\n  # SyntaxError: Missing parentheses\n\nPython detiene la ejecución y señala la línea del error.",
            },
            {
              text:
                "5.5 Errores de ejecución (RuntimeError / Exceptions)\n\nOcurren durante la ejecución del programa.\n\nEjemplos:\n  print(10 / 0)\n  # ZeroDivisionError: division by zero\n\n  print(int(\"hola\"))\n  # ValueError: invalid literal for int()\n\n  print(variable_inexistente)\n  # NameError: name 'variable_inexistente' is not defined\n\nEl programa se detiene a menos que se maneje el error (try/except).",
            },
            {
              text:
                "5.6 Errores de lógica (semántica)\n\nEl programa ejecuta pero produce resultados incorrectos.\n\nPython no los detecta; tú debes encontrarlos.\n\nEjemplo:\n  # Calcular promedio de 3 notas\n  nota1 = 10\n  nota2 = 15\n  nota3 = 20\n  promedio = nota1 + nota2 + nota3  # Falta dividir entre 3\n  print(promedio)  # Resultado incorrecto: 45\n\nCómo detectarlos:\n  • Pruebas con valores conocidos\n  • print() para depurar\n  • Depurador (debugger) del IDE\n  • Leer el código con atención",
            },
            {
              text:
                "5.7 Depuración básica con print()\n\nLa técnica más sencilla para encontrar errores:\n\n  def calcular_promedio(a, b, c):\n      print(f\"Valores recibidos: {a}, {b}, {c}\")  # Depuración\n      suma = a + b + c\n      print(f\"Suma: {suma}\")  # Depuración\n      return suma / 3\n\n  resultado = calcular_promedio(10, 20, 30)\n  print(f\"Resultado: {resultado}\")\n\nRecuerda eliminar los print de depuración al terminar.\n\nEn el futuro usarás el depurador (debugger) de VS Code.",
            },
            {
              text:
                "5.8 Buenas prácticas desde el primer día\n\n  • Guarda el archivo antes de ejecutar (Ctrl+S)\n  • Usa nombres descriptivos para tus archivos\n  • No uses espacios ni caracteres especiales: mi_primer_programa.py\n  • Ejecuta frecuentemente (no escribas todo sin probar)\n  • Lee los mensajes de error con atención\n  • Copia y pega el error en Google si no lo entiendes\n  • Pregunta: \"¿Qué esperaba que pasara? ¿Qué pasó realmente?\"",
            },
            {
              text:
                "Resumen del capítulo\n\n• print() muestra datos en la consola.\n• Los comentarios (#) explican el código sin afectar la ejecución.\n• SyntaxError: error gramatical; el código no puede ejecutarse.\n• RuntimeError: error durante la ejecución (división por cero, etc.).\n• Error de lógica: el programa funciona pero da resultados incorrectos.\n• La depuración con print() ayuda a encontrar errores.\n• Lee los mensajes de error: contienen información útil.",
            },
            {
              text:
                "Conceptos clave\n\n• print()\n• Comentario\n• SyntaxError\n• NameError\n• ZeroDivisionError\n• ValueError\n• Error de lógica\n• Depuración\n• String (cadena)\n• Argumento\n• Parámetro sep / end",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Escribe un programa que imprima tu nombre y edad.\n2. Usa print() con sep=\"|\" para mostrar \"Python|es|genial\".\n3. Escribe un programa con un error de sintaxis, ejecútalo y lee el mensaje.\n4. Corrige el error y agrega un comentario explicando qué fallaba.\n5. Crea un programa que calcule el área de un rectángulo (con error de lógica), luego corrígelo.\n6. Usa print() para depurar un cálculo de IVA (13% de un precio).",
            },
          ],
        },
        {
          lessonName: "Capítulo 6: Cómo funciona Python internamente",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Diferenciar entre compilador e intérprete.\n• Explicar cómo Python ejecuta el código paso a paso.\n• Comprender qué es CPython.\n• Entender el concepto de bytecode y la máquina virtual.\n• Diferenciar Python de otros lenguajes como C o Java.",
            },
            {
              text:
                "6.1 Compilador vs Intérprete\n\nCompilador (C, C++, Rust, Go):\n  Código fuente → Compilación → Código máquina → Ejecución\n  • Traduce todo el programa antes de ejecutar\n  • Genera un archivo ejecutable independiente\n  • Mayor velocidad de ejecución\n  • Desarrollo más lento (compilar + ejecutar)\n\nIntérprete (Python, JavaScript, Ruby):\n  Código fuente → Interpretación línea por línea → Ejecución\n  • Traduce y ejecuta simultáneamente\n  • No genera ejecutable independiente\n  • Menor velocidad de ejecución\n  • Desarrollo más ágil (escribir y ejecutar)",
            },
            {
              text:
                "6.2 El proceso de ejecución de Python\n\nPython NO es puramente interpretado.\n\nPaso a paso:\n  1. Código fuente (.py)\n     ↓\n  2. Análisis léxico y sintáctico (parser)\n     ↓\n  3. Compilación a bytecode (.pyc)\n     ↓\n  4. Máquina Virtual de Python (PVM)\n     ↓\n  5. Ejecución\n\nPython compila a bytecode (código intermedio) y luego lo interpreta.\nEs un lenguaje \"compilado a bytecode\" ejecutado por una máquina virtual.",
            },
            {
              text:
                "6.3 ¿Qué es CPython?\n\nCPython es la implementación de referencia de Python.\n\n  • Escrito en C\n  • Mantenido por Python Software Foundation\n  • Es lo que descargas desde python.org\n  • Implementa el compilador a bytecode\n  • Implementa la máquina virtual (PVM)\n  • Integra bibliotecas escritas en C para rendimiento\n\nCuando dices \"Python\", casi siempre te refieres a CPython.",
            },
            {
              text:
                "6.4 Bytecode de Python\n\nEl bytecode es código de bajo nivel independiente de la plataforma.\n\nSe almacena en archivos __pycache__/*.pyc\n\nPuedes ver el bytecode de una función:\n  import dis\n\n  def suma(a, b):\n      return a + b\n\n  dis.dis(suma)\n  #   0 LOAD_FAST    0 (a)\n  #   2 LOAD_FAST    1 (b)\n  #   4 BINARY_ADD\n  #   6 RETURN_VALUE\n\nVentaja: los .pyc aceleran ejecuciones subsecuentes.",
            },
            {
              text:
                "6.5 La Máquina Virtual de Python (PVM)\n\nLa PVM es un bucle que:\n  1. Lee una instrucción de bytecode\n  2. Ejecuta la operación correspondiente\n  3. Avanza a la siguiente instrucción\n  4. Repite hasta el final\n\nLa PVM es un programa escrito en C que hace el trabajo pesado.\n\nEs similar a cómo Java funciona con la JVM (Java Virtual Machine).\n\nDiferencia: JVM fue diseñada para multiplataforma; PVM es parte de CPython.",
            },
            {
              text:
                "6.6 Tipado dinámico\n\nEn Python no declaras el tipo de las variables:\n  x = 5        # x es int\n  x = \"hola\"   # x ahora es str\n  x = [1, 2, 3] # x ahora es list\n\nEsto es tipado dinámico: el tipo se determina en ejecución.\n\nEn C (tipado estático):\n  int x = 5;   // x solo puede ser int\n  x = \"hola\";  // Error de compilación\n\nVentaja: más flexible, menos código.\nDesventaja: posibles errores de tipo en ejecución.\n\nPython también es de tipado fuerte: no suma un string con un int implícitamente.",
            },
            {
              text:
                "6.7 Garbage Collection (recolección de basura)\n\nPython gestiona la memoria automáticamente.\n\nNo necesitas:\n  • Reservar memoria (malloc)\n  • Liberar memoria (free)\n\nPython usa:\n  1. Reference counting: cuenta cuántas referencias apuntan a un objeto.\n     Cuando llega a 0, el objeto se elimina.\n  2. Generational GC: detecta y elimina ciclos de referencias.\n\nVentaja: te concentras en la lógica, no en la memoria.\n\nDesventaja: consumes más memoria y CPU que en C/Rust.",
            },
            {
              text:
                "6.8 Python vs otros lenguajes\n\nPython vs C:\n  • Python: más lento, más productivo, gestión automática de memoria\n  • C: más rápido, más control, gestión manual de memoria\n\nPython vs Java:\n  • Python: tipado dinámico, menos verbose, sin compilación explícita\n  • Java: tipado estático, más estructurado, JVM optimizada\n\nPython vs JavaScript:\n  • Python: más legible, mejor para datos, biblioteca estándar robusta\n  • JavaScript: ecosistema web nativo, asincronía por defecto\n\nPython vs Go:\n  • Python: más expresivo, mejor para prototipado\n  • Go: más rápido, concurrencia nativa, binarios estáticos",
            },
            {
              text:
                "Resumen del capítulo\n\n• Python compila a bytecode (.pyc) y luego lo interpreta en la PVM.\n• CPython es la implementación oficial y más usada.\n• El bytecode es código intermedio independiente de la plataforma.\n• Python tiene tipado dinámico (tipos en ejecución) y fuerte.\n• La memoria se gestiona automáticamente con garbage collection.\n• Python prioriza la productividad del desarrollador sobre la velocidad pura.",
            },
            {
              text:
                "Conceptos clave\n\n• CPython\n• Bytecode\n• PVM (Python Virtual Machine)\n• Compilador\n• Intérprete\n• Tipado dinámico\n• Tipado fuerte\n• Garbage Collector\n• Reference counting\n• dis (disassembler)\n• .pyc\n• __pycache__",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Crea una función simple y usa dis.dis() para ver su bytecode.\n2. Explica la diferencia entre compilador e intérprete con tus palabras.\n3. ¿Por qué Python genera archivos .pyc en __pycache__?\n4. Investiga qué ventajas tiene PyPy frente a CPython.\n5. ¿Qué significa que Python tiene \"tipado fuerte\"? Da un ejemplo.\n6. ¿Por qué 10/4 da 2.5 en Python 3 pero 2 en Python 2?",
            },
          ],
        },
        {
          lessonName: "Capítulo 7: Variables",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Declarar y usar variables en Python.\n• Comprender el modelo de variables como etiquetas.\n• Aplicar las reglas de nomenclatura.\n• Usar variables múltiples y asignación simultánea.\n• Elegir nombres descriptivos y seguir convenciones.",
            },
            {
              text:
                "7.1 ¿Qué es una variable?\n\nEn Python, una variable es una etiqueta (nombre) que referencia un objeto en memoria.\n\n  mensaje = \"Hola, Python\"\n  # mensaje → \"Hola, Python\"\n\nNo es como en C (una caja que contiene un valor).\nEs más como una etiqueta que se pega a un objeto.\n\n  x = 10\n  y = x\n  # x e y apuntan al MISMO objeto 10\n\nAl reasignar:\n  x = 20\n  # x ahora apunta a 20, y sigue apuntando a 10",
            },
            {
              text:
                "7.2 Reglas para nombrar variables\n\nREGLAS OBLIGATORIAS:\n  • Deben empezar con letra o guión bajo (_)\n  • No pueden empezar con número\n  • Solo contienen letras, números y guión bajo\n  • Sensibles a mayúsculas (nombre ≠ Nombre ≠ NOMBRE)\n  • No pueden ser palabras reservadas (if, for, while, class, etc.)\n\nVálidos:\n  nombre, edad, _contador, total_ventas, variable1\n\nInválidos:\n  1er_lugar (empieza con número)\n  total-ventas (guión no permitido)\n  class (palabra reservada)\n  mi var (espacio no permitido)",
            },
            {
              text:
                "7.3 Convenciones de estilo (PEP 8)\n\nVariables y funciones: snake_case\n  nombre_usuario, calcular_total, edad\n\nConstantes (por convención): SCREAMING_SNAKE_CASE\n  IVA = 0.13\n  MAX_INTENTOS = 3\n\nNombres descriptivos:\n  Malo: a, x, tmp, datos\n  Bueno: edad_usuario, promedio_notas, lista_productos\n\nNo usar nombres demasiado largos:\n  valor_del_impuesto_al_valor_agregado_del_producto → iva_producto\n\nNo sombrear funciones nativas:\n  Evitar: list, str, int, print, input",
            },
            {
              text:
                "7.4 Asignación y reasignación\n\nAsignación inicial:\n  contador = 0\n\nReasignación:\n  contador = contador + 1\n  # Primero evalúa contador + 1 (0 + 1 = 1)\n  # Luego asigna el resultado a contador\n\nOperador de asignación aumentada:\n  contador += 1    # equivalente a contador = contador + 1\n  total -= 5       # equivalente a total = total - 5\n  precio *= 1.13   # equivalente a precio = precio * 1.13\n\nOperadores disponibles:\n  +=, -=, *=, /=, //=, %=, **=",
            },
            {
              text:
                "7.5 Variables múltiples\n\nAsignación múltiple:\n  x, y, z = 10, 20, 30\n  print(x, y, z)  # 10 20 30\n\nMismo valor a múltiples variables:\n  a = b = c = 0\n  print(a, b, c)  # 0 0 0\n  # Todas apuntan al MISMO objeto 0\n\nIntercambio de valores (swap):\n  a, b = 10, 20\n  a, b = b, a\n  print(a, b)  # 20 10\n\nEn otros lenguajes necesitarías una variable temporal.",
            },
            {
              text:
                "7.6 La función type() e id()\n\ntype() — saber el tipo de una variable:\n  x = 42\n  print(type(x))        # <class 'int'>\n\n  x = 3.14\n  print(type(x))        # <class 'float'>\n\n  x = \"Python\"\n  print(type(x))        # <class 'str'>\n\nid() — saber la dirección de memoria:\n  x = 10\n  y = x\n  print(id(x))          # 140735201237744\n  print(id(y))          # 140735201237744 (misma dirección)\n\n  x = 20\n  print(id(x))          # Otra dirección\n  print(id(y))          # Sigue siendo la original\n\nEsto demuestra que las variables son etiquetas, no cajas.",
            },
            {
              text:
                "7.7 Variables y su alcance (scope)\n\nVariable global: definida fuera de funciones, accesible desde cualquier parte.\n  total = 0\n  def incrementar():\n      global total\n      total += 1\n\nVariable local: definida dentro de una función, solo existe allí.\n  def calcular():\n      subtotal = 100  # local\n      return subtotal * 1.13\n\n  # print(subtotal)  # Error: NameError\n\nBuena práctica: minimizar el uso de globales.\n  Pasar valores como parámetros y retornar resultados.",
            },
            {
              text:
                "7.8 None — la ausencia de valor\n\nNone representa la ausencia de valor.\n\n  resultado = None\n  print(resultado)  # None\n  print(type(resultado))  # <class 'NoneType'>\n\nÚtil como:\n  • Valor inicial de una variable que aún no tiene datos\n  • Indicador de que una operación no produjo resultado\n  • Retorno por defecto de funciones sin return\n\nComparación:\n  if resultado is None:\n      print(\"Aún no hay resultado\")\n\n  if resultado is not None:\n      print(f\"Resultado: {resultado}\")\n\nUsar is/is not en lugar de == para comparar con None.",
            },
            {
              text:
                "Resumen del capítulo\n\n• Las variables son etiquetas que referencian objetos en memoria.\n• Los nombres deben seguir reglas: letras, números, _ y no palabras reservadas.\n• PEP 8 recomienda snake_case para variables y SCREAMING_SNAKE_CASE para constantes.\n• La asignación múltiple y el intercambio simplifican el código.\n• type() revela el tipo; id() revela la identidad del objeto.\n• None representa ausencia de valor. Comparar con is None.",
            },
            {
              text:
                "Conceptos clave\n\n• Variable\n• Etiqueta vs caja\n• Asignación\n• Reasignación\n• Asignación aumentada (+=, -=, etc.)\n• Asignación múltiple\n• snake_case\n• Palabra reservada\n• type()\n• id()\n• None\n• Scope (global, local)\n• Mutabilidad (introducción)",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Crea variables para tu nombre, edad y altura. Múestralas con print().\n2. Intercambia los valores de dos variables sin usar una tercera.\n3. Demuestra con id() que a = b = 0 hace que ambas apunten al mismo objeto.\n4. ¿Qué ocurre si intentas usar una palabra reservada como nombre de variable? Pruébalo.\n5. Crea una constante IVA = 0.13 y calcula el precio con IVA de un producto.\n6. Asigna múltiples valores en una sola línea: nombre, edad, ciudad = ...",
            },
          ],
        },
        {
          lessonName: "Capítulo 8: Tipos de datos",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Identificar los tipos de datos básicos en Python.\n• Operar con números enteros y decimales.\n• Trabajar con cadenas de texto (strings).\n• Utilizar valores booleanos.\n• Comprender el tipo None.\n• Usar type() y isinstance() para verificar tipos.",
            },
            {
              text:
                "8.1 Los tipos básicos en Python\n\n  int     → Enteros: 10, -3, 0, 1000\n  float   → Decimales: 3.14, -0.5, 1.0\n  str     → Cadenas: \"Hola\", 'Python', \"123\"\n  bool    → Booleanos: True, False\n  NoneType → Ninguno: None\n\n  complejo → Números complejos: 3+4j (uso avanzado)\n\nTodo en Python es un objeto, incluidos los tipos básicos.\n  print(type(10))      # <class 'int'>\n  print(type(\"Hola\"))  # <class 'str'>",
            },
            {
              text:
                "8.2 Números enteros (int)\n\nLos enteros en Python no tienen límite de tamaño (precisión arbitraria).\n\n  entero = 42\n  entero_negativo = -10\n  entero_grande = 10**100  # Funciona sin desbordamiento\n\nOperaciones básicas:\n  10 + 3   → 13\n  10 - 3   → 7\n  10 * 3   → 30\n  10 / 3   → 3.333... (división real, devuelve float)\n  10 // 3  → 3 (división entera, piso)\n  10 % 3   → 1 (módulo, residuo)\n  10 ** 3  → 1000 (potencia)\n\nsep = \"_\" en literales grandes (Python 3.6+):\n  poblacion = 8_000_000_000  # igual a 8000000000",
            },
            {
              text:
                "8.3 Números decimales (float)\n\nRepresentan números con parte fraccionaria.\n\n  precio = 19.99\n  pi = 3.14159265358979\n  cientifico = 1.5e10  # 1.5 × 10^10\n  negativo = -0.001\n\nPrecisión limitada (IEEE 754):\n  print(0.1 + 0.2)  # 0.30000000000000004\n  # ¡No es un bug de Python! Ocurre en todos los lenguajes.\n\nPara dinero, usar Decimal (módulo decimal):\n  from decimal import Decimal\n  Decimal(\"0.1\") + Decimal(\"0.2\")  # Decimal('0.3')\n\nOperaciones con float e int:\n  int + float → float\n  int / int → float (en Python 3)",
            },
            {
              text:
                "8.4 Cadenas de texto (str)\n\nSe definen con comillas simples o dobles.\n\n  simple = 'Hola'\n  doble = \"Mundo\"\n  multilinea = \"\"\"Texto\n  de varias\n  líneas\"\"\"\n\nOperaciones:\n  saludo = \"Hola\" + \" \" + \"Mundo\"  # Concatenación: \"Hola Mundo\"\n  eco = \"Ja\" * 3                     # Repetición: \"JaJaJa\"\n  largo = len(\"Python\")              # 6\n  print(saludo[0])                   # Acceso por índice: \"H\"\n  print(saludo[0:4])                 # Slicing: \"Hola\"\n\nStrings son inmutables:\n  texto = \"Hola\"\n  # texto[0] = \"h\"  # Error: TypeError\n  texto = \"hola\"    # Correcto: reasignación",
            },
            {
              text:
                "8.5 Métodos útiles de strings\n\n  texto = \"  Python es Genial  \"\n\n  texto.lower()        # \"  python es genial  \"\n  texto.upper()        # \"  PYTHON ES GENIAL  \"\n  texto.strip()        # \"Python es Genial\"\n  texto.replace(\"Genial\", \"Increíble\")  # \"Python es Increíble\"\n  texto.split()        # [\"Python\", \"es\", \"Genial\"]\n  \"-\".join([\"a\", \"b\", \"c\"])  # \"a-b-c\"\n  \"Python\".startswith(\"Py\")  # True\n  \"Python\".endswith(\"on\")    # True\n  \"123\".isdigit()      # True\n  \"abc\".isalpha()      # True\n\nLos strings tienen muchos métodos integrados. ¡Explóralos!",
            },
            {
              text:
                "8.6 F-strings (formato de cadenas)\n\nDesde Python 3.6, la forma más moderna y legible de formatear.\n\n  nombre = \"Ana\"\n  edad = 25\n  print(f\"Me llamo {nombre} y tengo {edad} años\")\n  # Me llamo Ana y tengo 25 años\n\nExpresiones dentro de las llaves:\n  print(f\"{nombre} tiene {edad * 2} años duplicados\")\n  # Ana tiene 50 años duplicados\n\nFormateo numérico:\n  precio = 19.995\n  print(f\"Precio: ${precio:.2f}\")  # Precio: $20.00\n\n  porcentaje = 0.2567\n  print(f\"Progreso: {porcentaje:.1%}\")  # Progreso: 25.7%\n\nAlinear:\n  print(f\"|{\"izquierda\":<10}|{\"derecha\":>10}|\")\n  # |izquierda |  derecha|",
            },
            {
              text:
                "8.7 Booleanos (bool)\n\nSolo dos valores: True y False (con mayúscula inicial).\n\n  es_mayor = True\n  tiene_permiso = False\n\nProvienen de operaciones de comparación:\n  10 > 5   → True\n  10 == 5  → False\n  10 != 5  → True\n\nOperaciones lógicas:\n  True and True   → True\n  True and False  → False\n  False or True   → True\n  not True        → False\n\nValores \"truthy\" y \"falsy\":\n  Falsy: 0, 0.0, \"\", [], None, False\n  Truthy: cualquier otro valor\n\n  if \"\":         # False, no ejecuta\n  if \"Hola\":     # True, ejecuta",
            },
            {
              text:
                "8.8 Verificar tipos con type() e isinstance()\n\ntype():\n  print(type(10))         # <class 'int'>\n  print(type(3.14))       # <class 'float'>\n  print(type(\"Python\"))   # <class 'str'>\n  print(type(True))       # <class 'bool'>\n  print(type(None))       # <class 'NoneType'>\n\nisinstance() — recomendado para verificar tipos:\n  print(isinstance(10, int))         # True\n  print(isinstance(\"Hola\", str))     # True\n  print(isinstance(10, (int, float))) # True (múltiples tipos)\n\nDiferencia:\n  type() compara el tipo exacto\n  isinstance() considera herencia (útil con POO)\n\nEn general, prefiere isinstance() sobre type().",
            },
            {
              text:
                "Resumen del capítulo\n\n• Los tipos básicos son int, float, str, bool y NoneType.\n• int tiene precisión arbitraria; float sigue IEEE 754.\n• str soporta concatenación (+), repetición (*), indexación y slicing.\n• Las f-strings son la forma moderna de formatear texto.\n• bool: True/False. Valores falsy: 0, \"\", [], None.\n• Prefiere isinstance() sobre type() para verificar tipos.\n• Los strings son inmutables.",
            },
            {
              text:
                "Conceptos clave\n\n• int\n• float\n• str\n• bool\n• NoneType\n• type()\n• isinstance()\n• f-string\n• Inmutabilidad (str)\n• Truthy / Falsy\n• IEEE 754\n• Precisión arbitraria\n• Slicing\n• Concatenación",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Crea variables de cada tipo básico y muestra su tipo con type().\n2. Usa f-strings para mostrar: \"Me llamo X, tengo Y años y mido Z metros\".\n3. Concatena 3 strings de diferentes formas: +, f-string, join().\n4. Demuestra por qué 0.1 + 0.2 != 0.3.\n5. Usa isinstance() para verificar si un valor es numérico (int o float).\n6. Crea un string multilínea con \"\"\" y cuente sus líneas con len() y splitlines().\n7. Convierte \"python es genial\" a título (primera letra mayúscula de cada palabra).",
            },
          ],
        },
        {
          lessonName: "Capítulo 9: Entrada y salida",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Recibir datos del usuario con input().\n• Mostrar datos formateados con print().\n• Diferenciar entre input() en Python 3 y raw_input() en Python 2.\n• Usar f-strings, .format() y % para formato.\n• Manejar la entrada de números correctamente.\n• Controlar el flujo de salida con sep, end y flush.",
            },
            {
              text:
                "9.1 La función input()\n\ninput() muestra un mensaje opcional y espera que el usuario escriba.\nSiempre devuelve un string.\n\n  nombre = input(\"¿Cómo te llamas? \")\n  print(f\"Hola, {nombre}!\")\n\nUso básico:\n  edad = input(\"¿Cuántos años tienes? \")\n  print(type(edad))  # <class 'str'> ¡Siempre string!\n\nSi necesitas un número, debes convertir:\n  edad = int(input(\"¿Cuántos años tienes? \"))\n  print(f\"El año que viene tendrás {edad + 1}\")\n\n¡Cuidado! Si el usuario escribe algo que no es número, obtendrás un ValueError.",
            },
            {
              text:
                "9.2 Convertir la entrada a números\n\nForma segura (con manejo de errores):\n  try:\n      edad = int(input(\"Edad: \"))\n      print(f\"Edad ingresada: {edad}\")\n  except ValueError:\n      print(\"Error: debes ingresar un número entero\")\n\nForma directa (peligrosa si el usuario se equivoca):\n  edad = int(input(\"Edad: \"))  # ValueError si no es entero\n\nConversiones comunes:\n  int(input(...))    → entero\n  float(input(...))  → decimal\n  bool(input(...))   → True si el string no está vacío\n\nRecuerda: siempre validar la entrada del usuario.",
            },
            {
              text:
                "9.3 print() a detalle\n\nFirma de print():\n  print(*objetos, sep=\" \", end=\"\\n\", file=sys.stdout, flush=False)\n\nsep: separador entre objetos\n  print(1, 2, 3, sep=\", \")  # 1, 2, 3\n\nend: caracter al final\n  print(\"Cargando\", end=\"...\")\n  print(\"listo\")              # Cargando...listo\n\nfile: dónde escribir (por defecto consola)\n  import sys\n  print(\"Error crítico\", file=sys.stderr)\n\nflush: forzar escritura inmediata\n  print(\"Procesando...\", flush=True)",
            },
            {
              text:
                "9.4 Formateo con f-strings (avanzado)\n\nAlineación:\n  print(f\"|{\"Hola\":<10}|\")   # |Hola      |  (izquierda)\n  print(f\"|{\"Hola\":>10}|\")   # |      Hola|  (derecha)\n  print(f\"|{\"Hola\":^10}|\")   # |   Hola   |  (centrado)\n\nNúmeros:\n  pi = 3.14159265\n  print(f\"{pi:.2f}\")    # 3.14\n  print(f\"{pi:.4f}\")    # 3.1416\n  print(f\"{pi:10.2f}\")  # \"      3.14\" (ancho total 10)\n\nNúmeros grandes:\n  print(f\"{1000000:,}\")   # 1,000,000\n\nPorcentajes:\n  print(f\"{0.256:.1%}\")  # 25.6%\n\nBinario, hex, octal:\n  print(f\"{255:b}\")  # 11111111\n  print(f\"{255:x}\")  # ff\n  print(f\"{255:o}\")  # 377",
            },
            {
              text:
                "9.5 Formateo con .format()\n\nAlternativa anterior a f-strings (aún usado en código legacy).\n\n  nombre = \"Ana\"\n  edad = 25\n  print(\"Me llamo {} y tengo {} años\".format(nombre, edad))\n\nPosicional:\n  print(\"{0} {1} {0}\".format(\"A\", \"B\"))  # A B A\n\nNombrado:\n  print(\"{nombre} tiene {edad} años\".format(nombre=\"Ana\", edad=25))\n\nFormateo:\n  print(\"{:.2f}\".format(3.14159))  # 3.14\n\nVentaja sobre f-strings: útil cuando el formato está en una variable.\n  formato = \"{:.2f}\"\n  print(formato.format(3.14159))",
            },
            {
              text:
                "9.6 Múltiples entradas en una línea\n\nEl usuario puede escribir varios valores separados por espacios.\n\n  datos = input(\"Ingresa nombre, edad y ciudad: \").split()\n  nombre = datos[0]\n  edad = int(datos[1])\n  ciudad = datos[2]\n\nMás elegante con desempaquetado:\n  nombre, edad_str, ciudad = input(\"Ingresa nombre, edad, ciudad: \").split()\n  edad = int(edad_str)\n\nCon coma como separador:\n  nombre, edad = input(\"Nombre,Edad: \").split(\",\")\n  edad = int(edad)\n\nÚtil para programas simples y ejercicios.",
            },
            {
              text:
                "9.7 Entrada con validación (patrón robusto)\n\nBucle hasta obtener entrada válida:\n  while True:\n      try:\n          edad = int(input(\"Ingresa tu edad (0-120): \"))\n          if 0 <= edad <= 120:\n              break\n          else:\n              print(\"La edad debe estar entre 0 y 120\")\n      except ValueError:\n          print(\"Error: debes ingresar un número\")\n\n  print(f\"Edad válida: {edad}\")\n\nEste patrón es esencial para programas interactivos robustos.\nLo usarás en todos los proyectos que reciban entrada del usuario.",
            },
            {
              text:
                "Resumen del capítulo\n\n• input() siempre devuelve un string; convierte con int()/float() si necesitas números.\n• print() acepta múltiples argumentos, sep y end.\n• f-strings ofrecen el formateo más legible y moderno.\n• .format() es una alternativa aún vigente.\n• Siembre valida la entrada del usuario para evitar crashes.\n• El patrón while + try/except es la forma robusta de validar entrada.",
            },
            {
              text:
                "Conceptos clave\n\n• input()\n• print()\n• f-string\n• .format()\n• sep\n• end\n• flush\n• Conversión de tipos\n• Validación de entrada\n• Desempaquetado\n• sys.stdout / sys.stderr",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Pide al usuario su nombre y muestra un saludo personalizado.\n2. Pide dos números y muestra su suma, resta, multiplicación y división.\n3. Pide edad y muestra \"Eres mayor de edad\" si es ≥ 18, \"Eres menor\" si no.\n4. Valida que el usuario ingrese un número entre 1 y 10, repitiendo hasta que lo haga.\n5. Pide tres notas, calcula el promedio y muestra con 2 decimales.\n6. Usa f-strings para mostrar una tabla con 3 productos, precios y total.",
            },
          ],
        },
        {
          lessonName: "Capítulo 10: Operadores",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Usar operadores aritméticos, de comparación, lógicos y de asignación.\n• Comprender la precedencia de operadores.\n• Aplicar operadores de identidad (is) y pertenencia (in).\n• Combinar operadores en expresiones complejas.\n• Escribir condiciones claras y legibles.",
            },
            {
              text:
                "10.1 Operadores aritméticos\n\n  +   → Suma: 10 + 3 = 13\n  -   → Resta: 10 - 3 = 7\n  *   → Multiplicación: 10 * 3 = 30\n  /   → División real: 10 / 3 = 3.333...\n  //  → División entera: 10 // 3 = 3\n  %   → Módulo (residuo): 10 % 3 = 1\n  **  → Potencia: 10 ** 3 = 1000\n\nUsos del módulo (%):\n  • Par o impar: numero % 2 == 0 → par\n  • Cada N elementos: contador % N == 0\n  • Ciclos: aguja % 12 para reloj\n  • Rangos: numero % 100 (últimos dos dígitos)\n\nUsos de la potencia (**):\n  • Áreas: pi * radio ** 2\n  • Interés compuesto\n  • Crecimiento exponencial",
            },
            {
              text:
                "10.2 División entera y módulo a fondo\n\nDivisión entera (//): redondea hacia abajo (piso).\n\n  10 // 3 = 3    (3 * 3 = 9)\n  -10 // 3 = -4  (-4 * 3 = -12, redondea hacia abajo)\n  10 // -3 = -4\n\nMódulo (%) con números negativos:\n  El resultado tiene el signo del divisor.\n\n  10 % 3 = 1      (10 = 3*3 + 1)\n  -10 % 3 = 2     (-10 = 3*(-4) + 2)\n  10 % -3 = -2    (10 = -3*(-4) + (-2))\n\nRelación:\n  a = (a // b) * b + (a % b)\n\nÚtil para determinar si un número es divisible:\n  if numero % divisor == 0:\n      print(f\"{numero} es divisible por {divisor}\")",
            },
            {
              text:
                "10.3 Operadores de comparación\n\nComparan dos valores y devuelven bool (True/False).\n\n  ==  → Igual que: 10 == 10 → True\n  !=  → Distinto de: 10 != 5 → True\n  >   → Mayor que: 10 > 5 → True\n  <   → Menor que: 10 < 5 → False\n  >=  → Mayor o igual que: 10 >= 10 → True\n  <=  → Menor o igual que: 10 <= 5 → False\n\nComparación encadenada (Python permite esto):\n  10 < 20 < 30  → True (equivalente a 10 < 20 and 20 < 30)\n\nComparación de strings (lexicográfica):\n  \"Ana\" < \"Bob\"    → True (A < B)\n  \"Python\" > \"Java\" → True (P > J)\n\n¡Ojo! == compara valor; is compara identidad (memoria).",
            },
            {
              text:
                "10.4 Operadores lógicos\n\n  and → Ambas condiciones deben ser True\n  or  → Al menos una condición debe ser True\n  not → Invierte el valor booleano\n\nTabla de verdad de and:\n  True and True → True\n  True and False → False\n  False and True → False\n  False and False → False\n\nTabla de verdad de or:\n  True or True → True\n  True or False → True\n  False or True → True\n  False or False → False\n\nnot:\n  not True → False\n  not False → True\n  not (10 > 5) → False\n\nShort-circuit:\n  Python evalúa solo lo necesario. En False and X, no evalúa X.",
            },
            {
              text:
                "10.5 Operadores de asignación\n\n  =   → Asignación simple: x = 10\n  +=  → x += 3  (x = x + 3)\n  -=  → x -= 3  (x = x - 3)\n  *=  → x *= 3  (x = x * 3)\n  /=  → x /= 3  (x = x / 3)\n  //= → x //= 3 (x = x // 3)\n  %=  → x %= 3  (x = x % 3)\n  **= → x **= 3 (x = x ** 3)\n\nEjemplo:\n  total = 100\n  total += 50   # total = 150\n  total *= 2    # total = 300\n  total -= 30   # total = 270\n  total /= 3    # total = 90.0\n\nTodos los operadores aritméticos tienen su versión de asignación.",
            },
            {
              text:
                "10.6 Operadores de identidad (is, is not)\n\nis compara si dos variables apuntan al MISMO objeto en memoria.\n== compara si dos objetos tienen el MISMO VALOR.\n\n  a = [1, 2, 3]\n  b = [1, 2, 3]\n  c = a\n\n  a == b  → True (mismo valor)\n  a is b  → False (objetos diferentes)\n  a is c  → True (misma referencia)\n\nUsos correctos de is:\n  if valor is None:      # Recomendado\n  if valor is True:      # Válido\n\nNo uses is para comparaciones numéricas o de strings:\n  a = 1000\n  b = 1000\n  a is b  → False (objetos distintos)\n  a == b  → True (valor correcto)\n\n(Nota: Python reúsa objetos pequeños -5 a 256 por optimización)",
            },
            {
              text:
                "10.7 Operadores de pertenencia (in, not in)\n\nVerifican si un elemento existe dentro de una secuencia.\n\n  lista = [10, 20, 30, 40, 50]\n  10 in lista      → True\n  60 in lista      → False\n  60 not in lista  → True\n\nCon strings:\n  \"Py\" in \"Python\"  → True\n  \"xyz\" in \"Python\" → False\n\nCon otros iterables:\n  3 in range(10)    → True\n  \"a\" in {\"a\": 1}  → True (en diccionarios busca keys)\n\nMuy útil en condiciones:\n  if opcion in [\"a\", \"b\", \"c\"]:\n      print(\"Opción válida\")\n\n  if nombre not in usuarios:\n      print(\"Usuario no registrado\")",
            },
            {
              text:
                "10.8 Precedencia de operadores\n\nOrden de evaluación (de mayor a menor prioridad):\n\n  1. ** (potencia)\n  2. +, - (unarios: -x, +x)\n  3. *, /, //, %\n  4. +, - (binarios: suma, resta)\n  5. <, <=, >, >=, ==, !=\n  6. not\n  7. and\n  8. or\n  9. =, +=, -=, etc. (asignación)\n\nEjemplo:\n  2 + 3 * 4 ** 2\n  = 2 + 3 * 16\n  = 2 + 48\n  = 50\n\nUsa paréntesis para hacer explícita la precedencia:\n  salario_base + (horas_extra * tarifa_hora)\n\n\"Paréntesis explícito es mejor que precedencia implícita\" — adaptación del Zen.",
            },
            {
              text:
                "Resumen del capítulo\n\n• Operadores aritméticos: +, -, *, /, //, %, **\n• Operadores de comparación: ==, !=, <, >, <=, >=\n• Operadores lógicos: and, or, not (con short-circuit)\n• Operadores de asignación: =, +=, -=, *=, etc.\n• is compara identidad; == compara valor.\n• in verifica pertenencia a una secuencia.\n• Usa paréntesis para aclarar precedencia.",
            },
            {
              text:
                "Conceptos clave\n\n• Operadores aritméticos\n• División entera (//)\n• Módulo (%)\n• Comparación encadenada\n• Short-circuit evaluation\n• is vs ==\n• in / not in\n• Precedencia\n• Operador unario vs binario\n• Asignación aumentada\n• Expresión condicional",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Determina si un número ingresado es par o impar usando %.\n2. Verifica si un año es bisiesto (divisible por 4, pero no por 100, a menos que sea por 400).\n3. Pide tres números y determina cuál es el mayor usando operadores lógicos.\n4. Demuestra la diferencia entre is y == con listas.\n5. Usa in para verificar si una letra está en una palabra.\n6. Calcula el IMC (peso / altura**2) y clasifícalo según rangos.\n7. Sin paréntesis: 2 * 3 + 4 ** 2 / 2. Calcula mentalmente, luego verifica con Python.",
            },
          ],
        },
        {
          lessonName: "Capítulo 11: Conversión de tipos",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Convertir entre tipos de datos en Python.\n• Diferenciar entre conversión implícita y explícita.\n• Usar int(), float(), str() y bool() correctamente.\n• Manejar errores de conversión.\n• Aplicar conversión segura con validación.",
            },
            {
              text:
                "11.1 Conversión implícita (coerción automática)\n\nPython convierte automáticamente cuando la operación es segura.\n\n  resultado = 10 + 3.14\n  print(resultado)     # 13.14\n  print(type(resultado))  # <class 'float'>\n\n  # int → float: seguro, no hay pérdida\n\n  resultado = True + 5\n  print(resultado)     # 6 (True = 1)\n\n  resultado = False + 5\n  print(resultado)     # 5 (False = 0)\n\nPero:\n  print(\"10\" + 5)  # TypeError: can only concatenate str (not \"int\") to str\n  # Python NO convierte implícitamente string a int\n\nRegla general: Python convierte hacia el tipo que pueda representar más información.",
            },
            {
              text:
                "11.2 Conversión explícita (casting)\n\nFunciones de conversión:\n\n  int( valor )    → Convierte a entero\n  float( valor )  → Convierte a decimal\n  str( valor )    → Convierte a string\n  bool( valor )   → Convierte a booleano\n\nEjemplos con int():\n  int(3.14)      → 3 (trunca, no redondea)\n  int(\"42\")     → 42\n  int(True)      → 1\n  # int(\"3.14\")  → ValueError (no puede convertir string con punto)\n  # int(\"hola\")  → ValueError\n\nEjemplos con float():\n  float(3)       → 3.0\n  float(\"3.14\") → 3.14\n  float(\"3\")    → 3.0\n  float(True)    → 1.0",
            },
            {
              text:
                "11.3 Conversión a string y booleano\n\nstr():\n  str(42)          → \"42\"\n  str(3.14)        → \"3.14\"\n  str(True)        → \"True\"\n  str([1, 2, 3])   → \"[1, 2, 3]\"\n  str(None)        → \"None\"\n\n  # Útil para concatenar con otros strings\n  edad = 25\n  print(\"Tengo \" + str(edad) + \" años\")  # Mejor usar f-strings\n\nbool():\n  bool(0)          → False\n  bool(1)          → True\n  bool(\"\")         → False\n  bool(\"False\")    → True (¡string no vacío!)\n  bool([])         → False\n  bool([1, 2])     → True\n  bool(None)       → False\n\n  # Valores falsy: 0, 0.0, \"\", [], {}, (), None, False\n  # Todo lo demás es truthy",
            },
            {
              text:
                "11.4 Errores comunes de conversión\n\n  # Error 1: string con decimal a int\n  int(\"3.14\")  # ValueError: invalid literal for int() with base 10: '3.14'\n\n  # Error 2: string no numérico\n  int(\"hola\")  # ValueError\n\n  # Error 3: None a número\n  int(None)     # TypeError: int() argument must be a string...\n\n  # Error 4: bool a número (no es error pero requiere atención)\n  int(\"True\")  # ValueError (\"True\" string no se convierte directamente)\n\nPara evitar errores:\n  1. Validar antes de convertir\n  2. Usar try/except\n  3. Usar métodos como str.isdigit() para verificar\n  if entrada.isdigit():\n      numero = int(entrada)",
            },
            {
              text:
                "11.5 Conversión segura con patrones\n\nPatrón 1 — Validar con isdigit() (solo enteros positivos):\n  entrada = input(\"Número: \")\n  if entrada.isdigit():\n      numero = int(entrada)\n      print(f\"Correcto: {numero}\")\n  else:\n      print(\"No es un número válido\")\n\nPatrón 2 — Try/except (cubre todos los casos):\n  try:\n      numero = int(input(\"Número: \"))\n      print(f\"Correcto: {numero}\")\n  except ValueError:\n      print(\"No es un número entero válido\")\n\nPatrón 3 — Función reutilizable:\n  def leer_entero(mensaje):\n      while True:\n          try:\n              return int(input(mensaje))\n          except ValueError:\n              print(\"Error: ingresa un número entero válido\")\n\n  edad = leer_entero(\"Edad: \")",
            },
            {
              text:
                "11.6 Conversión entre colecciones (avance)\n\n  list(\"Python\")      → [\"P\", \"y\", \"t\", \"h\", \"o\", \"n\"]\n  tuple([1, 2, 3])   → (1, 2, 3)\n  set([1, 2, 2, 3])  → {1, 2, 3} (elimina duplicados)\n  list(range(5))      → [0, 1, 2, 3, 4]\n\n  # Strings a lista de palabras:\n  \"Hola mundo Python\".split()  → [\"Hola\", \"mundo\", \"Python\"]\n\n  # Lista a string:\n  \" \".join([\"Hola\", \"mundo\"])  → \"Hola mundo\"\n\nÚtil para transformar datos entre formatos.\n\nNota: las colecciones se ven a fondo en módulos posteriores.",
            },
            {
              text:
                "Resumen del capítulo\n\n• Conversión implícita: Python convierte automáticamente int → float, bool → int.\n• Conversión explícita (casting): int(), float(), str(), bool().\n• int(\"3.14\") falla; primero convertir a float, luego a int.\n• bool(\"False\") es True porque el string no está vacío.\n• str.isdigit() verifica si un string contiene solo dígitos.\n• try/except es el patrón robusto para conversión segura.\n• str() convierte cualquier valor a string para su representación textual.",
            },
            {
              text:
                "Conceptos clave\n\n• Conversión implícita (coerción)\n• Conversión explícita (casting)\n• int()\n• float()\n• str()\n• bool()\n• ValueError\n• TypeError\n• str.isdigit()\n• Truthy / Falsy\n• Truncado vs redondeo",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Convierte \"123\" a entero, suma 10 y muestra el resultado.\n2. ¿Qué ocurre con int(\" 123 \")? Pruébalo.\n3. Convierte 3.99 a int ¿qué valor obtienes? ¿por qué?\n4. Crea una función leer_decimal que valide y retorne un float.\n5. ¿Cuál es el resultado de bool(\"False\")? Explica por qué.\n6. Convierte una lista de números a strings y únelos con \", \".\n7. Verifica si una entrada de usuario es numérica antes de procesarla.",
            },
          ],
        },
        {
          lessonName: "Capítulo 12: Buenas prácticas",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos de aprendizaje\n\nAl finalizar este capítulo serás capaz de:\n\n• Aplicar las convenciones de estilo PEP 8.\n• Escribir nombres descriptivos y consistentes.\n• Organizar el código de forma legible.\n• Usar comentarios de forma efectiva.\n• Evitar antipatrones comunes en Python.\n• Adoptar una mentalidad de código limpio desde el inicio.",
            },
            {
              text:
                "12.1 PEP 8 — Reglas esenciales\n\nSangría:\n  • 4 espacios por nivel (no tabs)\n  • Consistencia en todo el archivo\n\nLíneas:\n  • Máximo 79 caracteres (72 para docstrings/comentarios)\n  • Líneas en blanco entre funciones y clases\n  • Dos líneas en blanco entre funciones de nivel superior\n\nEspacios:\n  • Un espacio antes y después de operadores binarios\n    x = 10 + 5  (correcto)\n    x=10+5      (incorrecto)\n  • Sin espacio después de ( o antes de )\n    print(\"Hola\")  (correcto)\n    print( \"Hola\" ) (incorrecto)\n\nImportaciones:\n  • Una importación por línea\n  • Orden: estándar, terceros, locales\n  • Evitar import *",
            },
            {
              text:
                "12.2 Nombres descriptivos\n\nBuenos nombres explican el propósito sin necesidad de comentarios.\n\n  # Mal\n  n = \"Ana\"\n  e = 25\n  d = \"San José\"\n\n  # Bien\n  nombre = \"Ana\"\n  edad = 25\n  ciudad = \"San José\"\n\n  # Mal\n  def calc(a, b):\n      return a * b / 100\n\n  # Bien\n  def calcular_porcentaje(valor, porcentaje):\n      return valor * porcentaje / 100\n\nRegla: si necesitas un comentario para explicar qué hace una variable, el nombre es malo.",
            },
            {
              text:
                "12.3 Convenciones de nombres\n\nVariables y funciones: snake_case\n  nombre_usuario, calcular_total, obtener_datos\n\nClases: CamelCase\n  Usuario, Producto, CuentaBancaria\n\nConstantes: SCREAMING_SNAKE_CASE\n  IVA = 0.13\n  MAX_INTENTOS = 3\n  COLOR_ROJO = \"#FF0000\"\n\nMétodos y atributos privados: prefijo _\n  def _metodo_interno(self):\n      pass\n\nMétodos mágicos: doble underscore __\n  __init__, __str__, __repr__\n\nNo usar caracteres especiales ni acentos (por compatibilidad).",
            },
            {
              text:
                "12.4 Comentarios efectivos\n\nComentar el POR QUÉ, no el QUÉ:\n  # Mal: esto suma IVA\n  total = subtotal * 1.13\n\n  # Bien: Costa Rica, IVA 13% según ley 9635\n  total = subtotal * 1.13\n\nComentarios para código complejo:\n  # Ordena por fecha descendente, luego por nombre ascendente\n  usuarios.sort(key=lambda u: (-u.fecha_registro, u.nombre))\n\nTODO comments:\n  # TODO: implementar validación de formato de email\n  # FIXME: esta función falla con valores negativos\n\nDocstrings (documentación de funciones):\n  def sumar(a, b):\n      \"\"\"Retorna la suma de a y b.\"\"\"\n      return a + b\n\nNo comentes código obvio ni dejes código comentado (usa control de versiones).",
            },
            {
              text:
                "12.5 Estructura de archivos\n\nOrden recomendado dentro de un archivo .py:\n\n  1. Shebang (opcional): #!/usr/bin/env python3\n  2. Docstring del módulo\n  3. Importaciones (estándar, terceros, locales)\n  4. Constantes globales\n  5. Funciones\n  6. Clases\n  7. Bloque if __name__ == \"__main__\":\n\nEjemplo:\n  \"\"\"Módulo para operaciones matemáticas básicas.\"\"\"\n\n  import math\n  from decimal import Decimal\n\n  IVA = 0.13\n  MAX_DESCUENTO = 0.5\n\n  def calcular_total(precio, cantidad):\n      return precio * cantidad * (1 + IVA)\n\n  if __name__ == \"__main__\":\n      print(calcular_total(100, 2))",
            },
            {
              text:
                "12.6 Antipatrones a evitar\n\n  # 1. Importaciones salvajes\n  from modulo import *  # No sabes qué nombres importas\n\n  # 2. Números mágicos\n  total = subtotal * 1.13  # ¿Qué es 1.13? Usa constante IVA\n\n  # 3. Código muerto (comentado)\n  # if old_method(): ...  # Bórralo, git lo recuerda\n\n  # 4. Función demasiado larga (> 20-30 líneas)\n  # Divide en funciones más pequeñas\n\n  # 5. Demasiados niveles de anidación\n  if a:\n      if b:\n          if c:\n              ...  # Refactoriza: return temprano o funciones auxiliares\n\n  # 6. Reasignar parámetros\n  def procesar(lista):\n      lista = []  # Nunca reasignes los parámetros\n\n  # 7. Usar l para variable (confunde con 1)\n  l = [1, 2, 3]  # Evitar",
            },
            {
              text:
                "12.7 Código limpio en la práctica\n\nPrincipios generales:\n\n  • Una función debe hacer UNA cosa y hacerla bien.\n  • Nombra las funciones como acciones: obtener_usuario(), no usuario().\n  • Mantén las funciones pequeñas (menos de 20 líneas).\n  • Usa valores de retorno en lugar de variables globales.\n  • No repitas código (DRY: Don't Repeat Yourself).\n  • Escribe pruebas para tu código.\n  • El código se lee más veces de las que se escribe: optimiza para lectura.\n\n\"Siempre codifica como si la persona que mantendrá tu código sea un violento psicópata que sabe dónde vives.\" — John Woods",
            },
            {
              text:
                "Resumen del capítulo\n\n• PEP 8 define el estándar de estilo: 4 espacios, 79 caracteres, snake_case.\n• Los nombres descriptivos eliminan la necesidad de comentarios.\n• Comentarios: explica el por qué, no el qué.\n• Organiza los archivos con estructura consistente.\n• Evita antipatrones: números mágicos, funciones largas, anidación excesiva.\n• Código limpio se lee como buena prosa: claro, simple y directo.\n• DRY: No te repitas.",
            },
            {
              text:
                "Conceptos clave\n\n• PEP 8\n• snake_case\n• CamelCase\n• SCREAMING_SNAKE_CASE\n• Código limpio\n• DRY (Don't Repeat Yourself)\n• Números mágicos\n• Antipatrón\n• Docstring\n• if __name__ == \"__main__\"\n• Refactorización\n• Deuda técnica",
            },
            {
              text:
                "Ejercicios propuestos\n\n1. Toma un código que hayas escrito y aplícale PEP 8 (sangría, espacios, nombres).\n2. Identifica 3 números mágicos en un programa y conviértelos en constantes.\n3. Refactoriza una función de más de 20 líneas en funciones más pequeñas.\n4. Escribe el docstring de una función y prueba que funcione con help().\n5. Revisa si usas nombres descriptivos; cambia los que no lo sean.\n6. Agrega el bloque if __name__ == \"__main__\": a un archivo.",
            },
          ],
        },
        {
          lessonName: "Capítulo 13: Resumen del Módulo 1",
          lessonType: "theory",
          slides: [
            {
              text:
                "Objetivos del resumen\n\nEste capítulo consolida todos los conceptos del Módulo 1.\n\nAl finalizar serás capaz de:\n\n• Explicar los fundamentos de programación y Python.\n• Recordar la historia y filosofía que guían el lenguaje.\n• Configurar tu entorno de desarrollo.\n• Escribir programas básicos con variables, tipos y operadores.\n• Aplicar buenas prácticas desde el inicio.\n• Identificar áreas para profundizar.",
            },
            {
              text:
                "Resumen de capítulos 1-6\n\nCapítulo 1 — ¿Qué es programar?\n  • Algoritmos: secuencia ordenada de pasos.\n  • Programa: algoritmo implementado en un lenguaje.\n  • Etapas: problema → análisis → diseño → código → pruebas.\n\nCapítulo 2 — Historia de Python\n  • Creado por Guido van Rossum en 1989.\n  • Nombre inspirado en Monty Python.\n  • Python 3 es el presente; Python 2 es historia.\n\nCapítulo 3 — Filosofía de Python\n  • Zen de Python: legibilidad, simplicidad, claridad.\n  • PEP 8: guía de estilo.\n  • Baterías incluidas: biblioteca estándar muy completa.\n\nCapítulo 4 — Instalación y entorno\n  • python.org, VS Code, pip, entornos virtuales.\n\nCapítulo 5 — Primer programa\n  • print(), comentarios, errores: SyntaxError, NameError, lógica.\n\nCapítulo 6 — Cómo funciona Python\n  • Código fuente → bytecode → PVM.\n  • Tipado dinámico y fuerte.",
            },
            {
              text:
                "Resumen de capítulos 7-12\n\nCapítulo 7 — Variables\n  • Variables como etiquetas (no cajas).\n  • snake_case, palabras reservadas, None.\n  • Asignación múltiple, intercambio (swap).\n\nCapítulo 8 — Tipos de datos\n  • int, float, str, bool, NoneType.\n  • f-strings para formateo moderno.\n  • Inmutabilidad de strings.\n\nCapítulo 9 — Entrada y salida\n  • input() siempre retorna string.\n  • Validación con try/except.\n  • print() con sep, end, f-strings.\n\nCapítulo 10 — Operadores\n  • Aritméticos, comparación, lógicos, asignación.\n  • is vs ==, in, precedencia.\n\nCapítulo 11 — Conversión de tipos\n  • int(), float(), str(), bool().\n  • Conversión implícita vs explícita.\n  • Validación con isdigit() y try/except.\n\nCapítulo 12 — Buenas prácticas\n  • PEP 8, nombres descriptivos.\n  • Antipatrones: números mágicos, funciones largas.",
            },
            {
              text:
                "Mapa conceptual del Módulo 1\n\n  ┌─────────────────────────────────────────────┐\n  │       FUNDAMENTOS DE PROGRAMACIÓN           │\n  │  Computadora → Algoritmo → Programa         │\n  ├─────────────────────────────────────────────┤\n  │       PYTHON                                │\n  │  Historia, Filosofía, Instalación           │\n  ├─────────────────────────────────────────────┤\n  │       ELEMENTOS BÁSICOS                     │\n  │  Variables │ Tipos │ Operadores │ E/S       │\n  ├─────────────────────────────────────────────┤\n  │       HERRAMIENTAS MENTALES                 │\n  │  Conversión de tipos │ Depuración           │\n  ├─────────────────────────────────────────────┤\n  │       BUENAS PRÁCTICAS                      │\n  │  PEP 8 │ Legibilidad │ Código limpio        │\n  └─────────────────────────────────────────────┘\n\nEste mapa conecta todos los temas. Cada módulo futuro añadirá nuevas capas.",
            },
            {
              text:
                "Preparación para el Módulo 2\n\nEn el Módulo 2 abordaremos:\n\n  • Estructuras de control: if, elif, else\n  • Bucles: for, while\n  • Listas, tuplas, diccionarios, conjuntos\n  • Comprensión de listas\n  • range(), enumerate(), zip()\n  • Control de flujo avanzado\n\nRequisitos:\n  • Tener Python instalado y funcionando\n  • Haber escrito al menos 10 programas pequeños\n  • Dominar variables, tipos y operadores\n  • Estar cómodo con input() y print()\n\n¡El módulo 1 es la base de todo lo que viene!",
            },
          ],
        },
        {
          lessonName: "Capítulo 14: Laboratorio — Calculadora de gastos",
          lessonType: "practice",
          slides: [
            {
              text:
                "Laboratorio: Calculadora de gastos personales\n\nObjetivo:\nConstruir un programa interactivo que permita al usuario registrar gastos, calcular totales y mostrar un resumen.\n\nConceptos aplicados:\n  • Variables y tipos de datos\n  • input() y conversión de tipos\n  • Operadores aritméticos\n  • F-strings\n  • Validación de entrada\n  • Buenas prácticas (nombres descriptivos, constantes)\n\nDuración estimada: 45-60 minutos",
            },
            {
              text:
                "Paso 1: Estructura base\n\nCrea un archivo calculadora_gastos.py\n\n  \"\"\"Calculadora de gastos personales.\"\"\"\n\n  IVA = 0.13  # Costa Rica\n\n  def main():\n      print(\"=== CALCULADORA DE GASTOS ===\")\n      print(\"Registra tus gastos del mes\")\n      print()\n\n      # Aquí irá el código\n\n  if __name__ == \"__main__\":\n      main()\n\nEjecuta: python calculadora_gastos.py\n\nDebe mostrar el título y esperar. Aún no hace nada.",
            },
            {
              text:
                "Paso 2: Solicitar gastos fijos\n\n  def solicitar_gasto(nombre):\n      \"\"\"Solicita un gasto al usuario y retorna el monto como float.\"\"\"\n      while True:\n          try:\n              monto = float(input(f\"Ingresa el gasto de {nombre}: ₡\"))\n              if monto >= 0:\n                  return monto\n              else:\n                  print(\"El monto no puede ser negativo\")\n          except ValueError:\n              print(\"Error: ingresa un monto válido\")\n\n  # En main():\n  alquiler = solicitar_gasto(\"alquiler\")\n  servicios = solicitar_gasto(\"servicios (agua, luz, internet)\")\n  alimentacion = solicitar_gasto(\"alimentación\")\n  transporte = solicitar_gasto(\"transporte\")\n\nEsta función es reutilizable y robusta.",
            },
            {
              text:
                "Paso 3: Calcular totales\n\n  def calcular_totales(gastos):\n      \"\"\"Calcula total, IVA y promedio de una lista de gastos.\"\"\"\n      total = sum(gastos)\n      iva_total = total * IVA\n      promedio = total / len(gastos) if gastos else 0\n      return total, iva_total, promedio\n\n  # En main():\n  gastos = [alquiler, servicios, alimentacion, transporte]\n  total, iva_total, promedio = calcular_totales(gastos)\n\n  print()\n  print(\"=== RESUMEN DE GASTOS ===\")\n  print(f\"Total gastos: ₡{total:,.2f}\")\n  print(f\"IVA estimado: ₡{iva_total:,.2f}\")\n  print(f\"Total con IVA: ₡{total + iva_total:,.2f}\")\n  print(f\"Promedio por categoría: ₡{promedio:,.2f}\")\n\nUsa f-strings con formato de miles y 2 decimales.",
            },
            {
              text:
                "Paso 4: Agregar gasto extra opcional\n\nAgrega un bucle para gastos adicionales:\n\n  extras = []\n  print()\n  print(\"¿Tienes gastos extras? (deja vacío para terminar)\")\n\n  while True:\n      extra = input(\"Nombre del gasto extra (Enter para terminar): \").strip()\n      if not extra:\n          break\n      monto_extra = solicitar_gasto(extra)\n      extras.append(monto_extra)\n\n  if extras:\n      total_extras = sum(extras)\n      print(f\"\\nTotal gastos extras: ₡{total_extras:,.2f}\")\n  else:\n      total_extras = 0\n\nEsto muestra cómo manejar colecciones de datos (listas).",
            },
            {
              text:
                "Paso 5: Proyección mensual\n\nAgrega una función de proyección:\n\n  def mostrar_proyeccion(total_mensual, meses=6):\n      \"\"\"Muestra una proyección de gastos a varios meses.\"\"\"\n      print(\"\\n=== PROYECCIÓN DE GASTOS ===\")\n      for mes in range(1, meses + 1):\n          total_proyectado = total_mensual * mes\n          print(f\"Mes {mes:2d}: ₡{total_proyectado:>10,.2f}\")\n\n  # En main():\n  gran_total = total + iva_total + total_extras\n  mostrar_proyeccion(gran_total)\n\nAplica operadores y formateo.",
            },
            {
              text:
                "Paso 6: Código completo\n\nRevisa que el programa esté completo y funcione:\n\n  \"\"\"Calculadora de gastos personales - Módulo 1\"\"\"\n\n  IVA = 0.13\n\n  def solicitar_gasto(nombre):\n      while True:\n          try:\n              monto = float(input(f\"Ingresa el gasto de {nombre}: ₡\"))\n              if monto >= 0:\n                  return monto\n              print(\"El monto no puede ser negativo\")\n          except ValueError:\n              print(\"Error: ingresa un monto válido\")\n\n  def calcular_totales(gastos):\n      total = sum(gastos)\n      iva_total = total * IVA\n      promedio = total / len(gastos) if gastos else 0\n      return total, iva_total, promedio\n\n  def mostrar_proyeccion(total, meses=6):\n      print(\"\\n=== PROYECCIÓN A 6 MESES ===\")\n      for m in range(1, meses + 1):\n          print(f\"Mes {m:2d}: ₡{total * m:>10,.2f}\")\n\n  def main():\n      print(\"=== CALCULADORA DE GASTOS ===\")\n      alquiler = solicitar_gasto(\"alquiler\")\n      servicios = solicitar_gasto(\"servicios\")\n      alimentacion = solicitar_gasto(\"alimentación\")\n      transporte = solicitar_gasto(\"transporte\")\n\n      gastos = [alquiler, servicios, alimentacion, transporte]\n      total, iva, promedio = calcular_totales(gastos)\n      print(f\"\\nTotal: ₡{total:,.2f} | IVA: ₡{iva:,.2f} | Total c/IVA: ₡{total+iva:,.2f}\")\n\n      extras = []\n      while True:\n          extra = input(\"\\nGasto extra (Enter para terminar): \").strip()\n          if not extra:\n              break\n          extras.append(solicitar_gasto(extra))\n\n      gran_total = total + iva + sum(extras)\n      print(f\"\\nGran total del mes: ₡{gran_total:,.2f}\")\n      mostrar_proyeccion(gran_total)\n\n  if __name__ == \"__main__\":\n      main()\n\n¡Ejecuta y prueba!",
            },
            {
              text:
                "Desafíos adicionales (opcionales)\n\nMejora tu calculadora con:\n\n  1. Guardar los gastos en un archivo (alumnos avanzados)\n  2. Permitir categorías personalizadas\n  3. Mostrar gráfico de barras con caracteres:\n     Alquiler:      ████████████████ ₡250,000\n     Servicios:     ████████         ₡85,000\n\n  4. Agregar porcentaje de cada categoría sobre el total\n  5. Permitir modificar un gasto ingresado\n\nDocumenta tus mejoras con comentarios.\n\n¡Este laboratorio integra TODO el Módulo 1!",
            },
            {
              text:
                "Criterios de evaluación\n\nTu solución será evaluada en:\n\n  • Funcionalidad: el programa funciona sin errores (40%)\n  • Validación: maneja correctamente entradas inválidas (20%)\n  • Código limpio: nombres descriptivos, PEP 8, comentarios (20%)\n  • Creatividad: mejoras o características adicionales (20%)\n\nPuntos extra por:\n  • Manejo de excepciones completo\n  • Proyección con interés compuesto\n  • Interfaz más amigable\n\n¡Comparte tu solución con el instructor!",
            },
          ],
        },
        {
          lessonName: "Capítulo 15: Ejercicios del Módulo 1",
          lessonType: "practice",
          slides: [
            {
              text:
                "Ejercicios del Módulo 1\n\nMás de 60 ejercicios organizados por nivel.\n\nResuelve en orden. Marca los que completas.\n\nObjetivo: practicar hasta dominar cada concepto.\n\n¡Escribir código es la única forma de aprender a programar!",
            },
            {
              text:
                "Nivel 1 — Conceptos básicos (10 ejercicios)\n\n1. Escribe un programa que imprima \"Hola, mundo!\".\n2. Crea una variable nombre y otra edad. Muestra: \"Me llamo X y tengo Y años\".\n3. Calcula el área de un rectángulo (base × altura) con valores fijos.\n4. Calcula el perímetro de un círculo (2 × π × radio) usando math.pi.\n5. Convierte grados Celsius a Fahrenheit: F = C × 9/5 + 32.\n6. Calcula el IVA (13%) de un producto y muestra precio sin IVA, IVA y total.\n7. Intercambia los valores de dos variables sin usar una tercera.\n8. Muestra tu nombre en mayúsculas, minúsculas y título (title()).\n9. Cuenta cuántas letras \"a\" hay en una frase (usa count()).\n10. Elimina espacios al inicio y final de un string con strip().",
            },
            {
              text:
                "Nivel 2 — Entrada del usuario (10 ejercicios)\n\n11. Pide el nombre al usuario y salúdalo.\n12. Pide dos números y muestra suma, resta, multiplicación y división.\n13. Pide la edad y muestra cuántos años tendrá en 10 años.\n14. Pide una frase y muestra su longitud.\n15. Pide 3 notas y calcula el promedio (con 2 decimales).\n16. Pide un precio sin IVA y muestra el total con IVA (13%).\n17. Pide una distancia en km y conviértela a millas (1 km = 0.621371).\n18. Pide un monto en dólares y conviértelo a colones (tipo de cambio fijo).\n19. Pide el nombre completo y muestra las iniciales en mayúsculas.\n20. Pide un número de 4 dígitos y muestra cada dígito separado.",
            },
            {
              text:
                "Nivel 3 — Validación y control (10 ejercicios)\n\n21. Pide un número entero y valida que sea positivo (while hasta que cumpla).\n22. Pide un número entre 1 y 100. Reintenta si no cumple.\n23. Pide un email y verifica que contenga \"@\" y \".\".\n24. Pide una contraseña de al menos 8 caracteres.\n25. Pide un número y verifica si es par o impar.\n26. Pide un año y determina si es bisiesto.\n27. Pide 3 longitudes y determina si forman un triángulo válido.\n28. Pide un número y muestra su tabla de multiplicar del 1 al 10.\n29. Pide números hasta que el usuario ingrese 0 y muestra la suma.\n30. Pide números hasta que el usuario ingrese \"fin\" y muestra el promedio.",
            },
            {
              text:
                "Nivel 4 — Cadenas y formato (10 ejercicios)\n\n31. Invierte una cadena ingresada por el usuario.\n32. Cuenta vocales en una frase (a, e, i, o, u).\n33. Verifica si una palabra es palíndromo (ej: \"reconocer\").\n34. Capitaliza la primera letra de cada palabra de una frase.\n35. Cuenta palabras en una frase.\n36. Reemplaza todas las ocurrencias de una palabra en una frase.\n37. Extrae el dominio de un email (usuario@dominio.com → dominio.com).\n38. Convierte un número entero a binario con f\"{n:b}\".\n39. Formatea un número grande con separadores de miles (f\"{n:,}\").\n40. Crea un triángulo de asteriscos de altura N:\n    *\n    **\n    ***\n    ****",
            },
            {
              text:
                "Nivel 5 — Números y operaciones (10 ejercicios)\n\n41. Encuentra el mayor de 3 números ingresados.\n42. Calcula la factorial de un número (n!).\n43. Genera los primeros N números de la serie Fibonacci.\n44. Determina si un número es primo.\n45. Encuentra todos los divisores de un número.\n46. Calcula el máximo común divisor (MCD) de dos números.\n47. Calcula el mínimo común múltiplo (MCM).\n48. Suma los dígitos de un número (123 → 1+2+3 = 6).\n49. Determina si un número es perfecto (suma de divisores = número).\n50. Calcula la raíz cuadrada sin usar math.sqrt (método de Newton).\n\n  def newton_sqrt(n, iteraciones=100):\n      aproximacion = n / 2\n      for _ in range(iteraciones):\n          aproximacion = (aproximacion + n / aproximacion) / 2\n      return aproximacion",
            },
            {
              text:
                "Nivel 6 — Proyectos cortos (10 ejercicios)\n\n51. Calculadora básica (elige operación: +, -, *, /).\n52. Conversor de unidades (km↔millas, kg↔lb, °C↔°F).\n53. Generador de contraseñas aleatorias.\n54. Piedra, papel o tijera (contra la computadora).\n55. Juego de adivinar el número (aleatorio entre 1 y 100).\n56. Analizador de texto: palabras, caracteres, vocales, consonantes.\n57. Simulador de dado (1 a 6).\n58. Cajero automático: saldo, retirar, depositar.\n59. Tabla de multiplicar interactiva.\n60. Calculadora de propinas (porcentaje variable).",
            },
            {
              text:
                "Nivel 7 — Retos (5 ejercicios)\n\n61. Genera los primeros N números primos.\n62. Convierte números arábigos a romanos (1-3999).\n63. Valida un número de cédula costarricense (formato: 0-0000-0000).\n64. Calcula el dígito verificador de una tarjeta (algoritmo de Luhn).\n65. Cifrado César: desplazar cada letra N posiciones.\n\n  def cifrar_cesar(texto, desplazamiento):\n      resultado = \"\"\n      for caracter in texto:\n          if caracter.isalpha():\n              base = ord('A') if caracter.isupper() else ord('a')\n              resultado += chr((ord(caracter) - base + desplazamiento) % 26 + base)\n          else:\n              resultado += caracter\n      return resultado",
            },
            {
              text:
                "Guía de estudio — Siguientes pasos\n\nAntes de pasar al Módulo 2:\n\n  ✅ Debes poder explicar estos conceptos sin mirar apuntes:\n  • ¿Qué es un algoritmo y cómo se relaciona con un programa?\n  • ¿Cuál es la diferencia entre tipado dinámico y estático?\n  • ¿Qué hace el Zen de Python? Menciona 3 aforismos.\n  • ¿Cómo se declara una variable? ¿Qué tipos básicos existen?\n  • ¿Cómo se convierte un string a entero? ¿Qué puede fallar?\n  • ¿Qué operadores aritméticos, de comparación y lógicos hay?\n  • ¿Cómo validas entrada del usuario de forma robusta?\n  • ¿Qué reglas de PEP 8 aplicas en tu código?\n\nSi respondes con seguridad, ¡estás listo para el Módulo 2!",
            },
          ],
        },
      ],
    },
  ],
};
