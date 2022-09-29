import React from "react";
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import logo from "./img/logo.png";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" id="navBar" className="mb-3" expand="lg">
        <Container>
          <Navbar.Brand id="appName">
            <img
              src={logo}
              alt="JimCo logo"
              className="logo d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>

        <Nav className="me-auto">
          <NavDropdown title="Menu" menuVariant="dark">
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
              <Link to="/aboutus" className="nav-link">
                About
              </Link>
            </NavItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
export default Header;
