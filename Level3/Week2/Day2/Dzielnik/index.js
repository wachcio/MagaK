const express = require('express');

const app = express();

app.use(express.static('./public'));

app.get('/checkNumber/:numA/:numB', async (req, res) => {
    if (isNaN(Number(req.params.numA)) || isNaN(Number(req.params.numB))) {
        res.json({
            message: `Podano nieprawidłowe dane`,
        });
    }
    if (Number(req.params.numA) % Number(req.params.numB) === 0) {
        res.json({
            message: `Liczba ${req.params.numB} jest dzielnikiem liczby ${req.params.numA}`,
        });
    } else {
        res.json({
            message: `Liczba ${req.params.numB} nie jest dzielnikiem liczby ${req.params.numA}`,
        });
    }
});

app.listen(3000);
