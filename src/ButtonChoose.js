import React, { Component } from 'react';

class ButtonChoose extends Component {

    render() {
        return (
            <span>
                <button className={this.props.nbItems > 1 ? "choose" : "choose disabled"} onClick={this.props.chooseItem}>
                    Choose for me
                </button>
            </span>
        )
    }
}

export default ButtonChoose;