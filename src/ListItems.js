import React, { Component } from 'react';
import Item from './Item.js'

class ListItems extends Component {

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => {
                    return (
                        <Item 
                            key={index}
                            id={index}
                            text={item} 
                            onRemoveItem={this.props.onRemoveItem} 
                            onEditItem={this.props.onEditItem} 
                        />
                    )
                })}
            </ul>
        )
    }
}

export default ListItems;