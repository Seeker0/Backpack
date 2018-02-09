import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label
} from "reactstrap";

class RenamePouch extends React.Component {
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
            color="warning"
            size="sm"
            className="button-font"
            onClick={this.toggle}
          >
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
              <Label for="name">New Pouch Name:</Label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                size="50"
                ref={input => {
                  this.name = input;
                }}
              />
            </FormGroup>
          </Form>
          <ModalFooter>
            <Button
              color="success"
              className="button-font"
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

export default RenamePouch;
