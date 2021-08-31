const {promisify} = require('util');
const  exec  = promisify(require('child_process').exec);
const fs = require('fs');
const { safeJoin } = require('../../../helpers/sefeJoin');
const arguments = require('../../../helpers/arguments');

if (!arguments.validate(['dir'])) {
    return console.error('Provide correct --dir parameter.');
}

const dir = safeJoin('/', arguments.get(['dir']))

if (!fs.existsSync(dir)) {
    return console.error(`Provide correct --dir parameter. Dir ${dir} not exist`);
}

(async()=>{
try {

    const {stdout} = await exec(`ls ${dir}`)
    console.log(stdout);


} catch {
    console.error('Something went wrong');
}
})()


