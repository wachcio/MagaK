const pricify = (price: number, currency: string = 'PLN', vat: number = 23): string => {
    if (typeof price != 'number') return 'Price must by number';
    if (typeof vat != 'number') return 'Vat must by number';
    return `${(price + (vat / 100) * price).toFixed(2)}${currency}`;
};

console.log(pricify(10));
