import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import ModalLogin from "../components/modalLogin"

import Footer from "./footer";


const NavBarExample = () => {
    const[modalLoginShow, setModalLoginShow] = useState(false);
    const normalLink = {
      color: "red"
    };


  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container className="menu-navbar-flotex ">
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link  as={Link} to="/intranet">
                Intranet
              </Nav.Link>
              <Image src="/img/lock.png" className="lock" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="light" className="menu-navbar-flotex">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Row className="col-sm-4 col-md-4 col-lg-12 col-xl-6 col-xxl-4  ">
              <Image src="/img/logo.png" />
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <NavLink id="nav-a-flotex" as={Link} to="/" className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }>
                Home
              </NavLink>
              <NavLink id="nav-a-flotex" as={Link} to="/about" className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }>
                Nosotros
              </NavLink>
              
              <NavLink id="nav-a-flotex" as={Link}  to="/gallery"  className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }>
                Galleria
              </NavLink>
              
              <NavLink id="nav-a-flotex" as={Link} to="/team" className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }>
                Equipo
              </NavLink>
              <NavLink id="nav-a-flotex" as={Link} to="/contact" className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }>
                Contacto
              </NavLink>
              <NavLink id="nav-a-flotex" as={Link} to="/consulta" className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }>
                Consulta
              </NavLink>
            </Nav>
            <Nav>
              <NavDropdown title="Iniciar Sesión" id="collasible-nav-dropdown" onClick={()=> setModalLoginShow(true)}>
                
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


      <Footer />

    </>
  );
};
export default NavBarExample;
