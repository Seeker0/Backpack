import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from "reactstrap";

class RenamePouch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  submit() {
    this.toggle;
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="other-button">
          <Button color="warning" size="sm" onClick={this.toggle}>
            Rename Pouch
          </Button>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-form"
        >
          <ModalHeader>Rename Pouch</ModalHeader>
          <Form>
            <FormGroup className="extra-padding">
              <Label for="title">New Pouch Name:</Label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="enter your new pouch name here"
                ref={input => {
                  this.name = input;
                }}
              />
            </FormGroup>
          </Form>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => {
                this.props.updatePouch({
                  name: this.name.value,
                  id: this.props.id,
                  ownerId: this.props.ownerId
                });
                this.toggle();
              }}
            >
              Rename Pouch
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RenamePouch;
