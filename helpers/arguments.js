const args = process.argv.slice(2);

function argv(arg) {
    const index = args.indexOf('--' + arg);

    if (index !== -1 && args[index + 1] !== undefined) {
        return args[index + 1];
    } else {
        // console.log(args);
        return null;
    }
}

function validateArgs(args) {
    let valid = true;

    args.forEach(function (arg) {
        if (!argv(arg)) {
            valid = false;
        }
    });

    return valid;
}

module.exports = {
    get: argv,
    validate: validateArgs,
};
