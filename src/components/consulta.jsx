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
        
            <Row className="pt-5">
                
                <Iframe url="https://facturacion.grupotsiperu.com.pe:8445/grupotsi-web/consultas"
            width="100%"
            height="100%"
            id="iframe-flotex-responsive"
            className="vh-100 "
            display="block"
            position="relative"
            scrolling="no"
            />
            </Row>
      </Container>
    );
};

export default factura;