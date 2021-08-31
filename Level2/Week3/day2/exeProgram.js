//Debian 10

const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const { validate, get } = require('../../../helpers/arguments');

if (!validate(['prog'])) {
    return console.error('Provide correct --prog parameter.');
}

const allowPrograms = [
    {
        argv: 'kalkulator',
        path: 'kcalc',
    },
    {
        argv: 'gimp',
        path: 'gimp-2.10',
    },
    {
        argv: 'writer',
        path: 'libreoffice7.1 --writer',
    },
    {
        argv: 'calc',
        path: 'libreoffice7.1  --calc',
    },
];

const prog = get(['prog']);

const checkAllowPrograms = (argv) => {
    const found = allowPrograms.find((el) => el.argv === argv);

    return !found ? undefined : found.path;
};

if (!checkAllowPrograms(prog)) {
    return console.error(`Provide correct --prog parameter. I can't run '${prog}'`);
}

(async () => {
    try {
        const { stdout } = await exec(checkAllowPrograms(prog));
        console.log(stdout);
    } catch {
        console.error('Something went wrong');
    }
})();
