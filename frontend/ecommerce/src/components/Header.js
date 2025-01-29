import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Container, Form, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Spice Mark Fashions</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarColor01" />
        <Navbar.Collapse id="navbarColor01">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
            <NavDropdown title="New User?" id="basic-nav-dropdown">
              <LinkContainer to="/login">
                <NavDropdown.Item>Login</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/signup">
                <NavDropdown.Item>Signup</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/logout">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;