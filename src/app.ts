import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';
import env from '../env'; 

const app: Application = express();

app.use(cors({
    origin: env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.options('*', cors()); // Enable pre-flight for all routes
app.use(express.static(path.join(__dirname, '..', 'public')));  // serve /public directory as static files

// Limit request body size to 10MB to prevent abuse and handle large payloads (e.g., images)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

export default app; 