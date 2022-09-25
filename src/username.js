import React from 'react';
import { Form, Col, Button, InputGroup, Row } from 'react-bootstrap';
import { socket, SocketContext } from "./switch/socket";


class Username extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('nameChange', { id: socket.id, name: event.target[0].value });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="Update Username" />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form >
    );
  }
}
Username.contextType = SocketContext

export default Username;