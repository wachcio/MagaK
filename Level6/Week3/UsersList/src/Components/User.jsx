import React from 'react';
import './User.css';
import { useStateWithLabel } from '../helpers/helpers';
import { Avatar } from './Avatar';

export function User(props) {
    const [avatar, setAvatar] = useStateWithLabel(
        'avatar',
        `https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`,
    );

    return (
        <>
            <p>
                <Avatar avatar={avatar} username={props.user.username} />
                {props.user.username}: {props.user.first_name} {props.user.last_name}
            </p>
        </>
    );
}
