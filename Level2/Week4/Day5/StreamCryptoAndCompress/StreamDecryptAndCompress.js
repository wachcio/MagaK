const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createDecipher } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const [, , inputFile, outputFile, password] = process.argv;
require('dotenv').config(); // import variables from .env file. .env file not send to Github
const { createGunzip } = require('zlib');

(async () => {
    const key = await scrypt(password, process.env.SALT, 24);
    await pipeline(
        createReadStream(inputFile),
        createDecipher('aes-192-cbc', key),
        createGunzip(),
        createWriteStream(outputFile),
    );
})();
