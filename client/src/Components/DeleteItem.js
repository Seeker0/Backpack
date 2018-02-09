import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

class DeleteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <div className="other-button">
          <Button
            color="danger"
            size="sm"
            className="button-font"
            onClick={this.toggle}
          >
            Delete Item
          </Button>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-form"
        >
          <ModalHeader>Delete Item</ModalHeader>
          <p className="extra-padding">
            Are you sure you want to delete this item?
          </p>
          <ModalFooter>
            <Button
              color="danger"
              className="button-font"
              onClick={() => {
                this.props.deleteItem({
                  id: this.props.id,
                  ownerId: this.props.ownerId,
                  pouchId: this.props.pouchId
                });
                this.toggle();
              }}
            >
              Delete Item
            </Button>{" "}
            <Button
              color="secondary"
              className="button-font"
              onClick={this.toggle}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteItem;
