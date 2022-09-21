import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./aboutus";
import Dashboard from "./dashboard";
import Gameboard from "./gameboard";
import Header from "./header";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>

            <Route exact path="/gameboard" element={<Gameboard />} />

            <Route exact path="/aboutus" element={<Aboutus />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
