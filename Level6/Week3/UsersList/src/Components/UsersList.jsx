import React, { useEffect } from 'react';
import './UsersList.css';
import { users } from '../usersList';

import { useStateWithLabel, sortByName } from '../helpers/helpers';

export function UsersList() {
    const [usersList, setUsersList] = useStateWithLabel('usersList', [
        ...[],
        users.sort(sortByName),
    ]);

    return (
        <>
            <div></div>
        </>
    );
}
