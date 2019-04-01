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

    //Appeal to the function to edit an item
    editItem = () => {
        if(this.state.edited) {
            if(this.state.text) {
                this.props.onEditItem(this.state.text, this.props.id)
                this.setState({ edited: !this.state.edited })
            }
        }
        else 
            this.setState({ edited: !this.state.edited })
    }

    //Check the value of the input to add an item
    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    render() {
        return (
            <li id={this.props.id}>
                <span>
                    {this.state.edited ? <input type="text" className="inputItem" value={this.state.text} onChange={this.handleChange} /> : this.props.text}
                </span> 
                <span>
                    <i className={this.state.edited ? "fas fa-save" : "fas fa-pen"} onClick={this.editItem}></i>
                    <i className="fas fa-trash-alt" onClick={this.removeItem}></i>
                </span> 
            </li>
        )
    }
}

export default Item;