import React, { Component } from 'react';
import Form from './Form';
import ListItems from './ListItems';

class App extends Component {

  state = {
    lastId: 0,
    items: [],
    editable: true
  }

  //Add an item in the list of items
  addItem = (text) => {
    if(this.state.editable) {
      const newId = this.state.lastId + 1
      const newItem = {id: newId, text: text}
      this.setState({ lastId:newId, items: [...this.state.items, newItem] })
    }
  }

  //Remove an item
  removeItem = (id) => {
    if(this.state.editable) {
      this.setState((prevState) => ({
        items: prevState.items.filter((item) => item.id !== id)
      }))
    }
  } 

  //Edit an item
  editItem = (text, id) => {
    if(this.state.editable) {
      const newItems = this.state.items.slice()
      for(let i = 0; i < newItems.length; i++) {
        if(newItems[i].id === id) {
          newItems[i].text = text
          break
        }
      }
      this.setState({ items: newItems })
    }
  }

  //Choose randomly an item
  chooseItem = () => {
    const items = this.state.items
    let i = 0
    let nb = 0
    let interval
    this.setState({editable: false})

    //Animate the choice of an item
    const animate = () => {
      for(let j = 0; j < items.length; ++j) {
        if(j === i) {
          let item = document.getElementById(items[j].id)
          item.className = "active"
          item.style.transition = "transform 0.2s ease"
        }
        else 
          document.getElementById(items[j].id).className = ""
      }
      ++i
      ++nb
      
      if(i > items.length - 1) 
        i = 0
      if(nb >= items.length * 3 + Math.floor(Math.random() * Math.floor(items.length))) {
        clearInterval(interval)
        this.setState({editable: true})
      }
    }

    interval = setInterval(animate, 200)    
  }


  render() {
    return (
      <div className="container">
        <h1>Make your mind</h1>
        <legend>You can't make a choice ? Let hazard do it !</legend>

        <Form 
          addItem={this.addItem} 
          nbItems={this.state.items.length}
          chooseItem={this.chooseItem}
          editable={this.state.editable}
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
