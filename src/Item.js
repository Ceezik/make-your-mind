import React, { Component } from 'react';

class Item extends Component {

    state = {
        edited: false,
        text: this.props.text
    }

    //Appeal to the function to delete an item
    removeItem = () => {
        this.props.onRemoveItem(this.props.id)
    }

    editItem = () => {
        if(this.state.edited) {
            this.props.onEditItem(this.state.text, this.props.id)
        }
        this.setState({ edited: !this.state.edited })
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    render() {
        return (
            <li key={this.props.key}>
                <span className="left">
                    {this.state.edited ? <input type="text" value={this.state.text} onChange={this.handleChange} /> : this.props.text}
                </span> 
                <span className="right">
                    <i className={this.state.edited ? "fas fa-save" : "fas fa-pen"} onClick={this.editItem}></i>
                    <i className="fas fa-trash-alt" onClick={this.removeItem}></i>
                </span> 
            </li>
        )
    }
}

export default Item;