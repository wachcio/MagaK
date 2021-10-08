const express = require('express');
const { rm, writeFile, readdir } = require('fs').promises;
const { safeJoin } = require('../../../../helpers/sefeJoin');

const loggedUsersDir = safeJoin(__dirname, 'loggedUsers');

const app = express();

app.get('/name/set/:name', async (req, res) => {
    await writeFile(safeJoin(loggedUsersDir, req.params.name), '');
    res.send(`Welcome ${req.params.name}`);
});

app.get('/name/show', async (req, res) => {
    try {
        let response = 'Logged users:';
        const loggedUsers = await readdir(loggedUsersDir);
        for (const loggedUser of loggedUsers) {
            response += ` ${loggedUser},`;
        }
        response = response.slice(0, -1);
        res.send(response);
    } catch (err) {
        console.error(err);
    }
});

app.get('/name/check/:name', async (req, res) => {
    try {
        const loggedUsers = await readdir(loggedUsersDir);
        for (const loggedUser of loggedUsers) {
            if (loggedUser == req.params.name) {
                res.send(`You are logged in!`);
            }
        }
        res.send(`You're not logged in!`);
    } catch (err) {
        console.error(err);
    }
});

app.get('/name/delete/:name', async (req, res) => {
    try {
        await rm(safeJoin(loggedUsersDir, req.params.name));
        res.send(`User ${req.params.name} has been logged out!`);
    } catch (err) {
        console.error(err);
        res.send(`An error occurred while logging off the user ${req.params.name}!`);
    }
});

app.listen(3000);
