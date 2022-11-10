import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import React from "react";

const About = () => {
  return (
    <>
      <Row className="exposicion">
        <video
          src="https:\/\/adar.com.br\/wp-content\/uploads\/2020\/01\/Grupo-Adar_2.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
          poster="/img/banner-1.png"
        ></video>
        <Container className="col-sm-8 p-5">
          <h1 className="m-5 text-center display-1"> FLOTEX</h1>
          <span className=" m-3 text-center">
            O Grupo, composto pelas empresas Adar, Artec e Texliving, atua em
            diferentes segmentos do mercado têxtil sendo hoje um dos maiores e
            ma is completos do Brasil. Cada marca possui as características
            necessárias para atender cada mercado de forma personalizada.
            Juntos, o grupo oferece produtos de alta qualidade, importados e
            nacionais, que atendem tanto o mercado da moda, quanto o da
            decoração. Uma equipe treinada de representantes atende clientes em
            todo território nacional, oferecendo o melhor mix de p rodutos para
            cada região.
          </span>
        </Container>
        <Container className="d-flex justify-content-center ">
          <Row className="p-2">
          <object data='https://www.youtube.com/embed/H6yVQE7jumo?autoplay=1&mute=1&enablejsapi=1allow="autoplay;encrypted-media' 
            width='560px' height='315px'> </object>
          </Row>
        </Container>
        {""}
        <Container className=" bg-dark text-light fluid col-sm-10">
          <h1 className="m-5 text-center "> IMPORTACIONES</h1>
          <Row className="banner">
            <Col>
              <Image
                className="logoempresa"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
              />
              <h5 className="text-center p-3">
                {" "}
                Importadora Têxtil Tecidos planos e malhas Moda feminina,
                masculina, home e pet
              </h5>
            </Col>
            <Col>
              <Image
                className="logoempresa"
                src="https://i.pinimg.com/originals/f0/dd/ec/f0ddec76cda8ee2756e663924856f81e.png"
              />
              <h5 className="text-center p-3">
                {" "}
                Indústria Nacional Malharia, Estamparia, Tinturaria Moda
                feminina e masculina{" "}
              </h5>
            </Col>
            <Col>
              <Image
                className="logoempresa"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/480px-Wikimedia-logo.png"
              />
              <h5 className="text-center p-3">
                {" "}
                Importadora Têxtil Tecidos planos e malha Decoração
                (móveis/colchões) e calçados
              </h5>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="banner"></Row>
    </>
  );
};
export default About;
