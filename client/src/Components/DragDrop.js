//Make item move from one pouch to another in database
//The same above action should be reflected in state in react
//Visually, it should disappear from one pouch and appear in the other one

import React, { Component } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";

class DragDrop extends Component {
  constructor(props) {
    super(props);
    this.itemsArray = props.currentItems;
    this.currentPouch = props.currentPouch;
    this.pouches = props.pouches;
  }
  render() {
    let draggableItems = this.itemsArray.map(item => {
      return (
        <Draggable type="item" data={item.link} itemId={item.id}>
          <div className="item-box">
            <h3>{item.name}</h3>
          </div>
        </Draggable>
      );
    });
    let droppableItems = this.pouches.map(pouch => {
      return (
        <Droppable
          types={["item"]} // <= allowed drop types
          onDrop={this.onDrop.bind(this)}
          pouchId={pouch.id}
        >
          <div className="pouch">
            <h3 className="pouch-name">{pouch.name}</h3>
          </div>
        </Droppable>
      );
    });
    return (
      <div>
        <div id="pouch-side-bar">
          <p id="pouch-side-bar-title">Your Pouches</p>
          <div>{droppableItems}</div>
        </div>
        <div className="current-pouch-container">
          <Container>
            <Col xs="12">
              <div className="box1">
                <h1 id="current-pouch-title">{this.currentPouch.name}</h1>
                {this.itemsArray.length > 0 ? (
                  <div>{draggableItems}</div>
                ) : (
                  <div>No Items in this Pouch</div>
                )}
              </div>
            </Col>
          </Container>
        </div>
      </div>
    );
  }
  onDrop(data) {
    console.log(data);
    // => banana
  }
}

export default DragDrop;
