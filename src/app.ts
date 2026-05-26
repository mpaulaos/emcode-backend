import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';

const app: Application = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));  // serve /public directory as static files

const topicRoutes = require('./routes/topicRoutes');

app.use(topicRoutes);

const lessonRoutes = require('./routes/lessonRoutes');

app.use(lessonRoutes);

export default app; 