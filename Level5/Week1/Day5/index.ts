interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
    achievements?: string[];
    greet: () => void;
}

const personA: Person = {
    name: 'Bartek',
    age: 34,
    isDeveloper: true,
    greet(): void {
        console.log(`Hello, ${this.name}`);
    },
};

const personB: Person = {
    name: 'Marcin',
    age: 40,
    isDeveloper: true,
    achievements: ['Jeździ na rowerze'],
    greet(): void {
        console.log(`Cześć, ${this.name}`);
    },
};

function dateOfBirth({ age }: Person): number {
    return new Date().getFullYear() - age;
}

console.log(dateOfBirth(personB));
