const arguments = require('../../helpers/arguments')
const { dirname, extname, parse, join} = require('path')


if (!arguments.validate(['file'])){
    throw new Error("Podaj poprawną ścieżkę w parametrze --file")
}
else {
    const fileInfo = parse(arguments.get('file'));
    console.log("Pełna ścieżka: ", join(fileInfo.dir, fileInfo.base));
    console.log("Katalog nadrzędny: ", dirname(join(fileInfo.dir, fileInfo.base)));
    console.log("Plik: ", fileInfo.base);
    console.log("Rozszerzenie: ", extname(fileInfo.base));




}


