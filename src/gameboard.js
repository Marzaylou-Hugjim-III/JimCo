import React from "react";
import { Card } from "react-bootstrap";
import Header from "./header";
import { Button } from "react-bootstrap";
import coin from './img/logo.png';
import { SocketContext } from "./switch/socket";
import { Navigate } from "react-router-dom";
import ChatRoom from "./chatRoom";

class Gameboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chat: undefined,
      running: false,
      loading: true,
      gameStatus: null,
      money: 0,
      clickMultiplier: 0,
      autoClicker: 0,
      playerResources: [],
      players: {},
      globalResources: {},
    }
  }

  componentDidMount() {
    let socket = this.context
    socket.on("gameStatus", (status) => {
      const globalResources = status.resources;
      let socket = this.context;
      const ourPlayer = status.players.filter(player => player.id === socket.id)[0]
      const players = status.players.filter(player => player.id !== socket.id)
  
      this.setState({
        chat: status.chat,
        loading: false,
        running: status.running,
        money: ourPlayer.money,
        clickMultiplier: ourPlayer.clickMultiplier,
        autoClicker: ourPlayer.autoClicker,
        playerResources: ourPlayer.playerResources,
        players: players,
        globalResources: globalResources,
      })
    })
    socket.on("moneyChanged", (newAmt) => {
      this.setState({
        money: newAmt,
      })
    })
    socket.on("resourcesChanged", (newPlayerResources) => {
      this.setState({
        playerResources: newPlayerResources,
      })
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

  sellResource(name, amt){
    let socket= this.context;
    socket.emit("sellResource", socket.id, name, amt)
  }

  buyAutoClicker() {
    let socket = this.context;
    socket.emit("buyAutoClicker", socket.id)
  }

  buyMultiplier(){
    let socket = this.context;
    socket.emit("buyMultiplier", socket.id)
  }

  buyAutoResource(name) {
    let socket = this.context;
    console.log("buyAutoResource on frontend");
    socket.emit("buyAutoResource", socket.id, name)
  }

  render() {
    if (this.state.loading) {
      return (
        <>
          <div className="coins-background" />
          <Header />
        </>
      )
    }
    if (!this.state.running) {

      return (
        <Navigate to="/" replace />
      )
    }

    const {
      globalResources,
      playerResources,
      autoClicker,
      clickMultiplier,
      players,
      chat,
    } = this.state

    return (
      <>
        <div className="coins-background" />
        <Header />
        <div
          style={{
            height:"94vh",
            padding:"2rem",
            display:"flex",
            justifyContent:"space-between"
          }}
        >
          <Card className="panel" style={{ width: '22rem' }} >
            <Card.Body >
              <h3>Players</h3>
              <Card.Text>
                {!!players && players.map(player => {
                  return(
                    <div>
                      {player.name}
                    </div>
                  )
                })}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="panel">
            <Card.Footer>
              <h3>Global Resources</h3>
              {!!globalResources && globalResources.map(res => {
                return (
                  <div key={res.name}>
                    {res.name}
                    <br />
                    Quantity: {res.quantity}
                    <br />
                    Price: {res.price}
                    <br />
                  </div>
                )
              })}
            </Card.Footer>
          </Card>
          <div style={{
            flexGrow:1,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-between"
          }}>
            <div />
            <img
              src={coin}
              alt="jimcoin"
              className="jimcoin"
              onClick={() => this.addOneJimCoin()} />
            <ChatRoom
              name={"Lobby"}
              chatMessages={chat}/>
          </div>
          <Card className="panel" style={{flexGrow:1}}>
            <Card.Footer>
              <h3>
                Player Resources
              </h3>
              <h4>JimCoins: {this.state.money}</h4>
              <div className="upgrades-row-flex">
                <div>
                  Auto-Clickers: {autoClicker}
                </div>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    this.buyAutoClicker()
                  }}>
                    +1 
                </Button>
              </div>
              <div className="upgrades-row-flex">
                <div>
                  Click Multipliers: {clickMultiplier}
                </div>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    this.buyMultiplier()
                  }}>
                    +1
                </Button>
              </div>
              {!!playerResources && playerResources.map(res => {
                const globalRes = globalResources.filter(globalRes => {
                  if(globalRes.name === res.name) {
                    return true;
                  }
                  return false;
                })[0]
                const { name, value } = res
                return (
                  <div key={name}>
                    <div className="resourceHeader">
                      You have {value} {name}
                    </div>
                    <Button
                        size="sm"
                          variant="primary"
                          onClick={() => {
                            this.buyAutoResource(name);
                          }}>
                          AutoGenerate {name}
                        </Button>
                    <div className="buysell-col-flex">
                      <div className="buysell-row-flex">
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              this.addResource(name, 1);
                            }}>
                            Buy 1
                          </Button>
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              this.addResource(name, 10);
                            }}>
                            Buy 10
                          </Button>
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              this.addResource(name, 50);
                            }}>
                            Buy 50
                          </Button>
                      </div>
                      <div className="buysell-row-flex">
                        <div className="priceText">
                        {globalRes.price}
                        </div>
                        <div className="priceText">
                          {globalRes.price * 10}
                        </div>
                        <div className="priceText">
                          {globalRes.price * 50}
                        </div>
                      </div>
                      <div className="buysell-row-flex">
                        <Button
                        size="sm"
                          variant="primary"
                          onClick={() => {
                            this.sellResource(name, 1);
                          }}>
                          Sell 1
                        </Button> <Button
                        size="sm"
                          variant="primary"
                          onClick={() => {
                            this.sellResource(name, 10);
                          }}>
                          Sell 10
                        </Button> <Button
                        size="sm"
                          variant="primary"
                          onClick={() => {
                            this.sellResource(name, 50);
                          }}>
                          Sell 50
                        </Button>
                        
                      </div>
                    </div>
                  </div>
                )
              })}
            </Card.Footer>
          </Card>
        </div>
      </>
    )
  }
}
Gameboard.contextType = SocketContext

export default Gameboard;
