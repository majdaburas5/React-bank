import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Balance from "./Balance";
import "../css/NavBar.css";

export default function NavBar({ balance }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand>
            <Link to="/" className="transaction">
              Transaction
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/operations" className="operations">
              Operations
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/breakDown" className="breakDown">
              Breakdown
            </Link>
          </Navbar.Brand>
        </Nav>
        <Navbar.Brand>
          Balance : <Balance balance={balance} />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
