import React from "react";
import { Carousel, Image } from "react-bootstrap";

const Home = () => {
  return (
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
          <h2 className="">Calidad e Innovación Textíl</h2>
    
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Home;
