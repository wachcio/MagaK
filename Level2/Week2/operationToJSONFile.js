const { writeFile, readFile, mkdir, rmdir } = require('fs').promises;

(async () => {
    const DATA_DIR = './data';
    const JSON_FILE = './data/input1.json';
    const SUM_FILE = './data/sum.txt';

    try {
        if (await readFile(JSON_FILE)) {
            await rmdir(DATA_DIR, { recursive: true });
            await mkdir(DATA_DIR);
        }
    } catch (err) {
        await mkdir(DATA_DIR);
        console.log(err);
    }

    try {
        await writeFile(JSON_FILE, JSON.stringify([1, 2, 7, 20, 56, 22]));
        const arr = JSON.parse(await readFile(JSON_FILE, 'utf-8'));
        const sum = arr.reduce((a, b) => a + b, 0);
        await writeFile(SUM_FILE, String(sum));
    } catch (err) {
        console.log(err);
    }
})();
