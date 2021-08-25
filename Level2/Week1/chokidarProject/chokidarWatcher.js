const arguments = require('../../../helpers/arguments')
const {watch} = require('chokidar')
const {readFile} = require('fs').promises

if (!arguments.validate(['dir'])) {throw new Error('Not provide watch direktory.')}

// Something to use when events are received.
const log = console.log.bind(console);

const getConstentFile =  (async(file)=>{
    log(`${file} content: `)
    return  log(await readFile(file, 'utf8'));

})


    // Add event listeners.
watch(`${arguments.get('dir')}/**/*.js`, {awaitWriteFinish: true})
  .on('add', async (path) => {log(`File ${path} has been added`), await getConstentFile(path)})
  .on('change', async (path) => {log(`File ${path} has been changed`), await getConstentFile(path)})
  .on('unlink', async (path) => {log(`File ${path} has been removed`), await getConstentFile(path)})

