require('dotenv').config(); // import variables from .env file. .env file not send to Github
const arg = require('../../../../helpers/arguments');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');
const fs = require('fs').promises;
const { encryptText } = require('../../../../helpers/cipher');

(async () => {
    if (!arg.validate(['path']) || !arg.validate(['pass']))
        throw Error('Not provide password or path to file');

    try {
        const path = arg.get(['path']);
        const pass = arg.get(['pass']);
        const fileText = await fs.readFile(path, 'utf-8');
        // const fileTextChecksum =
        const encryptedText = await encryptText(fileText, pass, process.env.SALT);
        const encryptedObj = JSON.stringify(encryptedText);

        await fs.writeFile(path, encryptedObj).catch((err) => console.log(err));
    } catch (e) {
        console.error(e);
    }
})();
