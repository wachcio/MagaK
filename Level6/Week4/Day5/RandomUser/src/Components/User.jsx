import React from 'react';
import './User.css';
import { useStateWithLabel } from '../helpers/helpers';
import { Avatar } from './Avatar';

export function User(props) {
    return (
        <>
            <div className="User">
                <Avatar
                    avatar={props.user.picture.thumbnail}
                    username={`${props.user.name.first} ${props.user.name.last}`}
                />
                <div className="User__description">
                    <div className="User__title">{props.user.name.title}</div>
                    <div className="User__name">
                        {props.user.name.first} {props.user.name.last}
                    </div>
                </div>
            </div>
        </>
    );
}
