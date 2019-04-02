import React, { Component } from 'react';

class ButtonChoose extends Component {

    handleButtonClick = () => {
        if(this.props.nbItems > 1)
            this.props.chooseItem()
    }

    render() {
        return (
            <div className="inline-block">
                <button className={this.props.nbItems > 1 ? "choose" : "choose disabled"} onClick={this.handleButtonClick}>
                    Choose for me
                </button>
            </div>
        )
    }
}

export default ButtonChoose;