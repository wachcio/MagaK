require('dotenv').config(); // import variables from .env file. .env file not send to Github
const arg = require('../../../../helpers/arguments');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const { createDecipheriv } = require('crypto');
const fs = require('fs').promises;

(async () => {
    async function decryptText(text, password, salt, ivHex) {
        const algorithm = 'aes-192-cbc';
        const key = await scrypt(password, salt, 24);
        const iv = Buffer.from(ivHex, 'hex');

        const decipher = createDecipheriv(algorithm, key, iv);
        let decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }

    if (!arg.validate(['path']) || !arg.validate(['pass']))
        throw Error('Not provide password or path to file');

    try {
        console.log(
            await decryptText(
                JSON.parse(await fs.readFile(arg.get(['path']), 'utf-8')).encrypted,
                arg.get(['pass']),
                process.env.SALT,
                JSON.parse(await fs.readFile(arg.get(['path']), 'utf-8')).iv,
            ),
        );
    } catch (e) {
        console.error(e);
    }
})();
