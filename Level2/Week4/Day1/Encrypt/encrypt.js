require('dotenv').config(); // import variables from .env file. .env file not send to Github
const arg = require('../../../../helpers/arguments');
const fs = require('fs').promises;
const { createHmac } = require('crypto');
const { encryptText } = require('../../../../helpers/cipher');

(async () => {
    if (!arg.validate(['path']) || !arg.validate(['pass']))
        throw Error('Not provide password or path to file');

    try {
        const path = arg.get(['path']);
        const pass = arg.get(['pass']);
        const fileText = await fs.readFile(path, 'utf-8');
        const fileTextChecksum = createHmac('sha512', process.env.SALT)
            .update(fileText)
            .digest('hex');

        const encryptedText = await encryptText(fileText, pass, process.env.SALT);

        const encryptedObj = {
            ...encryptedText,
            ...{
                checksum: fileTextChecksum,
            },
        };

        await fs.writeFile(path, JSON.stringify(encryptedObj)).catch((err) => console.log(err));
    } catch (e) {
        console.error(e);
    }
})();
