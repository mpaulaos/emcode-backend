/* *
* This file is the entry point of the application. It sets up the Express server and listens on a specified port.It imports the Express app from the 'src/app.js' file and starts the server.
 */
/* require is a built-in function in Node.js that is used to import modules, JSON, and local files. In this case, it is used to import the Express app from the 'src/app.js' file. */
import env from './env';
import app from './src/app';
import db from './src/db';

async function start() {
    try {
        const res = await db.query('SELECT NOW()');
        console.log('DB conectada:', res.rows[0].now);
    } catch (err) {
        console.error('Fallo al conectar DB:', err);
        process.exit(1);
    }
    app.listen(env.PORT, () => {
        console.log(`Server running on port ${env.PORT}`);
    });
}

start();

app.get('/', (req, res) => {
    res.send('Express JS');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

