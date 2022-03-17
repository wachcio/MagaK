import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import './InputShowPassword.css';

export function InputShowPassword(props) {
    const [inputType, setInputType] = useState('password');
    const [buttonIcon, setButtonIcon] = useState(faEye);

    const handleOnMouseOver = () => {
        setButtonIcon(faEyeSlash);
        setInputType('text');
    };
    const handleOnMouseLeave = () => {
        setButtonIcon(faEye);
        setInputType('password');
    };

    return (
        <>
            <div className="inputShowPassword__wraper">
                <input className="inputShowPassword__input" type={inputType}></input>
                <div
                    className="inputShowPassword__button"
                    onMouseOver={handleOnMouseOver}
                    onMouseLeave={handleOnMouseLeave}
                >
                    <FontAwesomeIcon icon={buttonIcon} />
                </div>
            </div>
        </>
    );
}
