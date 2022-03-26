import React, { useEffect, useState } from 'react';
import './App.css';

export function App() {
    const [price, setPrice] = useState(null);

    useEffect(async () => {
        const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
        const data = await res.json();

        setPrice(data.askPrice);
    }, []);

    return <>Aktualny kurs BTCUSDT to: {price}</>;
}
