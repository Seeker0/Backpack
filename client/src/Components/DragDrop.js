//Make item move from one pouch to another in database
//The same above action should be reflected in state in react
//Visually, it should disappear from one pouch and appear in the other one

import React, { Component } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";

class DragDrop extends Component {
  constructor(props) {
    super(props);
    this.itemsArray = props.currentItems;
  }
  render() {
    let draggableItems = this.itemsArray.map(item => {
      return (
        <Draggable type="item" data={item.link}>
          <li>{item.name}</li>
        </Draggable>
      );
    });
    return (
      <div>
        <ul>
          {/* <Draggable type="fruit" data="banana">
            <li>Banana</li>
          </Draggable>
          <Draggable type="fruit" data="apple">
            <li>Apple</li>
          </Draggable>
          <Draggable type="metal" data="silver">
            <li>Silver</li>
          </Draggable> */}
          {draggableItems}
        </ul>
        <Droppable
          types={["item"]} // <= allowed drop types
          onDrop={this.onDrop.bind(this)}
        >
          <ul className="Smoothie">
            <li>Pouch 1</li>
          </ul>
        </Droppable>
        <Droppable
          types={["item"]} // <= allowed drop types
          onDrop={this.onDrop.bind(this)}
        >
          <ul className="Smoothie">
            <li>Pouch 2</li>
          </ul>
        </Droppable>
      </div>
    );
  }
  onDrop(data) {
    console.log(data);
    // => banana
  }
}

export default DragDrop;
