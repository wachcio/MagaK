// const even = function (number) {}
const even = (number) => number;
// const odd = function (number) {}
const odd = (number) => number * 2;

// const calculator = function(number) {
const checkNumber = (number) => {
    if (
        number === undefined ||
        Number.isNaN(Number(number) || number == null) === true
    )
        return console.log('Wrong input data');

    if (Number(number) % 2 == 0) {
        console.log(even(number));
    } else {
        console.log(odd(number));
    }
};

const number = prompt('Podaj liczbę');

checkNumber(number);
