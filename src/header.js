import React from "react";
import { Card, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import { Container, Image } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Card border="Primary">
        <Card.Body>
          <Navbar id="navBar">
            <Image src="" id="logo" />
            <Navbar.Brand id="appName">JimCo</Navbar.Brand>
            <Container id="navLinks">
              <NavItem>
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
                <Link to="/gameboard" className="nav-link">
                  Gameboard
                </Link>
                <Link to="#" className="nav-link">
                  Help
                </Link>
                <Link to="#" className="nav-link">
                  Settings
                </Link>
                <Link to="/aboutus" className="nav-link">
                  About
                </Link>
              </NavItem>
              <AuthButtons />
            </Container>
          </Navbar>
        </Card.Body>
      </Card>
    );
  }
}
export default Header;

/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton> */
