const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end(`You use ${req.get('User-Agent')}`);
});

app.listen(3000);
