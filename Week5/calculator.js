class calculator {
    constructor() {
        let a = 0;
        let b = 0;

        this.provideNumbers();
    }

    add() {
        return `${this.a} + ${this.b} = ${this.a + this.b}`;
    }

    substract() {
        return `${this.a} - ${this.b} = ${this.a - this.b}`;
    }
    multiply() {
        return `${this.a} * ${this.b} = ${this.a * this.b}`;
    }

    divide() {
        return `${this.a} / ${this.b} = ${this.a / this.b}`;
    }

    calculate() {
        if (this.b !== 0) {
            return `${this.add()}
${this.substract()}
${this.multiply()}
${this.divide()}`;
        } else {
            return `${this.add()}
${this.substract()}
${this.multiply()}`;
        }
    }

    testProvideNumber(nr) {
        if (Number.isNaN(Number(nr)) || nr == null || nr == '') {
            if (nr === this.a) {
                throw new Error('Number 1 is not valid');
            } else {
                throw new Error('Number 2 is not valid');
            }
        }
        this.a = Number(this.a);
        this.b = Number(this.b);
    }

    provideNumbers() {
        try {
            this.a = prompt(`Provide number 1 to calculate`).trim();
            this.testProvideNumber(this.a);
            this.b = prompt(`Provide number 2 to calculate`).trim();
            this.testProvideNumber(this.b);

            console.log(this.calculate());
        } catch (err) {
            console.log(err.message);
        }
    }
}

new calculator();
