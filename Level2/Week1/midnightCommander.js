const { readdir, readFile } = require('fs').promises;
const path = require('path');

const ROOT_DIR = './projekty';

const structure = [];

const readStructureOfDir = async (folder) => {
    try {
        const foldersAndFiles = await readdir(folder, { withFileTypes: true });
        for (folderAndFile of foldersAndFiles) {
            if (folderAndFile.isDirectory()) {
                await readStructureOfDir(path.join(folder, folderAndFile.name));
            } else {
                structure.push({
                    name: path.join(folder, folderAndFile.name),
                    contents: await readFile(
                        path.join(folder, folderAndFile.name),
                        'utf8'
                    ),
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
};

(async () => {
    await readStructureOfDir(ROOT_DIR);
    console.dir(structure);
})();
