import React from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/img/banner-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="display-1">Flotex</h1>
            <h2 className="">Calidad e Innovación Textíl</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/img/banner-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="display-1">Flotex</h1>
            <h2 className="">Calidad e Innovación Textil</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/img/banner-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="display-1">Flotex</h1>
            <h2 className="">Calidad e Innovación Textíl</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
      <Container className="p-4 d-flex justify-content-center animate__animated animate__backInLeft animate__delay demo-top-flotex">
        <Row className="col-sm-8">
          <h3 className="letter">LÍNEA SOSTENIBLE</h3>
          <Image src="/img/flotex-green.jpg" />
        </Row>
      </Container>
      <Container className="d-flex justify-content-center p-2 animate__animated animate__backInRight animate__delay-1s">
        <Row className="col-12 justify-content-center">
          <div className="col-sm-8 row">

            <Image
              src="/img/VP1.jpg"
              className=" img-responsive-unoverso"
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
