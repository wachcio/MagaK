const express = require('express');

const app = express();
app.get('/add/:number1/:number2', (req, res) => {
    const num1 = Number(req.params.number1);
    const num2 = Number(req.params.number2);
    if (isNaN(num1) || isNaN(num2)) {
        res.send('Wrong numbers.');
    }
    res.send(`${num1} plus ${num2} is ${num1 + num2}`);
});

app.listen(3000);
