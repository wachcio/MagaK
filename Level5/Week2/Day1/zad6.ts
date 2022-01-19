// Optypuj poniższy kod, następie napisz pętlę, która będzie wypisywała wartość po kolei wszystkich elementów pojedynczo w konsoli.
// Spróbuj użyć różnych typów pętli. //forEach, for...i, for...in, for...of
// Zwróć uwagę na to jak edytor sprawnie podpowiada Ci w pracy.
// W kodzie jest błąd - powinno to być widać i łatwo możesz go naprawić.

interface Item {
    name: string;
    count: number;
    pricePerOne: number;
    vat: number;
}

function showItems(items: Item[]): void {
    // Ew. typy dodaj wyłącznie tutaj
    // Pętla

    //forEach

    // items.forEach((v) => {
    //     console.log(v);
    // });

    //for ... i

    // for (let i = 0; i < items.length; i++) {
    //     console.log(items[i]);
    // }

    //for ... in

    // for (const item in items) {
    //     console.log(items[item]);
    // }
    //for ... of

    // for (const item of items) {
    //     console.log(item);
    // }

    //map
    items.map((v) => {
        console.log(v);
    });
}

showItems([
    {
        name: 'Pomarańcze luz',
        count: 1.2,
        pricePerOne: 1,
        vat: 0,
    },
    {
        name: 'Opony komplet',
        count: 1,
        pricePerOne: 800,
        vat: 23,
    },
    {
        name: 'MP3 Player Manta 256MB',
        count: 1,
        pricePerOne: 75,
        vat: 23,
    },
    {
        name: 'Baton "Mega Kursowy Baton Masło Orzechowe"',
        count: 5,
        pricePerOne: 2,
        vat: 23,
    },
]);
