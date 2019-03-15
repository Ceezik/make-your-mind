import React, { Component } from 'react';
import Form from './Form';
import ListItems from './ListItems';

class App extends Component {

  state = {
    items: ['item 1', 'item 2']
  }

  //Add an item in the list of items
  addItem = (text) => {
    this.setState({ items: [...this.state.items, text] })
  }

  //Remove an item
  removeItem = (id) => {
    let newItems = this.state.items.slice()
    newItems.splice(id, 1)
    this.setState({ items: newItems })
  } 

  //Edit an item
  editItem = (text, id) => {
    let newItems = this.state.items.slice()
    newItems[id] = text
    this.setState({ items: newItems })
  }

  render() {
    return (
      <div className="container">
        <h1>Make your mind</h1>
        <legend>You can't make a choice ? Let hazard do it !</legend>

        <Form 
          addItem={this.addItem} 
          nbItems={this.state.items.length}
        />
        

        <ListItems 
          items={this.state.items} 
          onRemoveItem={this.removeItem}
          onEditItem={this.editItem}  
        />
      </div>
    );
  }
}

export default App;
