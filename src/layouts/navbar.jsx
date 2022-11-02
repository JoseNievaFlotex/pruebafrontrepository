import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import ModalLogin from "../components/modalLogin"

const NavBarExample = () => {
    const[modalLoginShow, setModalLoginShow] = useState(false);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/intranet">
                FLOTEXNET
              </Nav.Link>
              <Image src="/img/lock.png" className="lock" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Row className="col-sm-4 col-md-4 col-lg-12 col-xl-6 col-xxl-4  ">
              <Image src="/img/logo.png" />
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Servicios
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Galleria
              </Nav.Link>
              <Nav.Link as={Link} to="/testimonial">
                Testimonios
              </Nav.Link>
              <Nav.Link as={Link} to="/team">
                Equipo
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Consulta
              </Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Iniciar Sesión" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/" onClick={()=> setModalLoginShow(true)}>
                  Logearse
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  Registrarse
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
      <ModalLogin 
      show={modalLoginShow} onHide={() => setModalLoginShow(false)}
      />
    </>
  );
};
export default NavBarExample;
