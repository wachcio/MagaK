import { useState, useDebugValue } from 'react';

export const useStateWithLabel = (name, initialValue) => {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${name}: ${value}`);
    return [value, setValue];
};

//const [data, setData] = useStateWithLabel('data', []);

export const sortByName = (a, b) => {
    return a.username.localeCompare(b.username);
};
