import { useState } from 'react';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState(false);
    const [agreement, setAgreement] = useState(false);
    const [divColor, setDivColor] = useState('white');

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
                <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
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
                <div>
                    <select
                        name="divColor"
                        value={divColor}
                        onChange={(e) => setDivColor(e.target.value)}
                    >
                        <option value="">--wybier kolor--</option>
                        <option value="red">Czerwony</option>
                        <option value="blue">Niebieski</option>
                        <option value="green">Zielony</option>
                    </select>
                    <div
                        style={{ backgroundColor: `${divColor}`, width: '100px', height: '100px' }}
                    ></div>
                </div>
            </form>
        </>
    );
}

export default App;
