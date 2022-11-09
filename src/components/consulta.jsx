import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";

import Iframe from "react-iframe";
import { useState } from "react";

const Factura = () => {
    const {data, url} = useState();
  return (
    <Container>
      <Row className="pt-5">
      { <Iframe /> ? (

            <Iframe
            url="https://facturacion.grupotsiperu.com.pe:8445/grupotsi-web/consultas"
            width="100%"
            height="100%"
            id="iframe-flotex-responsive"
            className="vh-100 "
            display="block"
            position="relative"
            scrolling="no"
            data={url}
            />

        ) : (

        <div>Cargando..</div>

        )}
        
      </Row>
    </Container>
  );
};

export default Factura;
