import { useState } from 'react';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState('');
    const [gender, setGender] = useState('M');

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
            </form>
        </>
    );
}

export default App;
