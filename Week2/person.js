function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.sayHello = function () {
        console.log(`Hello ${this.name} ${this.surname}`);
    };
}

const ourClass = [];

for (let i = 0; i <= 10; i++) {
    // const name = prompt(`Podaj imię osoby o numerze ${i}`);
    // const surname = prompt(`Podaj nazwisko osoby o numerze ${i}`);

    // ourClass.push(new Person(name, surname));

    ourClass.push(
        new Person(
            prompt(`Podaj imię osoby o numerze ${i}`),
            prompt(`Podaj nazwisko osoby o numerze ${i}`)
        )
    );
}

console.log(ourClass);
