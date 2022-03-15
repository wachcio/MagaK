import React, { Component } from 'react';

export class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
    };
    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString(),
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <h2>{this.state.time}</h2> */}
                <h2>{this.state.date}</h2>
            </div>
        );
    }
}
