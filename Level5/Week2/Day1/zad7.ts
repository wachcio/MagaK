// 1. Dodaj typy do programu.
// 2. Usuń błędy w wyznaczonym miejscu.
// *3. Napisz interfejs, który będzie w całości opisywał klasę Bookmarks, a następnie zrób tak, żeby klasa Bookmarks implementowała ten interfejs.

// Nie zmieniaj w klasie nic oprócz typów!
class Bookmarks {
    constructor() {
        this.list = [];
    }

    first() {
        return this.list[0];
    }

    last() {
        return this.list[this.list.length - 1];
    }

    add(url) {
        this.list.push(url);
    }

    remove(urlOrAll) {
        if (urlOrAll === true) {
            this.list = [];
        } else {
            this.list = this.list.filter((bookmark) => bookmark !== urlOrAll);
        }
    }
}

// Poniższy kod możesz zmieniać - tak, aby miał typy, sens i nie wywalał błędów :)
const favorites = new Bookmarks();

function createLink(bookmark) {
    return `<a href="${bookmark}">${bookmark.substr(bookmark.indexOf('//') + 2)}</a>`;
}

favorites.add('http://wp.pl');
console.log(createLink(favorites.first()));
favorites.remove('http://wp.pl');
console.log(createLink(favorites.first()));
favorites.add('http://wp.pl');
favorites.add('http://onet.pl');
favorites.remove(true); // This should remove all
console.log('This should be true if list is empty', !favorites.first());
