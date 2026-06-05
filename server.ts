import env from './env';
import app from './src/app';

import topicRoutes from './src/routes/topicRoutes';
import lessonRoutes from './src/routes/lessonRoutes';
import userRoutes from './src/routes/userRoutes';
import courseRoutes from './src/routes/courseRoutes';
import dashboardRoutes from './src/routes/dashboardRoutes';


app.use('/api/topics', topicRoutes);

app.use('/api/lessons', lessonRoutes);

app.use('/api/courses', courseRoutes);

app.use('/api/auth', userRoutes);

app.use('/dashboard', dashboardRoutes);

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

