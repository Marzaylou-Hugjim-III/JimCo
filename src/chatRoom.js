import React from "react";
import { Card } from "react-bootstrap";
import "./chatroom.css";


class ChatRoom extends React.Component {
  render() {
    return (
      <div className="flexi-horizon-center">
        <Card className="chatybox">
          <Card.Body>
            <Card.Title>Chat??? Maybe???</Card.Title>
            <Card.Text>
              Chat Box
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ChatRoom;
