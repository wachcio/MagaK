const dns = require('dns');
const { promisify } = require('util');
const dnsAwait = require('dns').promises;

const URL = 'google.pl';

dns.lookup(URL, (err, adress) => {
    if (err) console.log(err);

    console.log(`Adress ${URL}: ${adress}`);
});

const dnsPromisify = promisify(dns.lookup);
dnsPromisify(URL)
    .then((data) => {
        console.log(`Dns Promisify. Adress ${URL}: ${data.address}`);
    })
    .catch((err) => {
        console.log(err);
    });

(async () => {
    const IP = await dnsAwait.lookup(URL);
    console.log(`Dns Await. Adress ${URL}: ${IP.address}`);
})();
