import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Image } from "react-bootstrap";
import React from "react";

const About = (props) => {
  return (
    <Row >
      <Image
          className="d-block w-100"
          src="/img/banner-1.png"
          alt="First slide"
        />
        <Container className="col-sm-8">
     <h1 className="m-5 text-center display-1"> FLOTEX</h1>
     <span className="m-3 text-center">
     O Grupo, composto pelas empresas Adar, Artec e Texliving, atua em diferentes segmentos do mercado têxtil sendo hoje um dos maiores e mais completos do Brasil. Cada marca possui as características necessárias para atender cada mercado de forma personalizada. Juntos, o grupo oferece produtos de alta qualidade, importados e nacionais, que atendem tanto o mercado da moda, quanto o da decoração.

Uma equipe treinada de representantes atende clientes em todo território nacional, oferecendo o melhor mix de produtos para cada região.
     </span>

        </Container>
    </Row>
  );
};
export default About