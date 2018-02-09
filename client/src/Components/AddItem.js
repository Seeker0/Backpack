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
        <div className="other-button">
          <Button
            color="info"
            size="sm"
            className="button-font"
            onClick={this.toggle}
          >
            New Item
          </Button>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-form"
        >
          <ModalHeader>New Item</ModalHeader>
          <Form className="extra-padding">
            <FormGroup>
              <Label for="name">Name: </Label>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  size="50"
                  ref={input => {
                    this.name = input;
                  }}
                />
              </div>
              <br />
              <Label for="link">Link: </Label>
              <br />
              <input
                type="text"
                name="link"
                id="link"
                size="50"
                ref={input => {
                  this.link = input;
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
