import React, { Component } from 'react';
import { StringList } from './StringList';

export class Counter extends Component {
    state = {
        counter: [],
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: [...this.state.counter, this.state.counter.length],
            });
        }, 1000);
    }

    render() {
        return <StringList stringArray={this.state.counter} />;
    }
}
