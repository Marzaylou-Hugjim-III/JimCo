import React from "react";
import { Card, Button } from "react-bootstrap";
import "./readyUp.css";
import { SocketContext } from "./switch/socket";

class ReadyUp extends React.Component {
  render() {
    return (
      <div className="center-flex">
        <Card style={{ width: "18rem" }} border="primary" className="ready">
          <Card.Body>
            <Card.Title>ready up</Card.Title>
            
            <Button
              onClick={() => this.props.toggleLobby(this.context)}
              variant="primary">
                {this.props.inLobby ? "Leave" : "Join"} Lobby
              </Button>

            <Button
              onClick={() => this.props.startGame(this.context)}
              variant="success">start game</Button>
          </Card.Body>
        </Card>
      </div >
    );
  }
}
ReadyUp.contextType = SocketContext

export default ReadyUp;
