import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./aboutus";
import Dashboard from "./dashboard";
import Gameboard from "./gameboard";
import Help from "./help";
import "./styling.css";
import { SocketContext, socket } from "./switch/socket";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: "",
    };
  }

  render() {
    return (
      <>
        <SocketContext.Provider value={socket} >
          <Router>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/gameboard" element={<Gameboard />} />
              <Route exact path="/aboutus" element={<Aboutus />} />
              <Route exact path ="/help" element={<Help />} />
            </Routes>
          </Router>
        </SocketContext.Provider>
      </>
    );
  }
}

export default App;
