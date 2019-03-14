import React, { Component } from 'react';
import Item from './Item.js'

class ListItems extends Component {

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => {
                    return (
                        <Item key={index} text={item} />
                    )
                })}
            </ul>
        )
    }
}

export default ListItems;