
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import loginService from "../../../services/auth";
import userService from '../../../services/users';

const LoginForm = () => {

  // useEffect(() => {
  //   const loggerUserKson = window.localStorage.getItem('loggedUser')
  //   if(loggerUserKson)
  //   {
  //     const usr = JSON.parse(loggerUserKson)
  //     setUser(usr)
  //     userService.setToken(usr.token)
  //   }
  // })
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [ setUser] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const users = await loginService.login({
        email,
        password
      });

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(users)
      )
      console.log(users);
      userService.setToken(users.token)
      setUser(users);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("error");
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Usuario</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={({ target }) => setEmail(target.value)}
                value={email}
                placeholder="Correo"
                autoComplete='email'
                required
                autoFocus
              />
            </Form.Group>
           
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                placeholder="Contraseña"
                required
              />
            </Form.Group>
            <Button 	type='submit' >
              Acceder
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
