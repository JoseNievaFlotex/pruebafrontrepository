import Row from "react-bootstrap/Row";
import React from "react";
import ModalLogin from "./modalLogin";
import { Button, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";

const Contact = () => {
  return (
    <div>
      <div id="contact">
        <ModalLogin></ModalLogin>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Row className="col-lg-12 p-1">
                <Image src="/img/showrooms/SHOWROOM6.jpg"  className="contactimage"/>
              </Row>
            </div>
            <div className="col-sm d-flex align-items-center justify-content-center col col-lg-6 ">
              <Form className="col-sm-12">
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
                    size="lg"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="ciudad" placeholder="Ciudad" size="lg" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="empresa"
                    placeholder="Empresa"
                    size="lg"
                  />
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
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <div className="d-grid gap-2 pb-3 pt-3">
                  <Button variant="dark" className="color-btn-flotex" size="lg">
                    {" "}
                    Enviar{" "}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
