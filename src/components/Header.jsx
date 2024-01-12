import {Container,  Nav, Navbar} from "react-bootstrap"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Software</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Dashboard</NavLink>
            <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? "#4E81D5" : "#fff", fontWeight: isActive ? "bold" : "normal" })} className="links nav-links">Register Here</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/" className="links nav-links">Log Out</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;