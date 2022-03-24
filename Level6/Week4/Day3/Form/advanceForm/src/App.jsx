import { useState } from 'react';
import './App.css';

function App() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        age: 0,
    });

    const sendForm = (e) => {
        e.preventDefault(0);
    };

    const change = (e) => {
        setPerson((person) => ({
            ...person,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <form
                onSubmit={sendForm}
                style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
            >
                <label>
                    Imię:
                    <br />
                    <input
                        type="text"
                        value={person.firstName}
                        name="firstName"
                        onChange={change}
                    />
                </label>
                <label>
                    Nazwisko:
                    <br />
                    <input type="text" value={person.lastName} name="lastName" onChange={change} />
                </label>
                <label>
                    Wiek:
                    <br />
                    <input type="number" value={person.age} name="age" onChange={change} />
                </label>
                <button type="submit">Wyślij</button>
            </form>
        </>
    );
}

export default App;
