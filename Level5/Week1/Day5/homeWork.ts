interface Human {
    name: string;
    surname: string;
    age: number;
}

interface HistoryEntry {
    createdAt: Date;
    event: string;
}

interface History2 {
    history: HistoryEntry[];
}

class User implements Human, History2 {
    name: string;
    surname: string;
    age: number;
    history: HistoryEntry[] = [];

    constructor(name: string, surname: string, age: number) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    showHistory(): void {
        console.log(this.history);
    }

    addHistory(entry: HistoryEntry): void {
        this.history.push(entry);
    }
}

const person = new User('Marcin', 'Wachcio', 40);
person.showHistory(); // []
person.addHistory({
    createdAt: new Date(),
    event: 'Zalogowano',
});
person.showHistory();
