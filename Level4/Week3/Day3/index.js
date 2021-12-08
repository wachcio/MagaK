const mysql = require('mysql2/promise');

(async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'megak_cars',
    });

    const [res] = await conn.execute('SELECT * FROM `cars`');

    console.log(res);
})();
