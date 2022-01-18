// Uzupełnij typy - w jaki sposób możesz to zrobić? Czy musisz coś jeszcze modyfikować?

interface Product {
    name: string;
    count: number;
    isDegradable: boolean;
}

// type PropName = 'name' | 'count' | 'isDegradable';

const product: Product = {
    name: 'Opakowanie zbiorcze',
    count: 1000,
    isDegradable: true,
};

function getProductProp(obj: Product, propName: keyof Product): string | number | boolean {
    return obj[propName];
}

const count = getProductProp(product, 'count') as Number;
const degraded = getProductProp(product, 'isDegradable') as Boolean;
console.log(`${count.toFixed(2)} ${degraded ? 'degraded' : 'undegraded'}`);
