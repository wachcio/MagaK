const counterH1 = document.querySelector('.counter');
const btnInc = document.querySelector('.btn-counter-inc');
const btnDec = document.querySelector('.btn-counter-dec');
const body = document.body;
let counter = 0;

const changeCounter = (operation = '+') => {
    if (operation === '+') {
        counter++;
        counterH1.innerHTML = counter;
    } else {
        counter--;
        counterH1.innerHTML = counter;
    }
};

btnInc.addEventListener('click', () => {
    changeCounter();
});
btnDec.addEventListener('click', () => {
    changeCounter('-');
});
