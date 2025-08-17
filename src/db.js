import pg, { Result } from 'pg';
import { DB_USER,DB_PORT,DB_PASSWORD,DB_HOST,DB_DATABASE } from './config.js'; 
export const pool =   new pg.Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
})


