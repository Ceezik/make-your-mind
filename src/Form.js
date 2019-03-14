import React, { Component } from 'react';

class Form extends Component {

    state = {
        text: "",
        error: ""
    }

    //Put the input's text in the state
    handleInputChanged = (event) => {
        this.setState({ text: event.target.value })
    }

    addItem = () => {
        if(this.state.text.length > 0) {
            this.props.addItem(this.state.text)
            this.setState({ text: "", error: "" })
        }
        else {
            this.setState({ error: "Please enter an option !" })
        }
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Enter an option" value={this.state.text} onChange={this.handleInputChanged} />
                <i onClick={this.addItem} className="fas fa-plus"></i>
                {this.state.error && <p className="error">{this.state.error}</p>}
            </form>
        )
    }
}

export default Form;