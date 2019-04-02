import React, { Component } from 'react';
import ButtonChoose from './ButtonChoose';
import FlipMove from 'react-flip-move';

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

    handleMaxLength = (event) => {
        if(event.target.value.length >= event.target.getAttribute('maxlength')) 
            return false
    }

    //Add an item
    addItem = () => {
        if(this.state.text.length > 0) {
            if(this.props.editable) {
                this.props.addItem(this.state.text)
                this.setState({text: "", errorInputOption: false})
            }
        }
        else {
            setTimeout(() => this.setState({ errorInputOption: false }), 3500)
            this.setState({errorInputOption: true, errorButtonChoose: false})
        }
    }

    //Choose randomly an item
    handleChooseItem = (event) => {
        event.preventDefault()
        if(this.props.nbItems > 1) {
            this.setState({ error: "" })
        }
        else {
            this.setState({ errorButtonChoose: true, errorInputOption: false })
            setTimeout(() => this.setState({ errorButtonChoose: false }), 3500)
        }
            
    }

    render() {
        return (
            <form onSubmit={this.handleChooseItem}>
                <div className="wrapper">
                    <input type="text" className="inputOption" placeholder="Enter an option" value={this.state.text} onChange={this.handleInputChanged} maxLength="30" onKeyPress={this.handleMaxLength} />
                    <i onClick={this.addItem} className="fas fa-plus"></i>

                    <FlipMove 
                        duration={450}
                        easing={"ease"}
                        enterAnimation={{
                        from: {
                            transform: 'translateY(-60px)',
                            opacity: 0,
                        },
                        to: {
                            transform: '',
                        },
                        }}
                        leaveAnimation={{
                        from: {
                            transform: '',
                        },
                        to: {
                            transform: 'translateY(-60px)',
                            opacity: 0,
                        },
                        }}
                    >
                        {this.state.errorInputOption && <div className="error">{"Please enter an option !"}</div>}
                    </FlipMove>

                    <FlipMove 
                        duration={550}
                        easing={"ease"}
                        enterAnimation={{
                        from: {
                            transform: 'translateY(-60px)',
                            opacity: 0,
                        },
                        to: {
                            transform: '',
                        },
                        }}
                        leaveAnimation={{
                        from: {
                            transform: '',
                        },
                        to: {
                            transform: 'translateY(-60px)',
                            opacity: 0,
                        },
                        }}
                    >
                        {this.state.errorButtonChoose && <div className="error">{"You have to add some options !"}</div>}
                    </FlipMove>
                    
                </div>
                
                <ButtonChoose 
                    nbItems={this.props.nbItems}
                    chooseItem={this.props.chooseItem}
                />
            </form>
        )
    }
}

export default Form;
