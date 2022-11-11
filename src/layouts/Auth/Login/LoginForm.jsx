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
import loginService from "../../../services/apis/auth";
import localStorage from "../../../services/apis/localStorage";
import useLogin from "./useLogin";
// import userService from '../../../services/users';

const LoginForm = () => {
  const {setCredentials} = useLogin();
 
//   const { isLoading, error, isError, mutateAsync, data } = useMutation(
//     // "login",
//     // loginService,
// //   );
// async (values) => {
//   await mutateAsync({
//     email: values.email,
//     password: values.password,
//   });
// },
//  /* datos en localStorage*/
//   localStorage.guardarAutorizacion(data);
//   /////////////////////////////////////

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: values => setCredentials(values),
    
  });

  return (
    <Container>
      <Row>
        <Col>
          <Form to="#" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Usuario</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Correo"
                autoComplete="email"
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
            <Button
              id="btn-flotex"
              type="submit"
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
