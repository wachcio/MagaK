import React from 'react';
import { useStateWithLabel } from '../../helpers/helpers';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import './App.css';

export function App() {
    const [showRegistration, setShowRegistration] = useStateWithLabel('showRegistration', false);

    return (
        <>
            <div className="menu">
                <a
                    href="#"
                    className="menu__link"
                    onClick={(e) => {
                        e.preventDefault();
                        return setShowRegistration(false);
                    }}
                >
                    Logowanie
                </a>
                <a
                    href="#"
                    className="menu__link"
                    onClick={(e) => {
                        e.preventDefault();
                        return setShowRegistration(true);
                    }}
                >
                    Rejestracja
                </a>
            </div>
            {showRegistration ? <Register /> : <Login />}
        </>
    );
}
