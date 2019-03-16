import React, { Component } from 'react';
import Form from './Form';
import ListItems from './ListItems';

class App extends Component {

  state = {
    lastId: 2,
    items: [
      {id: 0, text: "item 1"},
      {id: 1, text: "item 2"},
      {id: 2, text: "item 3"}
    ]
  }

  //Add an item in the list of items
  addItem = (text) => {
    const newId = this.state.lastId + 1
    const newItem = {id: newId, text: text}
    this.setState({ lastId:newId, items: [...this.state.items, newItem] })
  }

  //Remove an item
  removeItem = (id) => {
    this.setState((prevState) => ({
			items: prevState.items.filter((item) => item.id !== id)
		}))
  } 

  //Edit an item
  editItem = (text, id) => {
    const newItems = this.state.items.slice()
    for(let i = 0; i < newItems.length; i++) {
      if(newItems[i].id === id) {
        newItems[i].text = text
        break
      }
    }
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
