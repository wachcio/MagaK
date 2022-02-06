import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'mk_warriors',
    namedPlaceholders: true,
    decimalNumbers: true,
});
