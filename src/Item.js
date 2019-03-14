import React, { Component } from 'react';

class Item extends Component {

    render() {
        return (
            <li key={this.props.key}>{this.props.text}</li>
        )
    }
}

export default Item;