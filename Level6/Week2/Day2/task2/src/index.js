import React from 'react';
import ReactDOM from 'react-dom';

import UserList from './UserList';
import reportWebVitals from './reportWebVitals';

const userList = [
    { name: 'Asia', email: 'asia55665@gmail.com' },
    { name: 'Jacek', email: 'j5343ffgs@gmail.com' },
    { name: 'Basia', email: 'barbara77266363@gmail.com' },
    { name: 'Janek', email: 'j23@gmail.com' },
    { name: 'Marcin', email: 'marcin88377382u@gmail.com' },
    { name: 'Wojtek', email: 'wojt@gmail.com' },
    { name: 'Krzyś', email: 'kris3344422sws@gmail.com' },
];

ReactDOM.render(
    <React.StrictMode>
        <UserList userList={userList} />
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
