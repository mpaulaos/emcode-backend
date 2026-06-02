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
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));  // serve /public directory as static files


export default app; 