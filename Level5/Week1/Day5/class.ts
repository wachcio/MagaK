interface Human {
    name: string;
    surname: string;
    age: number;
}

interface HistoryClass {
    history: string[];
    showHistroy(): void;
}

class Person implements Human, HistoryClass {
    name: string;
    surname: string = '';
    age: number;
    history: string[] = [];
    showHistroy(): void {
        console.log(this.history);
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
