require('dotenv').config(); // import variables from .env file. .env file not send to Github
const fs = require('fs').promises;
const arg = require('../../../../helpers/arguments');
const { decryptText } = require('../../../../helpers/cipher');

(async () => {
    if (!arg.validate(['path']) || !arg.validate(['pass']))
        throw Error('Not provide password or path to file');

    const path = arg.get(['path']);
    const pass = arg.get(['pass']);
    const fileText = await fs.readFile(path, 'utf-8');

    try {
        fs.writeFile(
            path,
            await decryptText(
                JSON.parse(fileText).encrypted,
                pass,
                process.env.SALT,
                JSON.parse(fileText).iv,
            ),
            'utf-8',
        );
    } catch (e) {
        console.error(e);
    }
})();
