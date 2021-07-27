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

    provideNumbers() {
        try {
            this.a = Number(prompt(`Provide number 1 to calculate`));
            if (Number.isNaN(Number(this.a)) || this.a == null || this.a == '')
                throw new Error('Number 1 is not valid');
            this.b = Number(prompt(`Provide number 2 to calculate`));
            if (Number.isNaN(Number(this.b)) || this.a == null || this.b == '')
                throw new Error('Number 2 is not valid');

            console.log(this.calculate());
        } catch (err) {
            console.log(err.message);
        }
    }
}

new calculator();
