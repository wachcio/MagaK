const { createServer } = require('http');
const { readFile, writeFile } = require('fs').promises;
const { existsSync } = require('fs');

const server = createServer();
const countFile = './count.txt';
let count = 0;

server.on('request', async (req, res) => {
    if (existsSync(countFile)) {
        count = Number(await readFile('./count.txt', 'utf-8'));
    }
    if (req.url == '/') {
        count++;
        await writeFile(countFile, String(count));
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
        res.end(`Odwiedziłeś nas już ${count}`);
    }
});

server.listen(3000, 'localhost');
