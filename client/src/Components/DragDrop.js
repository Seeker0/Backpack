//Make item move from one pouch to another in database
//The same above action should be reflected in state in react
//Visually, it should disappear from one pouch and appear in the other one

import React, { Component } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";
import AddPouchContainer from "../Containers/AddPouchContainer";
import DeleteItem from "./DeleteItem";
import DeletePouchContainer from "../Containers/DeletePouchContainer";
import AddItem from "./AddItem";

const DragDrop = props => {
  let draggableItems = props.currentItems.map(item => {
    return (
      <Draggable type="item" data={item.link} itemid={item._id}>
        <div className="item-box">
          <h3>{item.name}</h3>
          <div>
            <DeleteItem />
          </div>
        </div>
      </Draggable>
    );
  });
  let droppableItems = props.pouches.map(pouch => {
    return (
      <Droppable
        types={["item"]} // <= allowed drop types
        //onDrop={props.onDrop.bind(this)}

        onClick={() => {
          props.setCurrentPouch(pouch._id);
        }}
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
        <div>
          {droppableItems}
          <AddPouchContainer />
        </div>
      </div>
      <div className="current-pouch-container">
        <Container>
          <Col xs="12">
            <div className="box1">
              {props.currentPouch ? (
                <h1 id="current-pouch-title">{props.currentPouch.name}</h1>
              ) : null}
              <DeletePouchContainer />
              {props.currentItems.length > 0 ? (
                <div>{draggableItems}</div>
              ) : (
                <div>No Items in this Pouch</div>
              )}
              <AddItem />
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};
// onDrop(data) {
//   console.log(data);
//   // => banana
// }

export default DragDrop;
