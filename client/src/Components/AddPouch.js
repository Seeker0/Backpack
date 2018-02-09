import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  Label,
  FormGroup,
  Form
} from "reactstrap";

class AddPouch extends React.Component {
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
        <Button
          color="info"
          size="lg"
          className="button-font"
          onClick={this.toggle}
        >
          New Pouch
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-form"
        >
          <ModalHeader>New Pouch</ModalHeader>
          <Form>
            <FormGroup className="extra-padding">
              <Label for="title">Name:</Label>
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
                this.toggle();
                this.props.newPouch({
                  name: this.name.value,
                  ownerId: this.props.ownerId
                });
              }}
            >
              Create Pouch
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

export default AddPouch;
