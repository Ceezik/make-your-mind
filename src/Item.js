import React, { Component } from 'react';

class Item extends Component {

    //Appeal to the function to delete an item
    removeItem = () => {
        this.props.onRemoveItem(this.props.id)
    }

    render() {
        return (
            <li key={this.props.key}>
                <span className="left">
                    {this.props.text}
                </span> 
                <span className="right">
                    <i className="fas fa-trash-alt" onClick={this.removeItem}></i>
                </span> 
            </li>
        )
    }
}

export default Item;