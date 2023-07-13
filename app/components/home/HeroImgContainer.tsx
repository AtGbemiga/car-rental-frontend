"use client";

import Image from "next/image";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import { LoginBtn } from "./LoginBtn";
import { SignUpBtn } from "./SignUpBtn";

export default function HeroImgContainer() {
  return (
    <section className="position-relative">
      <>
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary pb-0"
          >
            <Container fluid>
              <Navbar.Brand href="/">Car Rental</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
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
      </>
      <div className="position-relative">
        <Image
          src="/heroImg.png"
          alt="Hero image"
          fill={true}
          priority={true}
          style={{ objectFit: "contain" }}
          className="d-none d-sm-block"
        />
        <div
          className="d-flex align-items-center ps-lg-5 ps-md-5 ps-sm-3 ps-xs-2"
          style={{ height: "70vh" }}
        >
          <div className=" bg-transparent text-dark position-relative text-start col-lg-6 col-md-6 col-sm-6 ps-sm-4">
            <h1 className="col-lg-12 col-md-12 bg-transparent">
              Rental Cars On Demand Delivered To Your Door.
            </h1>
            <h5 className="col-lg-12 bg-transparent text-bold ">
              No lines, no paperwork, no refueling on return. <br /> Fully
              flexible.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
