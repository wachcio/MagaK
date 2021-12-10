const mysql = require('mysql2/promise');

(async () => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'school',
        decimalNumbers: true,
        multipleStatements: true,
        namedPlaceholders: true,
    });

    const [courses] = await conn.execute('SELECT * FROM `courses`');

    console.log(courses);

    const adult = 18;

    const [students] = await conn.execute(
        'SELECT `courses_students`.`course_name`, `students`.`name`, `students`.`last_name`, `students`.`age` FROM `courses_students` JOIN `students` ON `student_id` = `students`.`ID` WHERE `students`.`age` > ? ORDER BY `courses_students`.`course_name` ASC',
        [adult],
    );

    console.log(students);

    const [{ affectedRows: res1 }] = await conn.execute(
        'DELETE `courses_students` FROM `courses_students` JOIN `students`ON `students`.`ID` = `courses_students`.`student_id` AND `students`.`age` < ?',
        [adult],
    );

    console.log(`Osoby niepełnoletnie uczestniczyły w ${res1} kursach`);
    const [{ affectedRows: res2 }] = await conn.execute(
        ' DELETE FROM `students` WHERE `students`.`age` < ?',
        [adult],
    );

    console.log(`Osób niepełnoletnich ${res2}`);

    const res3 = await conn.execute(
        'INSERT INTO `students` ( `name`, `last_name`, `age`, `street`) VALUES (?, ?, ?, ?);',
        ['Marek', 'Kowalski', '45', 'ul. Warszawska, Pruszków'],
    );

    console.log(res3);
})();
