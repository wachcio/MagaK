import React, { useState } from 'react';

import './Colors.css';

export function Colors(props) {
    const [color, setColor] = useState('white');

    const handleRedOnMouseClick = (e) => {
        e.preventDefault();
        setColor('red');
    };
    const handleGreenOnMouseClick = (e) => {
        e.preventDefault();
        setColor('green');
    };
    const handleBlueOnMouseClick = (e) => {
        e.preventDefault();
        setColor('blue');
    };

    return (
        <>
            <div className="bulb" style={{ background: color }}></div>
            <button onClick={handleRedOnMouseClick}>Red</button>
            <button onClick={handleGreenOnMouseClick}>Green</button>
            <button onClick={handleBlueOnMouseClick}>Blue</button>
        </>
    );
}
