import { useState } from 'react';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState('');

    return (
        <>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </>
    );
}

export default App;
