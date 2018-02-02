import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class DeletePouch extends React.Component {
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
          <Button color="danger" size="sm" onClick={this.toggle}>
            Delete Pouch
          </Button>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-form"
        >
          <ModalHeader>Delete Pouch</ModalHeader>
          <p className="extra-padding">
            Are you sure you want to delete this pouch and all its items?
          </p>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => {
                this.props.deletePouch({
                  id: this.props.id,
                  ownerId: this.props.ownerId
                });
              }}
            >
              Delete Pouch
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

export default DeletePouch;
