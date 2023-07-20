"use client";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LoginBtn } from "../home/LoginBtn";
import { SignUpBtn } from "../home/SignUpBtn";
import { useState } from "react";

export default function NavbarBox() {
  useEffect(() => {
    // Enable the Navbar component only on the client-side
    setMounted(true);
  }, []);

  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    return null;
  }

  return (
    <section>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary pb-0"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <Container fluid style={{ backgroundColor: "#f5f5f5" }}>
            <Navbar.Brand href="/">Car Rental</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LoginBtn />
                  <SignUpBtn />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </section>
  );
}
