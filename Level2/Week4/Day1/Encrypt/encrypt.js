require('dotenv').config(); // import variables from .env file. .env file not send to Github
const arg = require('../../../../helpers/arguments');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');
const fs = require('fs').promises;

(async () => {
    async function encryptText(text, password, salt) {
        const algorithm = 'aes-192-cbc';
        const key = await scrypt(password, salt, 24);
        const iv = await randomBytes(16);

        const cipher = createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return {
            encrypted,
            iv: iv.toString('hex'),
        };
    }

    if (!arg.validate(['path']) || !arg.validate(['text']))
        throw Error('Not provide text or path to file');

    try {
        const promise = fs
            .writeFile(
                arg.get(['path']),
                JSON.stringify(
                    await encryptText(arg.get(['text']), process.env.PASSWORD, process.env.SALT),
                ),
            )
            .catch((err) => console.log(err));

        await promise;
    } catch (e) {
        console.error(e);
    }
})();
