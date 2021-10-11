const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.use(cookieParser());

app.post('/cookie/set', (req, res) => {
    res.cookie('userName', req.body.name, { maxAge: 1000 * 60 * 60 * 24 * 60 }).json({
        message: `Witaj ${req.body.name}`,
    });
});
app.get('/cookie/show', (req, res) => {
    res.json({ message: `Witaj ${req.cookies.userName}` });
});
app.post('/cookie/check', (req, res) => {
    if (req.cookies.userName === req.body.name) {
        return res.json({ message: `Jesteś już zalogowany jako ${req.cookies.userName}` });
    }
    res.json({ message: `` });
});
app.listen(3000);
