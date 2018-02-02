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
        <Button color="info" size="sm" onClick={this.toggle}>
          New Item
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-form"
        >
          <ModalHeader>New Item</ModalHeader>
          <Form>
            <FormGroup className="extra-padding">
              <Label for="title">Name:</Label>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your new item name here"
                  ref={input => {
                    this.name = input;
                  }}
                />
              </div>
              <Label for="link">Link:</Label>
              <input
                type="text"
                name="link"
                id="link"
                placeholder="enter your new item link here"
                ref={input => {
                  this.link = input;
                }}
              />
            </FormGroup>
          </Form>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => {
                this.toggle();
                this.props.newItem({
                  name: this.name.value,
                  ownerId: this.props.ownerId,
                  link: this.link.value,
                  pouchId: this.props.pouchId
                });
              }}
            >
              Create Item
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
