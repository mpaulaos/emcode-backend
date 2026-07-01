import cookieParser from 'cookie-parser';
import env from './env';
import app from './src/app';

import topicRoutes from './src/routes/topicRoutes';
import lessonRoutes from './src/routes/lessonRoutes';
import userRoutes from './src/routes/userRoutes';
import courseRoutes from './src/routes/courseRoutes';
import dashboardRoutes from './src/routes/dashboardRoutes';


import chatRoutes from './src/routes/chatRoutes';
import guideRoutes from './src/routes/guideRoutes';
import slideRoutes from './src/routes/slideRoutes';
import studentRoutes from './src/routes/studentRoutes';
import postRoutes from './src/routes/postRoutes';
import progressRoutes from './src/routes/progressRoutes';

app.use(cookieParser());

app.use('/api/topics', topicRoutes);

app.use('/api/lessons', lessonRoutes);

app.use('/api/chat', chatRoutes);
app.use('/api/courses', courseRoutes);

app.use('/api/auth', userRoutes);

app.use('/dashboard', dashboardRoutes);

app.use('/api/guides', guideRoutes);
app.use('/api/slides', slideRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/progress', progressRoutes);

async function start() {
    try {
    } catch (err) {
        console.error('Fallo al conectar DB:', err);
        process.exit(1);
    }
    app.listen(env.PORT, () => {
        console.log(`Server running on port ${env.PORT}`);
    });
}

start();

app.get('/about', (req, res) => {
    res.send('About Page');
});

