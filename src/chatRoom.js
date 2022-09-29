import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, ListGroup, Form, InputGroup } from "react-bootstrap";
import "./chatroom.css";
import { SocketContext } from "./switch/socket";


class ChatRoom extends React.Component {

  sendMessage(content) {
    const socket = this.context
    socket.emit("chatMessage", this.props.name, content)
  }

  render() {
    const { chatMessages } = this.props
    return (
      <div className="flexi-horizon-center">
        <Card className="chatybox">
          <Card.Title
            style={{
              marginBottom: 0,
              padding: "0.5rem",
            }} >Chat</Card.Title>
          {!!chatMessages && (
            <ListGroup style={{maxHeight:"200px", overflowY:"scroll"}}>
              {chatMessages.map((message, i) => {
                return(
                  <ListGroup.Item
                    style={{backgroundColor: i % 2 === 0 ? "#ffffff" : "#ebebeb"}}
                    key={i}>
                    <b>{message.name}</b>: {message.content}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          )}
          <Card.Footer>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                let value = event.target[0].value
                if(!value) {
                  return;
                }
                console.log(event.target[0].value)
                this.sendMessage(event.target[0].value);
                event.target.reset()
              }
            }>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter Message..."
                  aria-describedby="submit-button"
                />
                <Button
                  variant="primary"
                  type="submit"
                  id="submit-button">
                  Send
                </Button>
              </InputGroup>
            </Form>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
ChatRoom.contextType = SocketContext

export default ChatRoom;
