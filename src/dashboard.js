import React from "react";
import Header from "./header";
import ChatRoom from "./chatRoom";
import { Card, Table, Button } from "react-bootstrap";
import { SocketContext } from "./switch/socket";
import { Navigate } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      inLobby: false,
      lobby: [],
    }
  }

  componentDidMount() {
    let socket = this.context;
    socket.on("gameStatus", status => {
      this.setState({
        chat: status.chat,
      })
    })
    socket.on("recievedLobby", lobby => {
      this.setState({
        lobby: lobby,
        inLobby: lobby.includes(socket.id)
      })
    })
    socket.on("gameStarting", () => {
      this.setState({
        redirect: true
      })
    })
  }

  toggleLobby(socket) {
    socket.emit("toggleLobby", socket.id);
  }

  startGame(socket) {
    socket.emit("startGame")
  }
  
  render() {
    return (
      <>
        {this.state.redirect ? (
          <Navigate to="/gameboard" replace />
        ) : (
          <>
            <div className="coins-background" />
            <Header />
            <div id="dashboard">
              <div style={{
                height:"93vh",
                display:"flex",
                justifyContent:"space-between",
                padding:"1.5rem",
              }}>
                <LobbyTable lobby={this.state.lobby}/>
                <div id="dashboard-middle">
                  <ReadyUp
                    inLobby={this.state.inLobby}
                    toggleLobby={this.toggleLobby}
                    startGame={this.startGame} />
                  <ChatRoom
                    name={"Lobby"}
                    chatMessages={this.state.chat} />
                </div>
              <PostGame />
              </div >
            </div>
          </>
        )}
      </>
    );
  }
}
Dashboard.contextType = SocketContext

class LobbyTable extends React.Component {
  render() {
    const lobby = this.props.lobby;
    return (
      <Card className="panel" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Lobby</Card.Title>
          <Table className="panel">
            <tbody>
              <tr>
                <td>Name</td>
                <td>Status</td>
              </tr>
              {!!lobby && lobby.map(lobbyPlayer => {
                const { id, name } = lobbyPlayer
                return (
                  <tr key={id} > 
                    <td>{name}</td>
                    <td>Ready</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    );
  }
}

class PostGame extends React.Component {
  render() {
    return (
      <Card
        className="panel"
        style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Post Game</Card.Title>
          <Table className="panel">
            <tbody>
              <tr>
                <td>Name</td>
                <td>Time</td>
              </tr>
              <tr>
                <td>Jim</td>
                <td>600 seconds</td>
              </tr>
              <tr>
                <td>Zayah</td>
                <td>760 seconds</td>
              </tr>
              <tr>
                <td>Martha</td>
                <td>1000 seconds</td>
              </tr>
              <tr>
                <td>Hugo</td>
                <td>1300 seconds</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}

class ReadyUp extends React.Component {
  render() {
    return (
      <Card className="panel">
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>Ready Up</Card.Title>
          <div style={{
            display:"flex",
            justifyContent:"space-evenly",
          }}>
            <Button
              onClick={() => this.props.toggleLobby(this.context)}
              variant="primary">
                {this.props.inLobby ? "Leave" : "Join"} Lobby
            </Button>
            <Button
              onClick={() => this.props.startGame(this.context)}
              variant="success">start game
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
ReadyUp.contextType = SocketContext

Dashboard.contextType = SocketContext

export default Dashboard;
