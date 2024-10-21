import "./Navigation.css";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="md" data-bs-theme="dark" bg="dark" className="p-3">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      {/* Hamburger button below */}
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="text-center">

          <Link to="/bootstrap" className="nav-link">
            About Me
          </Link>
          <Link to="/routing" className="nav-link">
            Resume
          </Link>
          <Link to="/counter" className="nav-link">
            Counter
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
