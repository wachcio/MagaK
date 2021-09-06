require('dotenv').config(); // import variables from .env file. .env file not send to Github
const arg = require('../../../../helpers/arguments');
const bcrypt = require('bcrypt');

if (!arg.validate(['pass'])) throw Error('Not provide password');

bcrypt.compare(arg.get(['pass']), process.env.HASH, function (err, result) {
    if (result === true) {
        console.log('Logged in');
    } else {
        console.log('Wrong password!');
    }
});
