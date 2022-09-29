import React from "react";
import LobbyTable from "./lobbyTable";
import ReadyUp from "./readyUp";
import GlobalLeaderboard from "./globalLeaderboard";
import ChatRoom from "./chatRoom";
import "./dashboard.css"
import { SocketContext } from "./switch/socket";
import { Navigate } from "react-router-dom";
const Chance = require("chance");
const chance = new Chance();

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
    let socket = this.context
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
    let name = chance.animal();
    console.log("socket.id and name", socket.id, name);
    socket.emit("toggleLobby", socket.id, name);
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
          <div><h1>dashboard</h1>
            <div className="dashboard">
              <div className="horizon-flex">
                <LobbyTable lobby={this.state.lobby}/>
                <div className="verti-flex">
                  <ReadyUp
                    inLobby={this.state.inLobby}
                    toggleLobby={this.toggleLobby}
                    startGame={this.startGame} />
                  <ChatRoom
                    name={"Lobby"}
                    chatMessages={this.state.chat} />
                </div>
                <GlobalLeaderboard />
              </div >
            </div>
          </div >
        )}
      </>
    );
  }
}
Dashboard.contextType = SocketContext


export default Dashboard;
