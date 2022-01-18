type TwoNumbersSign = '+' | '-' | '*' | '/';

interface TwoNumbersOperation {
    a: number | string;
    b: number | string;
    sign?: TwoNumbersSign;
}
type OneNumberSign = '++' | '--';

interface OneNumberOperation {
    a: number | string;
    sign?: OneNumberSign;
}

type CorrectType = OneNumberOperation | TwoNumbersOperation;

// Nie modyfikuj w ogóle kodu poniżej - stwórz interfejs tak, aby pasował wszędzie

const a: CorrectType = {
    a: 1,
    b: 2,
    sign: '+',
};

const b: CorrectType = {
    a: 1,
    b: 2,
};

const c: CorrectType = {
    a: '1',
    b: '2',
    sign: '-',
};

const d: CorrectType = {
    a: 1,
    sign: '++',
};

// Zmiana: zmień teraz typ tak, aby znak mógł być tylko +, -, * lub /

// Zmiana: stwórz dokładne typy tak, by w przypadku posiadania tylko 1 danej (a) można było na niej wykonać ++ i --, ale nie w przypadku dwóch i na odwrót

// Zmień program w taki sposób, aby do operacji używało się enumów, a nie stringów
