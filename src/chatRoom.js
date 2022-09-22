import React from "react";
import { Card } from "react-bootstrap";

class ChatRoom extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }} border="primary">
        <Card.Body>
          <Card.Title>chat</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ChatRoom;
