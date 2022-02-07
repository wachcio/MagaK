import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_mkwarriors',
    namedPlaceholders: true,
    decimalNumbers: true,
});
