import React from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Image src="/img/cotton1.jpg" className="publicidad" />
        {/* <Container>

          <Col>
            <Image src="/img/cotton2.jpg" className="public" />
          </Col>
          <Col>
            <Image src="/img/cotton3.jpg" className="public" />
          </Col>
        </Container> */}

        </Row>
      </Container>

      <Container className="p-4 d-flex justify-content-center animate__animated animate__backInLeft animate__delay demo-top-flotex">
        <Row className="col-sm-8">
          <h3 className="text-center">LÍNEA SOSTENIBLE</h3>
          <Image src="https://www.focustextil.com.br/site/assets/img/sustentavel/green-principal-focus-textil.jpg" />
        </Row>
      </Container>
      <Container className="d-flex justify-content-center p-2 animate__animated animate__backInRight animate__delay-2s">
        <Row className="col-12 justify-content-center">
          <div className="col-sm-8 row">
            <Image
              src="https://www.focustextil.com.br/site/assets/img/banner-tecido-personalizado.png"
              className="col-12 img-responsive-unoverso"
            />
          </div>
          <Col className="col-sm-2">
            <h3 className="tejido"> TU UNIVERSO EN TELAS</h3>
          </Col>
        </Row>
      </Container>
      <h2 className="text-center m-4">PROMOCIONES</h2>
      <Container className="galleria col-sm-8 col-md-8 col-lg-8">
        <Row className="col-sm-4 p-1">
          <Image src="/img/Ribest2.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/cataniace1.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/linoest1.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/chalisest2.png" className="efecto" />
        </Row>
      </Container>
      <Container className="galleria col-sm-8 col-md-8 col-lg-8">
        <Row className="col-sm-4 p-1">
          <Image src="/img/chambrayest1.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/interlock1.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/loma2.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/chambrayest2.png" className="efecto" />
        </Row>
      </Container>
    </>
  );
};
export default Home;
