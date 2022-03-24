import React from 'react';
import { useStateWithLabel } from '../../helpers/helpers';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import './App.css';

export function App() {
    const [showRegistration, setShowRegistration] = useStateWithLabel('showRegistration', false);

    return (
        <>
            <button
                onClick={() => {
                    setShowRegistration(false);
                }}
            >
                Logowanie
            </button>
            <button
                onClick={() => {
                    setShowRegistration(true);
                }}
            >
                Rejestracja
            </button>
            {showRegistration ? <Register /> : <Login />}
        </>
    );
}
