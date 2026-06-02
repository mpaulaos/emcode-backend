import env from './env';
import app from './src/app';

import topicRoutes from './src/routes/topicRoutes';
import lessonRoutes from './src/routes/lessonRoutes';
import userRoutes from './src/routes/userRoutes';

app.use('/api/topics', topicRoutes);

app.use('/api/lessons', lessonRoutes);

app.use('/api/auth', userRoutes);

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

