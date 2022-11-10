import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import React from "react";

const About = () => {
  return (
    <>
      <Container>
        <Row >
        <iframe className="elementor"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="SLIDER CLADD NUEVO"
            src="https://www.youtube.com/embed/JXDahVfZY6U?autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.cladd.com.ar&amp;widgetid=1"
            id="widget2"
            
          ></iframe>
        </Row>
      </Container>
      <Container className="text-center">
        <Row >
          <h1 > FLOTEX</h1>
          <h5  >
            O Grupo, composto pelas empresas Adar, Artec e Texliving, atua em
            diferentes segmentos do mercado têxtil sendo hoje um dos maiores e
            ma is completos do Brasil. Cada marca possui as características
            necessárias para atender cada mercado de forma personalizada.
            Juntos, o grupo oferece produtos de alta qualidade, importados e
            nacionais, que atendem tanto o mercado da moda, quanto o da
            decoração. Uma equipe treinada de representantes atende clientes em
            todo território nacional, oferecendo o melhor mix de p rodutos para
            cada região.
          </h5>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center ">
        <Row className="p-2">
          <iframe
            class="elementor-background-video-embed"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="SLIDER CLADD NUEVO"
            src="https://www.youtube.com/embed/9dU8k63hboI?autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.cladd.com.ar&amp;widgetid=1"
            id="widget2"
            style={{ width: "1000px", height: "549px" }}
          ></iframe>
        </Row>
      </Container>
      {""}
      <Container className=" bg-dark text-light fluid col-sm-6 col-md-8 col-md-10 ">
        <h3 className="m-5 text-center "> Nuestros Valores</h3>
        <Row className="banner">
          <Col>
            <Image
              className="logoempresa"
              src="https://paistextil.com/wp-content/uploads/2020/09/Grupo-41-1.svg"
            />
            <h5 className="text-center p-3">
              {" "}
              Creemos en la calidad que se logra en producciones textiles.
            </h5>
          </Col>
          <Col>
            <Image
              className="logoempresa"
              src="https://paistextil.com/wp-content/uploads/2020/09/Grupo-37.svg"
            />
            <h5 className="text-center p-3">
              {" "}
              Capacitamos a nuestro equipo y ayudamos a mejorar la calidad de la
              atención para que tengan mayor valor comercial{" "}
            </h5>
          </Col>
          <Col>
            <Image
              className="logoempresa"
              src="https://paistextil.com/wp-content/uploads/2020/09/Grupo-42.svg"
            />
            <h5 className="text-center p-3">
              {" "}
              Empoderamos mujeres. Más del 50% de nuestro equipo está conformado
              por mujeres.
            </h5>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};
export default About;
