import React from 'react';
import './Avatar.css';

export function Avatar(props) {
    return (
        <>
            <img className="Avatar" src={props.avatar} alt={`Avatar: ${props.username}`} />
        </>
    );
}
