import { useState } from 'react';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState(false);
    const [agreement, setAgreement] = useState(false);

    const color = firstName[0] === '@' ? 'green' : 'red';

    const sendForm = (e) => {
        e.preventDefault(0);
        console.log(gender);
    };

    return (
        <>
            <h1>Hello, {firstName}</h1>
            <form
                onSubmit={sendForm}
                style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
            >
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ backgroundColor: color }}
                />
                <select
                    name="gender"
                    checked={gender}
                    onChange={(e) => setGender(e.target.checked)}
                >
                    <option value="">--wybierz--</option>
                    <option value="W">Woman</option>
                    <option value="M">Man</option>
                </select>
                <label>
                    <input
                        type="checkbox"
                        name="agreement"
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}
                    />
                    Agreement
                </label>
                <p>{agreement ? 'Zgoda' : 'Brak zgody'}</p>
            </form>
        </>
    );
}

export default App;
