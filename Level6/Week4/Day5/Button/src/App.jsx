import React from 'react';
import './App.css';
import { Button } from '../Components/Button/Button';
import { BigButton } from '../Components/Button/BigButton';

function App() {
    return (
        <>
            <Button>Domyślny</Button>
            <Button size="S">Rozmiar S</Button>
            <Button size="M">Rozmiar M</Button>
            <Button size="L">Rozmiar L</Button>
            <Button size="XL">Rozmiar XL</Button>
            <BigButton>BigButton</BigButton>
        </>
    );
}

export default App;
