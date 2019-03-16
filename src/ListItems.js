import React, { Component } from 'react';
import Item from './Item.js'
import { Transition } from 'react-spring/renderprops';

class ListItems extends Component {

    render() {
        return (
            <ul>
                <Transition
                    items={this.props.items} 
                    keys={(item,index) => index}
                    from={{ transform: 'translate3d(-30%,0,0)', opacity: 0}}
                    enter={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
                    leave={{ transform: 'translate3d(30%,0,0)', opacity: 0 }}>
                    {item => props => <Item 
                                        key={item.id}
                                        id={item.id}
                                        style={props}
                                        text={item.text} 
                                        onRemoveItem={this.props.onRemoveItem} 
                                        onEditItem={this.props.onEditItem} 
                                       />
                    }
                </Transition>
            </ul>
        )
    }
}

export default ListItems;