// //Make item move from one pouch to another in database
// //The same above action should be reflected in state in react
// //Visually, it should disappear from one pouch and appear in the other one
//
import React, { Component } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";
import AddPouchContainer from "../Containers/AddPouchContainer";
import DeleteItemContainer from "../Containers/DeleteItemContainer";
import DeletePouchContainer from "../Containers/DeletePouchContainer";
import AddItemContainer from "../Containers/AddItemContainer";
import RenamePouchContainer from "../Containers/RenamePouchContainer";

const DragDrop = props => {
  const {
    pouches,
    currentItems,
    currentPouch,
    setCurrentPouch,
    getUser,
    onDragLeave,
    onDrop,
    onDragEnd
  } = props;
  let draggableItems = props.currentItems.map(item => {
    return (
      <Draggable
        type="item"
        data={item}
        itemid={item._id}
        onDragEnd={onDragEnd(
          item._id,
          props.currentPouch._id,
          props.getUser._id
        )}
      >
        <div className="item-box">
          <h3>{item.name}</h3>
          <h3>{item.link}</h3>
          <div>
            <DeleteItemContainer itemid={item._id} />
          </div>
        </div>
      </Draggable>
    );
  });
  let droppableItems = props.pouches.map(pouch => {
    return (
      <Droppable
        types={["item"]} // <= allowed drop types
        onDrop={props.onDrop.bind(this, pouch._id)}
        //onDrop={() => onDrop()}
        key={pouch._id}
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
            <div className="box1 item-box">
              {props.currentPouch ? (
                <h1 id="current-pouch-title">{props.currentPouch.name}</h1>
              ) : null}
              <div className="edit-buttons">
                <RenamePouchContainer />
                <DeletePouchContainer />
              </div>
              {props.currentItems.length > 0 ? (
                <div>{draggableItems}</div>
              ) : (
                <div>No Items in this Pouch</div>
              )}
              <AddItemContainer />
            </div>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default DragDrop;
