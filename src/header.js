import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div
        className="panel"
        id="header">
        <div>
          <div id="appName">
            <img
              src={logo}
              alt="JimCo logo"
              className="logo d-inline-block align-top"
              style={{
                height:"4rem",
                width:"4rem"
              }}
            />
          </div>
        </div>
        <div>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </div>
        <div>
          <Link to="/gameboard" className="nav-link">
            Gameboard
          </Link>
        </div>
        <div>
          <Link to="/help" className="nav-link">
            Help
          </Link>
        </div>
        <div>
          <Link to="/aboutus" className="nav-link">
            About
          </Link>
        </div>
      </div>
    );
  }
}
export default Header;
