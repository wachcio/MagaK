import React, { useState, useEffect } from 'react';

import './Progressbar.css';

export function Progressbar(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (props.progress < 0) {
            const intervalID = setInterval(() => {
                setProgress((progress) => progress + 1);
            }, 100);
            return () => {
                clearInterval(intervalID);
            };
        }
    }, []);

    useEffect(() => {
        if (progress > 100) setProgress(0);
    }, [progress]);

    return (
        <>
            <div className="prograssBar__wraper">
                {props.progress > 0 ? (
                    <div className="prograssBar__bar" style={{ width: `${props.progress}%` }}>
                        <div className="prograssBar__description">{`${props.progress}%`}</div>
                    </div>
                ) : (
                    <div className="prograssBar__bar" style={{ width: `${progress}%` }}>
                        <div className="prograssBar__description">{`${progress}%`}</div>
                    </div>
                )}
            </div>
        </>
    );
}
