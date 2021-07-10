/**
 * Używaj w zadaniach metod tablicowych!
 * 1. Wylicz średnią ocen.
 * 2. Następnie wypisz wszystkie oceny min. 4.
 */

const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];
const avg = grades.reduce((a, b) => a + b) / grades.length;
console.log('avg: ', avg);

const min4 = grades.filter((el) => (el >= 4 ? el : null));

console.log('min4', min4);

// 3. Napisz kod, który za pomocą jednego ciągu (możesz skorzystać z programowania funkcyjnego i rozdzielić na funkcje) osiągnie następujący efekt:
// Wyświetli pojedynczo każdą nazwę miasta, która ma parzystą liczbę znaków. Nazwy miast powinny być pisane wielkimi literami.

const cities = [
    'Wrocław',
    'Poznań',
    'Kraków',
    'Warszawa',
    'Katowice',
    'Bytom',
    'Jelenia Góra',
    'Jastrzębie-Zdrój',
    'Rabka-Zdrój',
];

cities.map((el) => console.log(el.length % 2 == 0 ? el.toUpperCase() : el));
