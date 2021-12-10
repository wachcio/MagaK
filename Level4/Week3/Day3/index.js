const mysql = require('mysql2/promise');

(async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'megak_cars',
        decimalNumbers: true,
        multipleStatements: true,
        namedPlaceholders: true,
    });

    // const [res] = await conn.execute('SELECT * FROM `place`');

    // console.log(res);

    const value = 10000;

    // const { affectedRows } = await conn.execute(
    //     'UPDATE `cars` SET `price` = `price` + ? WHERE `price` > ?',
    //     [value, value],
    // );
    const { affectedRows } = await conn.execute(
        'UPDATE `cars` SET `price` = `price` + :myValue WHERE `price` > :myValue',
        {
            myValue: value,
        },
    );
    console.log(affectedRows);
})();
