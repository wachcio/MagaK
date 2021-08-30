const sum = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            return 'All elements must be numbers!';
        }
        result += args[i];
    }
    return result;
};

console.log(sum(32, 32, 3232, 234, 5, 5, 5, 5, 653, 2, 3, 34, 2, 'k'));
console.log(sum(32, 32, 3232, 234, 5, 5, 5, 5, 653, 2, 3, 34, 2, 3, 555544));
