import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Button, Form, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="dk-footer" className="dk-footer">
      <Container>
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="dk-footer-box-info">
              <a href="index.html" className="footer-logo">
              <Image src="/img/logo.png" width={"200px"} height={"50px"} />
              </a>
              <p className="footer-info-text text-light">
                
              </p>
              <div className="footer-social-link">
                <h3>Síguenos en nuestras Redes</h3>
                <ul>
                  <li className="p-2">
                    <a href="/log.png">
                        <Image src="/img/facebook.png" />
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="/log.png">
                    <Image src="/img/instagram.png" />
                    </a>
                  </li>
                  <li className="p-2">
                    <a href="/log.png">
                    <Image src="/img/youtube.png" />
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>

           
          </div>

          <div className="col-md-12 col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-us">
                  <div className="contact-icon">
                    <i className="fa fa-map-o" aria-hidden="true"></i>
                  </div>

                  <div className="contact-info">
                    <h3>Lima | Perú</h3>
                    <p>Jr. Antonio Bazo 1070 - La Victoria</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-us contact-us-last">
                  <div className="contact-icon">
                    <i
                      className="fa fa-volume-control-phone"
                      aria-hidden="true"
                    ></i>
                  </div>

                  
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="footer-widget footer-left-widget">
                  <div className="section-heading">
                    <h3>Enlaces Útiles</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <ul>
                    <li>
                      <a href="/about">Nosotros</a>
                    </li>
                    <li>
                      <a href="/service">Servicios</a>
                    </li>
                    <li>
                      <a href="/gallery">Galeria</a>
                    </li>
                    <li>
                      <a href="/team">Nuestro Equipo</a>
                    </li>
                  </ul>
                  <ul>
                    
                  </ul>
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <div className="footer-widget">
                  <div className="section-heading">
                    <h3>Contáctanos</h3>
                    <span className="animate-border border-black"></span>
                  </div>
                  <p className="text-light">
                    Flotex Calidad e Innovación Textil
                  </p>

                  <div className="text-light">
                    <p>Celular: +51 912345678</p>
                    
                  </div>
                  
                  <form action="/log.png">
                    <div className="form-row">
                      <div className="col dk-footer-form">
                        <Form.Control type="email" placeholder="Ingrese su Correo" className="text-light"/>
                        <Button type="submit">
                          Enviar
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="copyright">
        <Container className="text-center">
          
         <Row>
            <div className="col-md-12">
            <Image  className="fotter-logo" src="/img/logodorado.png" />
              <span> |  &copy;Copyright 2022, Todos Los Derechos Reservados</span>
            </div>
         </Row>
        </Container>
      </div>

    
    </footer>
  );
};
export default Footer;
