let numberOne = prompt('Podaj pierwszą liczbę');

while (!Number(numberOne)) {
    if (numberOne === '0') break;
    alert('Podaj poprawną pierwszą liczbę');
    numberOne = prompt('Podaj pierwszą liczbę');
}

let numberTwo = prompt('Podaj drugą liczbę');

while (!Number(numberTwo)) {
    if (numberTwo === '0') break;
    alert('Podaj poprawną drugą liczbę');
    numberTwo = prompt('Podaj drugą liczbę');
}

let operation = prompt(
    'Podaj działanie które mam wykonać na liczbach (+,-,*,/)'
);

if (
    operation != '+' &&
    operation != '-' &&
    operation != '*' &&
    operation != '/'
) {
    alert('Podaj poprawne działanie które mam wykonać na liczbach (+,-,*,/)');
    operation = prompt(
        'Podaj działanie które mam wykonać na liczbach (+,-,*,/)'
    );
}
console.log(
    `${numberOne} ${operation} ${numberTwo} to:`,
    eval(`${numberOne}${operation}${numberTwo}`)
);
