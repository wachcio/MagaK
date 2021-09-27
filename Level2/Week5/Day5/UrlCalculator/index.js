const HOSTNAME = 'localhost';
const PORT = 3000;
const BASE_URL = 'http://' + 'HOSTNAME' + ':' + PORT;

const { createServer } = require('http');
const { URL } = require('url');

const server = createServer();

const returnError = (res) => {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
    res.end(`Podano złe parametry`);
};

server.on('request', async (req, res) => {
    const pathname = new URL(BASE_URL + req.url).pathname;
    const pathnameArr = pathname.split('/');
    const operation = pathnameArr[1];

    if (req.url == '/') {
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
        res.end(
            `Witamy w kalkulatorze. Jeśli adres URL będzie miał format '/operacja/liczba/liczba' gdzie operacja to: 'add', 'subtract', 'multiply' lub 'divide' oraz liczba będzie podaną liczbą kalkulator zwórci poprawny wynik działania.`,
        );
    }

    if (pathnameArr.length === 4) {
        const number1 = Number(pathnameArr[2]);
        const number2 = Number(pathnameArr[3]);
        let result = 0;

        if (number2 === 0 && operation === 'divide') {
            returnError(res);
        }

        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                result = number1 / number2;
                break;
            default:
                returnError(res);
        }
        if (isNaN(number1) || isNaN(number2) || isNaN(result)) {
            returnError(res);
        }
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
        res.end(
            `Wynik działania operacji ${operation} na liczbach ${number1} oraz ${number2} wynosi ${result}`,
        );
    } else {
        returnError(res);
    }
});

server.listen(PORT, HOSTNAME);
