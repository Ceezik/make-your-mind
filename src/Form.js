import React, { Component } from 'react';
import ButtonChoose from './ButtonChoose';
import { Transition } from 'react-spring/renderprops';

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
            setTimeout(() => this.setState({ error: "" }), 3000)
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
            setTimeout(() => this.setState({ error: "" }), 3000)
        }
            
    }

    render() {
        return (
            <form onSubmit={this.handleChooseItem}>
                <div className="wrapper">
                    <input type="text" className="inputOption" placeholder="Enter an option" value={this.state.text} onChange={this.handleInputChanged} />
                    <i onClick={this.addItem} className="fas fa-plus"></i>

                    <Transition
                        items={this.state.error}
                        from={{ transform: 'translate3d(0,-10px,0)', opacity: 0.25 }}
                        enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                        leave={{ }}>
                        {show => show && (props => 
                            <div className="error" style={props}>{this.state.error}</div>
                        )}
                    </Transition>
                    
                </div>
                
                <ButtonChoose nbItems={this.props.nbItems} />
            </form>
        )
    }
}

export default Form;

