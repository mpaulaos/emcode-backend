import env from './env';
import app from './src/app';
import db from './src/db/db';
import { users } from "./src/db/schema";

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

app.get('/users', async (req, res) => {
    const result = await db.select().from(users);
    console.log(result);
    res.send(result);
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

