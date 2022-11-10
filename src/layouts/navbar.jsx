import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";
import ModalLogin from "../components/modalLogin";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import Footer from "./footer";

const NavBarExample = () => {
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const normalLink = {
    color: "red",
  };
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {/* <Navbar bg="dark" variant="dark" >
        <Container className="menu-navbar-flotex ">
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/intranet">
                Intranet
              </Nav.Link>
              <Image src="/img/lock.png" className="lock" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar  expanded={expanded} expand="lg" bg="light" className="menu-navbar-flotex">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Row className="col-sm-10 col-md-4 col-lg-6 col-xl-4 col-xxl-3  ">
              <Image src="/img/logo.png" className="responsive-logo-flotex"/>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '120px' }}
            navbarScroll>
              <NavLink
              onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Home
              </NavLink>
              <NavLink
              onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Nosotros
              </NavLink>

              <NavLink
              onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Galleria
              </NavLink>

              {/* <NavLink
                id="nav-a-flotex"
                as={Link}
                to="/team"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Equipo
              </NavLink> */}
              <NavLink
              onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Contacto
              </NavLink>
              <NavLink
              onClick={() => setExpanded(false)}
                id="nav-a-flotex"
                as={Link}
                to="/consulta"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                }
              >
                Consulta
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                id="nav-a-flotex"
                as={Link}
                to="/login"
                className={({ isActive }) =>
                  isActive ? "bg-nav-flotex" : normalLink
                  
                }
                onClick={() => setModalLoginShow(true)}
              >
                Iniciar Sesión
              </NavLink>

              <NavLink id="nav-a-flotex" as={Link} to="/intranet" target="blank">
                Intranet
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>

      <ModalLogin
        show={modalLoginShow}
        onHide={() => setModalLoginShow(false)}
      />

      <Col>
        <FloatingWhatsApp
          accountName="Flotex"
          chatMessage="Hola te saluda Flotex 😊
                        en que podemos ayudarte"
          placeholder="Escribe un mensaje"
          avatar="/img/Icono-circular.png"
          statusMessage=""
          phoneNumber="+51 936846098"
        />
      </Col>

      <Footer />
    </>
  );
};
export default NavBarExample;