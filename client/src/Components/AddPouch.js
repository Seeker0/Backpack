import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddPouch extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>
          Add Pouch
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New Pouch</ModalHeader>
          <ModalBody>
            <form id="newPouchForm">
              <input
                type="text"
                name="name"
                ref={input => {
                  this.name = input;
                }}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.toggle();
                this.props.newPouch({
                  pouchName: this.name.value,
                  ownerId: this.props.ownerId
                });
              }}
              type="submit"
            >
              Make New Pouch
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

export default AddPouch;
