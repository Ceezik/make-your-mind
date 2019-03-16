import React, { Component } from 'react';
import Item from './Item.js'
import FlipMove from 'react-flip-move';

class ListItems extends Component {

    render() {
        return (
            <ul>
                <FlipMove>
                    {this.props.items.map(item => (
                        <Item 
                            key={item.id}
                            id={item.id}
                            text={item.text} 
                            onRemoveItem={this.props.onRemoveItem} 
                            onEditItem={this.props.onEditItem} 
                       />
                    ))}
                </FlipMove>
            </ul>
        )
    }
}

export default ListItems;