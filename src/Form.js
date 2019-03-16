import React, { Component } from 'react';
import ButtonChoose from './ButtonChoose';
import { Transition } from 'react-spring/renderprops';

class Form extends Component {

    state = {
        text: "",
        errorInputOption: false,
        errorButtonChoose: false
    }

    //Put the input's text in the state
    handleInputChanged = (event) => {
        this.setState({ text: event.target.value })
    }

    //Add an item
    addItem = () => {
        if(this.state.text.length > 0) {
            this.props.addItem(this.state.text)
            this.setState({text: "", errorInputOption: false})
        }
        else {
            setTimeout(() => this.setState({ errorInputOption: false }), 3000)
            this.setState({errorInputOption: true, errorButtonChoose: false})
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
            this.setState({ errorButtonChoose: true, errorInputOption: false })
            setTimeout(() => this.setState({ errorButtonChoose: false }), 3000)
        }
            
    }

    render() {
        return (
            <form onSubmit={this.handleChooseItem}>
                <div className="wrapper">
                    <input type="text" className="inputOption" placeholder="Enter an option" value={this.state.text} onChange={this.handleInputChanged} />
                    <i onClick={this.addItem} className="fas fa-plus"></i>

                    <Transition
                        items={this.state.errorInputOption}
                        from={{ transform: 'translate3d(0,-10px,0)', opacity: 0.25 }}
                        enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                        leave={{ transform: 'translate3d(0,-10px,0)', opacity: 0 }}>
                        {show => show && (props => 
                            <div className="error" style={props}>{"Please enter an option !"}</div>
                        )}
                    </Transition>

                    <Transition
                        items={this.state.errorButtonChoose}
                        from={{ transform: 'translate3d(0,-10px,0)', opacity: 0.25 }}
                        enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                        leave={{ transform: 'translate3d(0,-10px,0)', opacity: 0 }}>
                        {show => show && (props => 
                            <div className="error" style={props}>{"You have to add some options !"}</div>
                        )}
                    </Transition>
                    
                </div>
                
                <ButtonChoose nbItems={this.props.nbItems} />
            </form>
        )
    }
}

export default Form;

