import Row from "react-bootstrap/Row";
import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";

const Contact = () => {
  return (
     
          <>
    <Container className="d-flex justify-content-center">
      <Row className="col-sm-4">
        <Col>
        <h3>CONTACTATE CON UNO DE NUESTROS VENDEDORES</h3>
        <h5>
          Rubino:
        </h5>
        </Col>
      </Row>
      <Row className="col-sm-10 ">
        <Col className="d-flex justify-content-center">
        <Form className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
            <h3 className="text-end">CONTACTO</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="nombre" placeholder="Nombre" size="lg" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="E-mail" size="lg" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="telefono"
                placeholder="Telefone (com DDD)"
                size="lg" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="ciudad" placeholder="Ciudad" size="lg" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="empresa"
                placeholder="Empresa"
                size="lg" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="cargo" placeholder="Cargo" size="lg" />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Comentarios"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }} />
            </FloatingLabel>
            <div className="d-grid gap-2 pb-3 pt-3">
              <Button variant="dark" className="" size="lg">
                {" "}
                Enviar{" "}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
         
    </>
  );
};
export default Contact;
