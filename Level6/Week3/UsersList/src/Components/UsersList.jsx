import React, { useEffect } from 'react';
import './UsersList.css';
import { users } from '../usersList';

import { useStateWithLabel, sortByName } from '../helpers/helpers';
import { User } from './User';

export function UsersList() {
    const [usersList, setUsersList] = useStateWithLabel(
        'usersList',
        [...[], users.sort(sortByName)][0],
    );

    return (
        <>
            {usersList.map((e, i) => (
                <User user={e} key={`${e.phone_number}${e.birthdate}`} />
            ))}
        </>
    );
}
