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
            <div className="User">
                <Avatar avatar={avatar} username={props.user.username} />
                <div className="User__description">
                    <div className="User__username">{props.user.username}</div>
                    <div className="User__name">
                        <p>
                            {props.user.first_name} {props.user.last_name}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
