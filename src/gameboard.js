import React from "react";
import { Card } from "react-bootstrap";
import Header from "./header";
import { Button } from "react-bootstrap";
import "./gameboard.css"
import { socket } from "./App";
import coin from './img/logo.png';

class Gameboard extends React.Component {

  joinLobby() {
    socket.emit("ping", { "route": "joinLobby", "id": socket.id, "intendedReciever": "sender", "payload": {} });
  }

  startGame() {
    socket.emit("ping", { "route": "startGame", "id": socket.id, "intendedReciever": "sender", "payload": {} });
  }

  addOneJimCoin() {
    socket.emit("ping", { "route": "addMoney", "id": socket.id, "intendedReciever": "sender", "payload": { amt: 1 } });
  }

  render() {
    return (
    <>
      <div className="gamecontainer">
        <Header />
        <div className="flex-vertical">
          <div className="flex-horizontal">
            <Card style={{ width: '18rem' }} >
              <Card.Body >
                <Card.Title>List of Players Ready</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>JimCo Currency</Card.Title>
                <Card.Text>
                  Section about JimCo Currency
                <Button
                  onClick={() => this.addOneJimCoin()}
                  variant="primary">Buy JimCo Currency</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="flex-horizontal center">
            <img src={coin} alt="jimcoin" className="jimcoin" />
          </div>
          <div className="flex-horizontal center">
            <Card className="chatbox">
              <Card.Body>
                <Card.Title>Chat??? Maybe???</Card.Title>
                <Card.Text>
                  Chat Box
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default Gameboard;
