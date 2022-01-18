enum TwoNumbersSignB {
    Add,
    Subtract,
    Multiply,
    Divide,
}

interface TwoNumbersOperationB {
    a: number | string;
    b: number | string;
    sign?: TwoNumbersSignB;
}
enum OneNumberSignB {
    Inc,
    Dec,
}

interface OneNumberOperationB {
    a: number | string;
    sign?: OneNumberSignB;
}

type CorrectTypeB = OneNumberOperationB | TwoNumbersOperationB;

// Nie modyfikuj w ogóle kodu poniżej - stwórz interfejs tak, aby pasował wszędzie

const a2: CorrectTypeB = {
    a: 1,
    b: 2,
    sign: TwoNumbersSignB.Add,
};

const b2: CorrectTypeB = {
    a: 1,
    b: 2,
};

const c2: CorrectTypeB = {
    a: '1',
    b: '3',
    sign: TwoNumbersSignB.Divide,
};

const d2: CorrectTypeB = {
    a: 1,
    sign: OneNumberSignB.Inc,
};

// Zmiana: zmień teraz typ tak, aby znak mógł być tylko +, -, * lub /

// Zmiana: stwórz dokładne typy tak, by w przypadku posiadania tylko 1 danej (a) można było na niej wykonać ++ i --, ale nie w przypadku dwóch i na odwrót

// Zmień program w taki sposób, aby do operacji używało się enumów, a nie stringów

function calc({ a, b, sign }: TwoNumbersOperationB) {
    switch (sign) {
        case TwoNumbersSignB.Add:
            console.log(Number(a) + Number(b));
            break;
        case TwoNumbersSignB.Subtract:
            console.log(Number(a) - Number(b));
            break;
    }
}

calc(a2);
calc(c2);
