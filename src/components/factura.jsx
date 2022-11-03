import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import Button  from "react-bootstrap/Button";
import Form  from "react-bootstrap/Form";

import Iframe from 'react-iframe'

const factura = ()  => {
    return(
        <Container>
        <Row className="justify-content-center">
            
            <Col className="col-sm-6">
                <h5 className="text-center">
                        Ingrese los siguientes datos para descargar su comprobante:
                </h5>
                <Form>
                <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                    Tipo Comprobante
                    </Form.Label>
                    <Col sm="6">
                    <Form.Select aria-label="Default select example">
                        <option>Factura</option>
                        <option value="1">Boleta</option>
                        <option value="2">Nota de credito</option>
                        <option value="3">Nota de debito</option>
                        <option value="4">Retencion</option>
                    </Form.Select>
                    </Col>
                    <Col sm="1">
                    <Form.Label column>
                        (*)
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 justify-content-center" controlId="">
                    <Form.Label column sm="4">
                    Serie y Numero
                    </Form.Label>
                    <Col sm="3" className="pb-2">
                    <Form.Control type="password" placeholder="Ejem: F001" />
                    </Col>
                    <Col sm="3">
                    <Form.Control placeholder="Ejem: 2524" />
                    </Col>
                    <Col sm="1">
                    <Form.Label column>
                        (*)
                    </Form.Label>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 justify-content-center" controlId="">
                    <Form.Label column sm="4">
                    Fecha comprobante
                    </Form.Label>
                    <Col sm="6">
                    <Form.Control type="date" placeholder="Fecha comprobante" />
                    </Col>
                    <Col sm="1">
                    <Form.Label column>
                        (*)
                    </Form.Label>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 justify-content-center" controlId="">
                    <Form.Label column sm="4">
                    Monto total
                    </Form.Label>
                    <Col sm="6">
                    <Form.Control type="password" placeholder="Monto total" />
                    </Col>
                    <Col sm="1">
                    <Form.Label column>
                        (*)
                    </Form.Label>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 justify-content-center " controlId="">
                    <Form.Label column sm="4">
                    Ruc emisor
                    (Proveedor)
                    </Form.Label>
                    <Col sm="6">
                    <Form.Control type="password" placeholder="Ingresa RUC emisor del Provedor" />
                    </Col>
                    <Col sm="1">
                    <Form.Label column>
                        (*)
                    </Form.Label>
                    </Col>
                </Form.Group>


                <Form.Group as={Row} className="mb-3 justify-content-center " controlId="">
                    <Form.Label column sm="4">
                    Ruc emisor
                    (Proveedor)
                    </Form.Label>
                    <Col sm="6">
                    {/* <ReCAPTCHA
                        sitekey="6Lc5Y8MiAAAAABVdYHK2xdxdc4t44xTHpVWgAT9h"
                        onChange={onChange}
                    /> */}

                    </Col>
                    <Col sm="1">
                    <Form.Label column>
                        (*)
                    </Form.Label>
                    </Col>
                </Form.Group>
                <Form.Group className="text-center">
                    <Button>Consultar ahora</Button>
                </Form.Group>
                </Form>
            </Col>
        </Row>
        <Row>
            
            <Iframe url="https://facturacion.grupotsiperu.com.pe:8445/grupotsi-web/consultas"
        width="100%"
        height=""
        id=""
        className="vh-100"
        display="block"
        position="relative"/>
        </Row>
      </Container>
    );
};

export default factura;
