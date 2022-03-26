import React, { useEffect } from 'react';
import './UsersList.css';

import { useStateWithLabel, sortByName } from '../helpers/helpers';
import { User } from './User';

export function UsersList() {
    const [usersList, setUsersList] = useStateWithLabel('usersList', null);

    useEffect(async () => {
        const res = await fetch('https://randomuser.me/api');
        const data = await res.json();
        console.log(data.results);

        setUsersList(data.results);
    }, []);

    return (
        <div className="UsersList">
            {!usersList ? (
                <p>Wczytywanie...</p>
            ) : (
                usersList.map((e, i) => <User user={e} key={`${e.login.uuid}`} />)
            )}
        </div>
    );
}
