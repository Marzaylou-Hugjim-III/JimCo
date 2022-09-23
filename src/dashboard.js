import React from "react";
import { Container, Card } from "react-bootstrap";
import LobbyTable from "./lobbyTable";
import ReadyUp from "./readyUp";
import GlobalLeaderboard from "./globalLeaderboard";
import ChatRoom from "./chatRoom";

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <h1>dashboard</h1>

        <LobbyTable />

        <ReadyUp />

        <GlobalLeaderboard />

        <ChatRoom />
      </Container>
    );
  }
}

export default Dashboard;
