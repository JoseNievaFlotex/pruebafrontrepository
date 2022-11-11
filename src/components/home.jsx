import React from "react";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";


const Home = () => {
  return (
      <><Carousel variant="dark">
      <Carousel.Item>
        <Image
          className=" w-100"
          src="/img/banner/banner-1.png"
          alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className=" w-100"
          src="/img/banner/banner-5.jpg"
          alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className=" w-100"
          src="/img/banner/banner-6.jpg"
          alt="First slide" />
      </Carousel.Item>
    </Carousel><Container className="p-4 d-flex justify-content-center animate__animated animate__backInLeft animate__delay demo-top-flotex">
        <Row className="col-sm-8">
          <h3 className="letter">LÍNEA SOSTENIBLE</h3>
          <Image src="/img/flotexgreen/flotex-green.jpg" />
        </Row>
      </Container><Container className="d-flex justify-content-center p-2 ">
        <Row className="col-12 justify-content-center animate__animated animate__backInUp animate__delay-1s demo-top-flotex">
          <div className="col-sm-8 row">
            <Image src="/img/flotexgreen/VP1.jpg" className=" img-responsive-unoverso" />
          </div>
          <Col className="col-sm-2">
            <h3 className="tejido"> TU UNIVERSO EN TELAS</h3>
          </Col>
        </Row>

      </Container>
      <Container className="d-flex justify-content-center">
        <Row className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <Image  src="/img/prueba/pruebacottom.png"  className="pruebadeface"/>
        </Row>
        

      </Container>
    
      <h2 className="text-center m-4">PROMOCIONES</h2>

      <Container className="galleria col-sm-8 col-md-8 col-lg-8">
        
        <Row className="col-sm-4 p-1">
          <Image src="/img/telas/Ribest2.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/telas/cataniace1.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/telas/linoest1.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/telas/chalisest2.png" className="efecto" />
        </Row>
      </Container><Container className="galleria col-sm-8 col-md-8 col-lg-8">
        <Row className="col-sm-4 p-1">
          <Image src="/img/telas/chambrayest1.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/telas/interlock1.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/telas/loma2.png" className="efecto" />
        </Row>
        <Row className="col-sm-4 p-1">
          <Image src="/img/telas/chambrayest2.png" className="efecto" />
        </Row>
      </Container></>
  );
};
export default Home;
