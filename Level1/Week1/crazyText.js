const text = prompt('Wpisz text to konwersji na Crazy Text');
let crazyText = '';

for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
        crazyText = crazyText + text[i].toUpperCase();
    } else {
        crazyText = crazyText + text[i];
    }
    console.log(crazyText[i]);
}

console.log(crazyText);
