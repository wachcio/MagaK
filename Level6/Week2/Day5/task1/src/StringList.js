import React, { Component } from 'react';

export class StringList extends Component {
    render() {
        return <h1>{this.props.stringArray.join(', ')}</h1>;
    }
}
