import React from 'react';
import './Button.css';

export function Button(props) {
    const size = () => {
        switch (props.size) {
            case 'S':
                return '10px';
                break;
            case 'M':
                return '20px';
                break;
            case 'L':
                return '30px';
                break;
            case 'XL':
                return '40px';
                break;
            default:
                return '10px';
        }
    };

    return <button style={{ padding: size() }}>{props.children}</button>;
}
