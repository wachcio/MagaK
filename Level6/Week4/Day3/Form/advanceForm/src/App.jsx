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
                        onChange={(e) =>
                            setPerson((person) => ({
                                ...person,
                                firstName: e.target.value,
                            }))
                        }
                    />
                </label>
                <label>
                    Nazwisko:
                    <br />
                    <input
                        type="text"
                        value={person.lastName}
                        onChange={(e) =>
                            setPerson((person) => ({
                                ...person,
                                lastName: e.target.value,
                            }))
                        }
                    />
                </label>
                <label>
                    Wiek:
                    <br />
                    <input
                        type="number"
                        value={person.age}
                        onChange={(e) =>
                            setPerson((person) => ({
                                ...person,
                                age: Number(e.target.value),
                            }))
                        }
                    />
                </label>
                <button type="submit">Wyślij</button>
            </form>
        </>
    );
}

export default App;
