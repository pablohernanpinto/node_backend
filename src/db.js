import pkg from 'pg';
const { Pool } = pkg;
import { DB_CONNECTION } from './config.js';

export const pool = new Pool({
    connectionString: DB_CONNECTION,
    ssl: { rejectUnauthorized: false } // obligatorio para Render
});
