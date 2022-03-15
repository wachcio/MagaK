import React, { useEffect, useState } from 'react';

export const Clock = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toLocaleDateString());

    //wykona się raz przy montowaniu komponentu jeśli drugim argumentem jest pusta tablica
    //jeśli useEffect zwraca funkcję wykona się ona przy odmontowaniu komponentu jeśli drugim argumentem jest pusta tablica
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date().toLocaleDateString());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>{time}</h2>
            <h2>{date}</h2>
        </div>
    );
};
