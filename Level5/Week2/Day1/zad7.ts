// 1. Dodaj typy do programu.
// 2. Usuń błędy w wyznaczonym miejscu.
// *3. Napisz interfejs, który będzie w całości opisywał klasę Bookmarks, a następnie zrób tak, żeby klasa Bookmarks implementowała ten interfejs.

interface BookmarksInterface {
    list: string[];
    first(): string | undefined;
    last(): string | undefined;
    add(url: string): void;
    remove(urlOrAll: string | true): void;
}

// Nie zmieniaj w klasie nic oprócz typów!
class Bookmarks implements BookmarksInterface {
    list: string[];
    constructor() {
        this.list = [];
    }

    first(): string | undefined {
        return this.list[0];
    }

    last(): string | undefined {
        return this.list[this.list.length - 1];
    }

    add(url: string): void {
        this.list.push(url);
    }

    remove(urlOrAll: string | true): void {
        if (urlOrAll === true) {
            this.list = [];
        } else {
            this.list = this.list.filter((bookmark) => bookmark !== urlOrAll);
        }
    }
}

// Poniższy kod możesz zmieniać - tak, aby miał typy, sens i nie wywalał błędów :)
const favorites = new Bookmarks();

function createLink(bookmark: string | undefined): string {
    if (!bookmark) return '';
    return `<a href="${bookmark}">${bookmark.substring(bookmark.indexOf('//') + 2)}</a>`;
}

favorites.add('http://google.pl');
favorites.add('http://wp.pl');
console.log(createLink(favorites.first()));
favorites.remove('http://wp.pl');
console.log(createLink(favorites.first()));
favorites.add('http://wp.pl');
favorites.add('http://onet.pl');
favorites.remove(true); // This should remove all
console.log('This should be true if list is empty', !favorites.first());
