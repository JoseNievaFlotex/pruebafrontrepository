/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import swal from 'sweetalert';
import axios from 'axios';
import md5 from 'md5'


const baseUrl = 'https://www.mecallapi.com/api/login'

 
class login extends Component {

  //const classes = useStyles();

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
    })
    .catch(error=>{
      console.log(error);
    })
  }
  
  render(){
  return (
    <Container>
      <Row>
        <Col>
          <Form className="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Correo" onChange={this.handleChange}/>
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="primary"  onClick={ ()=> this.iniciarSesion()}  >
              Iniciar sesión
            </Button>
          </Form>

        </Col>
      </Row>
    </Container>
  );}
}

export default login;