const counterH1 = document.querySelector('.counter');
const btnInc = document.querySelector('.btn-counter-inc');
const btnDec = document.querySelector('.btn-counter-dec');
let counter = 0;

if (localStorage.getItem('counter')) {
    counter = Number(localStorage.getItem('counter'));
    counterH1.innerHTML = counter;
}

const changeCounter = (operation = '+') => {
    if (operation === '+') {
        counter++;
    } else {
        counter--;
    }
    localStorage.setItem('counter', String(counter));
    counterH1.innerHTML = counter;
};

btnInc.addEventListener('click', () => {
    changeCounter();
});
btnDec.addEventListener('click', () => {
    changeCounter('-');
});
