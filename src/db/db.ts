import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

const db = drizzle({ client: pool });

const result = db.execute('select 1');

export default db;