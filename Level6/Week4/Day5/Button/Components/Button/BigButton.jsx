import React from 'react';
import { Button } from './Button';

export function BigButton(props) {
    return (
        <>
            <Button size="XL">{props.children}</Button>
        </>
    );
}
