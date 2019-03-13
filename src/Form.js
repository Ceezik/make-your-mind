import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <form>
                <input type="text" placeholder="Enter an option" />
                <i class="fas fa-plus"></i>
            </form>
        )
    }
}

export default Form;