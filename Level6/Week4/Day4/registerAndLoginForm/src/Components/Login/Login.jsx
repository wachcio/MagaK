import React, { useState } from 'react';
import { useStateWithLabel } from '../../helpers/helpers';
import './Login.css';

export function Login() {
    const [isLogged, setIsLogged] = useStateWithLabel('isLogged', null);
    const [loginFormData, setLoginFormData] = useStateWithLabel('loginFormData', {
        email: '',
        password: '',
    });

    const correctData = {
        email: 'a@b.c',
        password: '1234',
    };

    const logIn = (e) => {
        e.preventDefault();
        loginFormData.email === correctData.email && loginFormData.password === correctData.password
            ? setIsLogged(true)
            : setIsLogged(false);
    };

    const change = (e) => {
        setLoginFormData((loginFormData) => ({
            ...loginFormData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <h1>Logowanie</h1>
            <form className="loginForm">
                <label>
                    <p className="loginForm__label">Email</p>
                    <input
                        type="text"
                        value={loginFormData.email}
                        name="email"
                        onChange={change}
                        className="loginForm__input"
                    />
                </label>
                <label>
                    <p className="loginForm__label">Password</p>
                    <input
                        type="password"
                        value={loginFormData.password}
                        name="password"
                        onChange={change}
                        className="loginForm__input"
                    />
                </label>
                <div>{isLogged === false ? <span>Złe dane logowania</span> : null}</div>
                <button type="submit" onClick={logIn}>
                    Zaloguj
                </button>
            </form>
        </>
    );
}
