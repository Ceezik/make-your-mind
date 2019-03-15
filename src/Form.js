import React, { Component } from 'react';
import ButtonChoose from './ButtonChoose';

class Form extends Component {

    state = {
        text: "",
        error: ""
    }

    //Put the input's text in the state
    handleInputChanged = (event) => {
        this.setState({ text: event.target.value })
    }

    //Add an item
    addItem = () => {
        if(this.state.text.length > 0) {
            this.props.addItem(this.state.text)
            this.setState({ text: "", error: "" })
        }
        else {
            this.setState({ error: "Please enter an option !" })
        }
    }

    //Choose randomly an item
    handleChooseItem = (event) => {
        event.preventDefault()
        if(this.props.nbItems > 1) {
            this.setState({ error: "" })
            //TODO : Choose randomly an item
        }
        else {
            this.setState({ error: "You need to add some options !" })
        }
            
    }

    render() {
        return (
            <form onSubmit={this.handleChooseItem}>
                <input type="text" className="inputOption" placeholder="Enter an option" value={this.state.text} onChange={this.handleInputChanged} />
                <i onClick={this.addItem} className="fas fa-plus"></i>
                <ButtonChoose nbItems={this.props.nbItems} />
                {this.state.error && <p className="error">{this.state.error}</p>}
            </form>
        )
    }
}

export default Form;