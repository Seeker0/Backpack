import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Form,
  Input
} from "reactstrap";

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
        <Button color="info" size="lg" onClick={this.toggle}>
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
                this.toggle();
                this.props.newPouch({
                  name: this.name.value,
                  ownerId: this.props.ownerId
                });
              }}
            >
              Create Pouch
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
