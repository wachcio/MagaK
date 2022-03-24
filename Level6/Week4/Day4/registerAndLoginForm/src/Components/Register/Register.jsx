import React, { useEffect } from 'react';
import { useStateWithLabel } from '../../helpers/helpers';
import './Register.css';

export function Register() {
    const [registerFormData, setRegisterFormData] = useStateWithLabel('registerFormData', {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });
    const [errors, setErrors] = useStateWithLabel('errors', {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        repeatPassword: false,
    });

    const register = (e) => {
        e.preventDefault();
    };

    const validation = () => {
        registerFormData.firstName.length < 3 && registerFormData.firstName.length > 0
            ? setErrors((errors) => ({
                  ...errors,
                  firstName: true,
              }))
            : setErrors((errors) => ({
                  ...errors,
                  firstName: false,
              }));

        registerFormData.lastName.length < 3 && registerFormData.lastName.length > 0
            ? setErrors((errors) => ({
                  ...errors,
                  lastName: true,
              }))
            : setErrors((errors) => ({
                  ...errors,
                  lastName: false,
              }));

        registerFormData.email.includes('@') || !registerFormData.email.length > 0
            ? setErrors((errors) => ({
                  ...errors,
                  email: false,
              }))
            : setErrors((errors) => ({
                  ...errors,
                  email: true,
              }));

        registerFormData.password.length < 8 && registerFormData.password.length > 0
            ? setErrors((errors) => ({
                  ...errors,
                  password: true,
              }))
            : setErrors((errors) => ({
                  ...errors,
                  password: false,
              }));

        registerFormData.password === registerFormData.repeatPassword
            ? setErrors((errors) => ({
                  ...errors,
                  repeatPassword: false,
              }))
            : setErrors((errors) => ({
                  ...errors,
                  repeatPassword: true,
              }));
    };

    const change = (e) => {
        setRegisterFormData((registerFormData) => ({
            ...registerFormData,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => validation(), [registerFormData]);

    return (
        <>
            <h1>Rejestracja</h1>
            <form className="registerForm">
                <label>
                    <p className="registerForm__label">Imię</p>
                    <input
                        type="text"
                        value={registerFormData.firstName}
                        name="firstName"
                        onChange={change}
                        className={
                            errors.firstName === true
                                ? 'registerForm__input isError'
                                : 'registerForm__input'
                        }
                    />
                </label>
                <label>
                    <p className="registerForm__label">Nazwisko</p>
                    <input
                        type="text"
                        value={registerFormData.lastName}
                        name="lastName"
                        onChange={change}
                        className={
                            errors.lastName === true
                                ? 'registerForm__input isError'
                                : 'registerForm__input'
                        }
                    />
                </label>
                <label>
                    <p className="registerForm__label">Email</p>
                    <input
                        type="text"
                        value={registerFormData.email}
                        name="email"
                        onChange={change}
                        className={
                            errors.email === true
                                ? 'registerForm__input isError'
                                : 'registerForm__input'
                        }
                    />
                </label>
                <label>
                    <p className="registerForm__label">Hasło</p>
                    <input
                        type="password"
                        value={registerFormData.password}
                        name="password"
                        onChange={change}
                        className={
                            errors.password === true
                                ? 'registerForm__input isError'
                                : 'registerForm__input'
                        }
                    />
                </label>
                <label>
                    <p className="registerForm__label">Powtórz hasło</p>
                    <input
                        type="password"
                        value={registerFormData.repeatPassword}
                        name="repeatPassword"
                        onChange={change}
                        className={
                            errors.repeatPassword === true
                                ? 'registerForm__input isError'
                                : 'registerForm__input'
                        }
                    />
                </label>

                <button type="submit" onClick={register}>
                    Zarejestruj
                </button>
            </form>
        </>
    );
}
