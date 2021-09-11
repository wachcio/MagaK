const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createCipher } = require('crypto');
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const [, , inputFile, outputFile, password] = process.argv;
const { createGzip } = require('zlib');

require('dotenv').config(); // import variables from .env file. .env file not send to Github

(async () => {
    const key = await scrypt(password, process.env.SALT, 24);
    await pipeline(
        createReadStream(inputFile),
        createGzip(),
        createCipher('aes-192-cbc', key),
        createWriteStream(outputFile),
    );
})();
