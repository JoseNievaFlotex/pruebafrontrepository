
import { useFormik } from "formik";
import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useMutation } from "react-query";
import loginService from "../../../services/auth";
// import userService from '../../../services/users';

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
  
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
 
  // const [ usertoken,setUser] = useState();
  
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const users = await loginService.login({
  //       email,
  //       password
  //     });

  //     window.localStorage.setItem(
  //       'loggedUser', JSON.stringify(users)
  //     )
  //     console.log(users);
  //     await userService.setToken(users.token)
  //     setUser(users);
  //     setEmail("");
  //     setPassword("");
  //   } catch (error) {
  //     console.error("error");
  //   }
  //   console.log(usertoken);
  // };
  const {isLoading, error, isError, mutateAsync, data } = useMutation(
    "login",
    loginService
  )

  const formik = useFormik({
    initialValues:{ email: '',
      password: ''
    },
    onSubmit: async (values)  => {await mutateAsync
    ({
      email: values.email,
      password: values.password
    })}
    
  })

  console.log(data);
  return (
    <Container>
      <Row>
        <Col>
          <Form to='#' onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Usuario</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
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
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Contraseña"
                required
              />
            </Form.Group>
            <Button id="btn-flotex"	type='submit' 
            //  onSubmit={handleSubmit}
             >
              Acceder
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
