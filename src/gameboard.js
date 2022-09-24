import React from "react";
import { Card } from "react-bootstrap";
import Header from "./header";
import { Button } from "react-bootstrap";
import "./gameboard.css"
import coin from './img/logo.png';
import { SocketContext } from "./switch/socket";

class Gameboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      money: 0,
      gameInProgress: false
    }
  }

  componentDidMount() {
    let socket = this.context
    socket.on("moneyAdded", (newAmt) => this.moneyAdded(newAmt))
    socket.on("gameStarting", () => this.gameStarting())
  }

  componentWillUnmount() {
    let socket = this.context
    socket.removeListener("moneyAdded", this.moneyAdded)
    socket.removeListener("gameStarting", this.gameStarting)
  }

  gameStarting() {
    this.setState({
      gameInProgress: true
    })
  }

  addOneJimCoin() {
    let socket = this.context
    socket.emit("addMoney", socket.id, 1)
  }

  moneyAdded(newAmt) {
    this.setState({
      money: newAmt
    })
  }

  loadGame() {
    let socket = this.context
    console.log("game started, socket:", )
    socket.emit("joinLobby", socket.id)
    socket.emit("startGame")
  }

  joinLobby() {
    // let socket = this.context
    // socket.emit("joinLobby", socket.id)
  }
  // joinLobby() {
  //   socket.emit("ping", { "route": "joinLobby", "id": socket.id, "intendedReciever": "sender", "payload": {} });
  // }

  // startGame() {
  //   socket.emit("ping", { "route": "startGame", "id": socket.id, "intendedReciever": "sender", "payload": {} });
  // }

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
                  onClick={() => this.loadGame()}
                  variant="secondary">Lobby</Button>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                Game in progress {this.state.gameInProgress ? "true" : "false"}
                <br/>
                Your JimCoins: {this.state.money}
              </Card.Footer>
            </Card>
          </div>
          <div className="flex-horizontal center">
            <img
              src={coin}
              alt="jimcoin"
              className="jimcoin"
              onClick={() => this.addOneJimCoin()} />
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
Gameboard.contextType = SocketContext

export default Gameboard;
