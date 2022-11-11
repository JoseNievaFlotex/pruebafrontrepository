import Row from "react-bootstrap/Row";
import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";
const Contact = () => {
  return (
     
          <>
    <Container className="d-flex justify-content-center contact-flotex-responsive">
      <Row className="col-sm-4 animate__animated animate__backInLeft">
        <Col>
          <h3 className="text-color-flotex">CONTACTATE CON UNO DE NUESTROS VENDEDORES</h3>
          
          <div className="col-sm-12 row">
            <Image
              src="/img/contact.jpg"
              className=""
            />
          </div>
        </Col>
      </Row>
      <Row className="col-sm-8 animate__animated animate__backInDown animate__delay demo-top-flotex">
        <Col className="d-flex justify-content-center">
        <Form className="col-sm-6 col-md-6 col-lg-8 col-xl-8">
            <h3 className="text-end text-primary text-color-flotex" >CONTACTANOS</h3>
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
              <Button id="btn-flotex" size="lg">
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
