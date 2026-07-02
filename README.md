# EMCODE Backend

Backend del sistema educativo EMCODE desarrollado con Node.js, TypeScript, Express y Drizzle ORM. Este servicio expone la API principal para gestionar cursos, módulos, lecciones, estudiantes, progreso, autenticación, guías y chat con IA.

## Características principales

- Autenticación y autorización con JWT
- Integración con Google OAuth
- Gestión de cursos, temas, lecciones y slides
- Gestión de estudiantes, progreso y matrículas
- Endpoints para guías, posts y dashboard
- Integración con servicios de IA para chat y asistencia
- Seed inicial para cargar datos de ejemplo del curso

## Tecnologías

- Node.js + TypeScript
- Express
- Drizzle ORM
- PostgreSQL
- JWT + bcrypt
- CORS, cookie-parser
- Zod para validación de variables de entorno
- ts-node / nodemon para desarrollo

## Estructura del proyecto

```text
src/
  app.ts
  controllers/
  db/
  middleware/
  repositories/
  routes/
  schemas/
  services/
  types/
  utils/
server.ts
env.ts
drizzle.config.ts
```

## Requisitos previos

- Node.js 18 o superior
- npm o pnpm
- PostgreSQL activo
- Variables de entorno configuradas

## Instalación

1. Clona el repositorio:

```bash
git clone <repo-url>
cd emcode-backend
```

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con las variables necesarias:

```env
APP_STAGE=dev
NODE_ENV=dev
PORT=3000

DATABASE_URL=postgresql://usuario:password@localhost:5432/emcode

JWT_SECRET=tu_clave_super_segura_de_al_menos_32_caracteres
JWT_EXPIRES_IN=1h
BCRYPT_ROUNDS=12

GROQ_API_KEY=gsk_tu_api_key
CORS_ORIGIN=http://localhost:5173
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3000
```

## Ejecución en desarrollo

Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

El backend quedará disponible en:

```text
http://localhost:3000
```

## Compilación

Para generar la versión de producción:

```bash
npm run build
```

Y luego ejecutar:

```bash
npm start
```

## Base de datos

Este proyecto usa Drizzle ORM con PostgreSQL.

### Generar migraciones

```bash
npx drizzle-kit generate
```

### Ejecutar migraciones

```bash
npx drizzle-kit migrate
```

## Seed inicial

El proyecto incluye un seeder para cargar un curso inicial y un usuario de sistema:

```bash
npx ts-node src/db/seedCourse.ts
```

El seed crea:
- un usuario base: `sistema@emcode.ac.cr`
- un curso inicial con módulos y lecciones
- slides y contenido base para el curso

## Rutas principales

El backend expone las siguientes áreas principales:

- `/api/auth` — autenticación y usuarios
- `/api/courses` — cursos
- `/api/topics` — módulos/temas
- `/api/lessons` — lecciones
- `/api/slides` — slides
- `/api/students` — estudiantes
- `/api/progress` — progreso del estudiante
- `/api/guides` — guías de apoyo
- `/api/posts` — publicaciones
- `/api/chat` — chat asistido
- `/dashboard` — endpoints del panel de administración

## Variables de entorno importantes

| Variable | Descripción |
| --- | --- |
| `DATABASE_URL` | Conexión a PostgreSQL |
| `JWT_SECRET` | Secreto para firmar tokens JWT |
| `GROQ_API_KEY` | API key para servicios de IA |
| `GOOGLE_CLIENT_ID` | Client ID de Google OAuth |
| `GOOGLE_CLIENT_SECRET` | Secret de Google OAuth |
| `CORS_ORIGIN` | Origen permitido por CORS |

## Notas de desarrollo

- El servidor usa `express.json` y `express.urlencoded` con límite de `10mb`.
- Los archivos estáticos de la carpeta `public/` se sirven automáticamente.
- El seed está pensado para entornos `dev` y `test`, no para producción.

## Licencia

ISC