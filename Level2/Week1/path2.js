const arguments = require('../../helpers/arguments')
const { dirname, extname, parse, join} = require('path')
const {safeJoin} = require('../../helpers/sefeJoin')


if (!arguments.validate(['file'])){
    throw new Error("Podaj poprawną ścieżkę w parametrze --file")
}
else {
    const fileInfo = parse(arguments.get('file'));
    console.log("Pełna ścieżka: ", safeJoin(__dirname, arguments.get('file')));
    console.log("Plik: ", fileInfo.base);
    console.log("Rozszerzenie: ", extname(fileInfo.base));




}


