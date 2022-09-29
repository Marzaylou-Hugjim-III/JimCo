import React from "react";
import { Card } from "react-bootstrap";
import Header from "./header";
import { Button } from "react-bootstrap";
import "./gameboard.css"
import coin from './img/logo.png';
import { SocketContext } from "./switch/socket";
import { Navigate } from "react-router-dom";
import ChatRoom from "./chatRoom";

class Gameboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chat: undefined,
      loading: true,
      gameStatus: null,
    }
  }

  componentDidMount() {
    let socket = this.context
    socket.on("gameStatus", status => {
      this.setState({
        chat: status.chat,
        loading: false,
        gameStatus: status,
      })
    })
    if (this.state.loading) {
      return
    }
    socket.on("moneyChanged", (newAmt) => {
      const player = this.getPlayer();
      player.money = newAmt;
      this.setState({
        gameStatus: this.state.gameStatus,
      })
    })
    socket.on("resourcesChanged", (name, newAmt) => {
      const player = this.getPlayer()
      player.resourceMap[name] = newAmt
      this.instantUpdatePlayer({
        resourceMap: player.resourceMap
      })
    })
  }

  instantUpdatePlayer(patch) {
    const socket = this.context
    if (!this.state.gameStatus.running) {
      return;
    }
    const newGameStatus = this.state.gameStatus
    newGameStatus.players = newGameStatus.players.map(player => {
      if (player.id === socket.id) {
        Object.keys(patch).forEach(key => {
          player[key] = patch[key]
        })
      }
      return player
    })
    this.setState({
      gameStatus: newGameStatus,
    })
  }

  addOneJimCoin() {
    let socket = this.context
    socket.emit("addMoney", socket.id, 1)
  }

  addResource(name, amt) {
    let socket = this.context;
    socket.emit("buyResource", socket.id, name, amt)
  }

  getPlayer() {
    let socket = this.context
    if (!this.state.gameStatus) {
      return null;
    }
    return this.state.gameStatus.players.reduce((acc, player) => {
      if (player.id === socket.id) {
        acc = player
      }
      return acc;
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    const { chat, resources, players, running } = this.state.gameStatus
    const player = this.getPlayer()
    if (!running) {
      return (
        <Navigate to="/" replace />
      )
    }

    return (
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
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <h3>Inventory</h3>
                Your JimCoins: {player.money};
                {player.playerResources.map(res => {
                  const { name, quantity } = res
                  return (
                    <div key={name}>
                      Your {name}: {quantity}
                      <br />
                      <button
                        onClick={() => {
                          this.addResource(name, 1)
                        }}>
                        Buy {name}
                      </button>
                    </div>
                  )
                })}
              </Card.Footer>
              <Card.Footer>
                <h3>JimCo Market</h3>
                {resources.map(res => {
                  return (
                    <div key={res.name}>
                      {res.name} Quantity: {res.quantity}
                      <br />
                      {res.name} Price: {res.price}
                      <br />
                      Buy:
                      <button
                        onClick={() => {
                          this.addResource(res.name, 1)
                        }}>
                        Buy {res.name}
                      </button>
                    </div>
                  )
                })}
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
            <ChatRoom
              name={"Lobby"}
              chatMessages={chat} />
          </div>
        </div>
      </div>
    )
  }
}
Gameboard.contextType = SocketContext

export default Gameboard;
