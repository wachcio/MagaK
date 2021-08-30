// const calculator = function(numberOne, numberTwo) {
const calculator = (numberOne, numberTwo) => {
    if (
        numberOne === undefined || //bad data
        numberTwo === undefined ||
        numberOne === '' || //empty string
        numberTwo === '' ||
        numberOne === null || //prompt click cancel
        numberTwo === null ||
        Number.isNaN(Number(numberOne)) === true || //data is not number
        Number.isNaN(Number(numberTwo)) === true
    )
        return console.log('Wrong input data');

    const sum = Number(numberOne) + Number(numberTwo);
    const substract = Number(numberOne) - Number(numberTwo);
    const multiply = Number(numberOne) * Number(numberTwo);
    const divide = Number(numberOne) / Number(numberTwo);

    if (numberTwo == 0) {
        console.log(`Na podstawie podanych przez Ciebie danych obliczyłem:
        ${numberOne} + ${numberTwo} = ${sum}
        ${numberOne} - ${numberTwo} = ${substract}
        ${numberOne} * ${numberTwo} = ${multiply}`);
    } else {
        console.log(`Na podstawie podanych przez Ciebie danych obliczyłem:
        ${numberOne} + ${numberTwo} = ${sum}
        ${numberOne} - ${numberTwo} = ${substract}
        ${numberOne} * ${numberTwo} = ${multiply}
        ${numberOne} / ${numberTwo} = ${divide}`);
    }
};

// calculator('1', '0');
// calculator('1', 'fff');
// calculator(1, 65);

const numberOne = prompt('Podaj pierwszą liczbę');
const numberTwo = prompt('Podaj drugą liczbę');

calculator(numberOne, numberTwo);
