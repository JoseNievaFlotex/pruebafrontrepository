/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import md5 from "md5";

const baseUrl = "https://www.mecallapi.com/api/login";

class login extends Component {
  //const classes = useStyles();
  state = {
    form: {
      username: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
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
            <Button variant="primary"  onClick={ ()=> this.iniciarSesion()}  >
              Login
            </Button>
          </Form>

        </Col>
      </Row>
    </Container>
  );}
}

export default login;
