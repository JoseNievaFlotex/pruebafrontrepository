/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import swal from 'sweetalert';
import axios from 'axios';
import md5 from 'md5'
import Cookies from "universal-cookie";

const baseUrl = 'https://pruebaservice.vercel.app/api/User';
const cookies = new Cookies();
 
class demo6 extends Component {
  state={
    form:{
      username: '',
      password: ''
    }
  }
  

  handleChange= async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  iniciarSesion=async()=>{
    await axios.get(baseUrl, {params: { username: this.state.form.username, password: md5(this.state.form.password)}})
    .then(response=>{
        console.log(response.data);
      return response.data
    })
    .then(response=>{
        if(response.lenght>0){
            var respuesta= response[0];
            cookies.set('idUsuario', respuesta.idUsuario, {path: '/'});
            cookies.set('nombre_usuario', respuesta.nombre_usuario, {path: '/'});
            cookies.set('tipo_usuario', respuesta.tipo_usuario, {path: '/'});
            //alert(`Bienvenido ${respuesta.idUsuario} ${respuesta.tipo_usuario}`)
        }else{
            //alert('El Usuario o la contraseña no son correctos');
        }
    })
    
  }
  
  render(){
  return (
    <Container>
      <Row>
        <Col>
          <div className="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre Usuario</Form.Label>
              <Form.Control type="email" placeholder="Usuario" onChange={this.handleChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out"  />
            </Form.Group>
            <Button variant="primary"  onClick={ ()=> this.iniciarSesion()}  >
              Login
            </Button>
          </div>

        </Col>
      </Row>
    </Container>
  );}
}

export default demo6;