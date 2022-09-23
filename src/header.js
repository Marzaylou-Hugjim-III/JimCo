import React from "react";
import { Card, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import { Container } from "react-bootstrap";
import img from './img/image.png';





class Header extends React.Component {
  render() {
    return (
      <Container>
        <Card border="Primary">
          <Card.Body className="headerCard">
            <Navbar id="navBar">
              <img src={img} alt='JimCo logo' className="logo" />
              <Navbar.Brand id="appName"></Navbar.Brand>
              <Container className="navLinks">
                <NavItem>
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/gameboard" className="nav-link">
                    Gameboard
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/help" className="nav-link">
                    Help
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="#" className="nav-link">
                    Settings
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/aboutus" className="nav-link">
                    About
                  </Link>
                </NavItem>
                <AuthButtons />
              </Container>
            </Navbar >
          </Card.Body >
        </Card >
      </Container>
    );
  }
}
export default Header;

/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton> */
