import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import { Progressbar } from './Progressbar';

ReactDOM.render(
    <React.StrictMode>
        <Progressbar progress={0} />
        <Progressbar progress={50} />
        <Progressbar progress={100} />
        <Progressbar progress={-1} />
    </React.StrictMode>,
    document.getElementById('root'),
);
