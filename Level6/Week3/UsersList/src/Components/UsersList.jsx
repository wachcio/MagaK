import React, { useEffect } from 'react';
import './UsersList.css';
import { users } from '../usersList';

import { useStateWithLabel } from '../helpers/helpers';

export function UsersList() {
    const [usersList, setUsersList] = useStateWithLabel('usersList', [users]);

    return (
        <>
            <div></div>
        </>
    );
}
