const { normalize, resolve } = require('path');

export function safeJoin(base, target) {
    const targetPath = '.' + normalize('/' + target);
    return resolve(base, targetPath);
}
