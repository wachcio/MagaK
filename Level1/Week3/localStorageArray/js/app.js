let arr = [];

let sum = () => {
    let sum = 0;
    arr.map((i) => {
        sum = sum + i;
    });
    return sum;
};

const h1 = document.querySelector('H1');
const btnAddNumber = document.querySelector('.btnAddNumber');

const saveToLocalStorage = () => {
    localStorage.setItem('array', JSON.stringify(arr));
};

const readFromLocalStorage = () => {
    if (JSON.parse(localStorage.getItem('array') === null)) return;

    const arrTemp = JSON.parse(localStorage.getItem('array'));
    arr = [];
    arrTemp.map((e) => {
        arr.push(Number(e));
    });
};
const showSum = () => {
    readFromLocalStorage();
    h1.innerHTML = `Suma elementów w tablicy to: ${sum()}`;
};
const addNumber = () => {
    const num = prompt('Podaj liczbę którą mam dodać do tablicy liczb');

    if (num === null || num === '' || isNaN(num))
        return alert('Spróbuj jeszcze raz');

    arr.push(num);
    saveToLocalStorage();
    showSum();
};

btnAddNumber.addEventListener('click', addNumber);

showSum();
