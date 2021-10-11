const express = require('express');
const { readFile, writeFile } = require('fs').promises;

const answersFile = './answers.json';
let answers;

const updateAnswers = async () => {
    const str = await readFile(answersFile, 'utf-8');
    return JSON.parse(str);
};

const updateAnswersFile = () => writeFile(answersFile, JSON.stringify(answers), 'utf-8');

const checkAnwersFile = async () => {
    try {
        answers = await updateAnswers();
    } catch {
        answers = {
            yes: 0,
            no: 0,
        };
        await updateAnswersFile();
    }
};

checkAnwersFile();

const app = express();

app.use(express.static('./public'));

app.get('/votes/yes', async (req, res) => {
    answers.yes++;
    await updateAnswersFile();

    res.json({ message: 'Dziękujemy za głos!' });
});
app.get('/votes/no', async (req, res) => {
    answers.no++;
    await updateAnswersFile();
    res.json({ message: 'Dziękujemy za głos!' });
});
app.get('/votes/check', async (req, res) => {
    res.json({ message: `Wyniki głosowania 'TAK': ${answers.yes}, 'NIE': ${answers.no}` });
});

app.listen(3000);
