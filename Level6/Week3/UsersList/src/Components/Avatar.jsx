import React from 'react';
import './Avatar.css';

export function Avatar(props) {
    return (
        <>
            <img className="avatar" src={props.avatar} alt={`Avatar: ${props.username}`} />
        </>
    );
}
