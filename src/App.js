import React, { Component } from 'react';
import Form from './Form';
import ButtonChoose from './ButtonChoose';
import ListItems from './ListItems';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Make your mind !</h1>
        <legend>You can't make a choice ? Let hazard do it</legend>

        <Form />
        <ButtonChoose />

        <ListItems />
      </div>
    );
  }
}

export default App;
