import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./aboutus";
import Dashboard from "./dashboard";
import Gameboard from "./gameboard";
import "./styling.css";

const { io } = require("socket.io-client");
const socket = io("ws://localhost:3500");
//const routeMap = new Map();
const { switchboard } = require("./switch/switchboard");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: "",
    };
    socket.on("pong", (message) => {
      console.log("message: ", message);
      switchboard(message);
    });
  }
  componentDidMount() {
    socket.emit("ping", { "route": "example", "id": "test", "intendedReciever": "sender", "payload": { "stuff": "pog" } });
  }
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />

            <Route exact path="/gameboard" element={<Gameboard />} />

            <Route exact path="/aboutus" element={<Aboutus />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export { socket }
export default App;
