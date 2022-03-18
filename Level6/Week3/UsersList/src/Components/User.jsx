import React, { useEffect } from 'react';
import './User.css';

export function User(props) {
    return (
        <>
            <p>
                {props.user.username}: {props.user.first_name} {props.user.last_name}
            </p>
        </>
    );
}
