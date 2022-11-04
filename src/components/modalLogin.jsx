/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Outlet, Link, Router } from "react-router-dom";
import Login from '../components/login';
import Register from '../components/register';


import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {  Nav, Navbar } from 'react-bootstrap'
import NavLogin from './navLogin'

function modalLogin  ({show, onHide})  {

    
  return (
    <><div>
          <Container>
              <Row>
                  <Col>
                      <Modal show={show} onHide={onHide} >
                          <Modal.Header closeButton className='border-0'>

                          </Modal.Header>
                          <Modal.Body className='pb-5'>
                            <Row>
                                <NavLogin></NavLogin>
                                
                                



                            </Row>

                          </Modal.Body>
                          
                      </Modal>
                  </Col>
              </Row>
          </Container>
      </div></>
  )
}
export default modalLogin;