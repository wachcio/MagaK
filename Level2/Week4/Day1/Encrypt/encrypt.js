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

    if (!arg.validate(['path']) || !arg.validate(['pass']))
        throw Error('Not provide password or path to file');

    try {
        await fs
            .writeFile(
                arg.get(['path']),
                JSON.stringify(
                    await encryptText(
                        await fs.readFile(arg.get(['path']), 'utf-8'),
                        arg.get(['pass']),
                        process.env.SALT,
                    ),
                ),
            )
            .catch((err) => console.log(err));
    } catch (e) {
        console.error(e);
    }
})();
