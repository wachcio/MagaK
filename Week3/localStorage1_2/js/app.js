let comfort = {
    moodGood: 0,
    moodBad: 0,
};

const btnGood = document.querySelector('.btnGood');
const btnBad = document.querySelector('.btnBad');
const answer = document.querySelector('.answer');

const saveAnswer = () => {
    answer.innerHTML = `Do tej pory kliknąłeś ${comfort.moodGood} razy na dobrze i ${comfort.moodBad} razy na źle`;
};

const saveToLocalStorage = () => {
    localStorage.setItem('comfort', JSON.stringify(comfort));
};

const readFromLocalStorage = () => {
    comfort = JSON.parse(localStorage.getItem('comfort'));
};
btnGood.addEventListener('click', () => {
    comfort.moodGood++;
    saveToLocalStorage();
    saveAnswer();
});
btnBad.addEventListener('click', () => {
    comfort.moodBad++;
    saveToLocalStorage();
    saveAnswer();
});

if (!localStorage.getItem(comfort)) {
    readFromLocalStorage();
    saveAnswer();
}
