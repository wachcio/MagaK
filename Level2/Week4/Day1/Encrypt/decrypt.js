require('dotenv').config(); // import variables from .env file. .env file not send to Github
const fs = require('fs').promises;
const { createHmac } = require('crypto');
const arg = require('../../../../helpers/arguments');
const { decryptText } = require('../../../../helpers/cipher');

(async () => {
    try {
        if (!arg.validate(['path']) || !arg.validate(['pass']))
            throw Error('Not provide password or path to file');

        const path = arg.get(['path']);
        const pass = arg.get(['pass']);
        const fileText = await fs.readFile(path, 'utf-8');
        const fileTextObj = JSON.parse(fileText);
        const decryptTextFile = await decryptText(
            JSON.parse(fileText).encrypted,
            pass,
            process.env.SALT,
            JSON.parse(fileText).iv,
        );

        const decryptTextFileChecksum = createHmac('sha512', process.env.SALT)
            .update(decryptTextFile)
            .digest('hex');

        if (fileTextObj.checksum !== decryptTextFileChecksum) throw Error('Wrong checksum.');

        fs.writeFile(path, decryptTextFile, 'utf-8');
    } catch (e) {
        console.error(e);
    }
})();
