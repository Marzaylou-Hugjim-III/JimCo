import React from "react";
// import { Container, Card } from "react-bootstrap";
import LobbyTable from "./lobbyTable";
import ReadyUp from "./readyUp";
import GlobalLeaderboard from "./globalLeaderboard";
import ChatRoom from "./chatRoom";
// import { Container } from "react-bootstrap";
import "./dashboard.css"


class Dashboard extends React.Component {
  render() {
    return (
      <div><h1>dashboard</h1>

        <div className="dashboard">
          <div className="horizon-flex">
            <LobbyTable />


            <div className="verti-flex">
              <ReadyUp />
              <ChatRoom />

            </div>
            <GlobalLeaderboard />

          </div >
        </div>
      </div >

    );
  }
}

export default Dashboard;
