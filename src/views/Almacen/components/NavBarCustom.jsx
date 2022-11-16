import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarCustom = () => {

    

  return (
    <>
        <div className='contenedor'>
            <Navbar bg="white" expand="lg" className='container-fluid'>
                <Container fluid>
                    <Navbar.Brand href="#"><FontAwesomeIcon icon="fa-solid fa-bars" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='container-fluid justify-content-between' id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            
                            />
                            <Button variant="btn btn-primary outline-success ">Search</Button>
                        </Form>
                        
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Usuario</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action3" >
                                <FontAwesomeIcon icon="fa-solid fa-gear" />
                            </Nav.Link>
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
  )
}

export default NavBarCustom;