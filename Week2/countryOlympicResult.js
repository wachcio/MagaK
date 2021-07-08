/**
 * 1. Usuń konstruktor, metody i wszystko po klasie z rzeczy, które pisaliśmy wspólnie.
 * 2. Stwórz właściwość przechowującą zajęte miejsca w zawodach.
 * 3. Stwórz metodę, która pozwoli dodać nowe zajęte miejsce do właściwości danego obiektu.
 * 4. Stwórz dwa obiekty reprezentujące 2 kraje i dodaj do nich kilka zajętych miejsc, używając przygotowanej przes siebie metody możesz ją wywoływac wielokrotnie).
 * 5.* Dodaj metodę, która sprawdzi czy kraj posiada jakiekolwiek pierwsze miejsce i jeżeli tak to wyświetl "Brawo!".
 */

class Country {
    constructor(name) {
        this.name = name;
        this.places = [];
    }

    addResult(place) {
        if (!Number(place) || Number(place) < 0 || !place)
            return 'Delivered wrong place.';

        return this.places.push(Number(place));
    }

    isWinner() {
        const winnings = [];
        this.places.map((el) => {
            if (el === 1) {
                winnings.push(el);
            }
        });
        return winnings.length > 0
            ? `Brawo! ${this.name} have ${winnings.length} winnings`
            : `${this.name} haven't winnings`;
    }
}

const poland = new Country('Poland');
poland.addResult(1);
poland.addResult(1);
poland.addResult(1);
poland.addResult(12);
poland.addResult(23);
console.log(poland.isWinner());
console.log(poland);

const germany = new Country('Germany');
germany.addResult(12);
germany.addResult();
germany.addResult(-1);
germany.addResult('ddd');
germany.addResult('2');
germany.addResult(0);
germany.addResult(undefined);
germany.addResult(null);
germany.addResult(21);
germany.addResult(12);
germany.addResult(33);
germany.addResult(23);
germany.addResult(35);
germany.addResult(21);
console.log(germany.isWinner());
console.log(germany);
