const firstName = prompt('Podaj swoje imię');
const lastName = prompt('Podaj swoje nazwisko');
const age = Number(prompt('Podaj swój wiek'));

if (age >= 18) {
    console.log(`Masz ${age} lat i nazywasz się ${firstName} ${lastName}`);
} else {
    console.log(`Musisz być osobą pełnoletnią...`);
}
