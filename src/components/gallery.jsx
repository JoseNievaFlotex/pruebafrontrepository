import { Container, Image } from "react-bootstrap";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Iframe from 'react-iframe'


const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <Row>
          <Col>
            

          <Row className="justify-content-md-center">
            <div  lg="6" className="col-lg-6 col-sm-6 pe-0 bg-showroom-flotex">
              <div>
                <p className="showroom-text">SHOWROOM</p>
                <h2>BOM RETIRO</h2>
                <p>
                  Rua Correia de Melo, 111<br/>
                  São Paulo, Bom Retiro, SP<br/>
                  Aberto de Segunda à Sexta<br/>
                  das 8h às 18h<br/>
                  (11) 3202-5200 / (11) 3202-5201<br/>
                </p>
                <div>
                  <span>icon</span>
                  <h3>PRÓXIMOS EVENTOS</h3>
                </div>
                <div>
                  <div>
                    <img src="https://adar.com.br/wp-content/uploads/2021/10/evento.png" alt="" />
                  </div>
                  <div>
                    <h2>En breve</h2>
                    <p>Espera noticias.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Col  lg="6" className="col-sm-6 ps-0">
              <div>

              <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.6727644361432!2d-77.01396767012542!3d-12.069048211648013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c89c375c24a3%3A0x350640bcdfe8d7ad!2sFLOTEX!5e0!3m2!1ses-419!2spe!4v1667595749103!5m2!1ses-419!2spe"
                 width="100%" height="540" scrolling="no" marginheight="0" marginwidth="0"
                frameborder="0"
                />

{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.6727644361432!2d-77.01396767012542!3d-12.069048211648013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c89c375c24a3%3A0x350640bcdfe8d7ad!2sFLOTEX!5e0!3m2!1ses-419!2spe!4v1667595749103!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

              </div>
            </Col>
          </Row>
            
            <Row>
              
            <Container className=" col-sm-12 col-md-12 col-lg-12">
              <Row className="col-sm-12 p-1">
                <div className="col-lg-3 col-sm-6 p-0 div-img-flotex-galery">
                  <Image src="https://adar.com.br/wp-content/uploads/2019/10/Adar-Bom-Retiro-7643.jpg" className="img-flotex-galery"/>
                </div>
                <div className="col-lg-3 col-sm-6 p-0">
                  <Image src="https://adar.com.br/wp-content/uploads/2019/10/showroom_bomretiro.jpg"  className="img-flotex-galery"/>
                </div>   
                <div className="col-lg-3 col-sm-6 p-0">
                  <Image src="https://adar.com.br/wp-content/uploads/2019/10/Adar-Bom-Retiro-7615.jpg"  className="img-flotex-galery"/>
                </div>  
                <div className="col-lg-3 col-sm-6 p-0">
                  <Image src="https://adar.com.br/wp-content/uploads/2019/11/Adar-Bom-Retiro-7764.jpg"  className="img-flotex-galery"/>
                </div>               
              </Row>
              
              
            </Container>
            </Row>
            
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Gallery