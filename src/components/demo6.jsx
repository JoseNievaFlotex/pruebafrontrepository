/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Component } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import swal from 'sweetalert';
import axios from 'axios';
import md5 from 'md5'
import Cookies from "universal-cookie";
import { useEffect } from "react";

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const cookies = new Cookies();
 
// class demo6 extends Component {
//   state={
//     form:{
//       username: '',
//       password: ''
//     }
//   }
  

//   handleChange= async e=>{
//     await this.setState({
//       form:{
//         ...this.state.form,
//         [e.target.name]: e.target.value
//       }
//     })
//   }

//   iniciarSesion=async()=>{
//     await axios.get(baseUrl, {params: { username: this.state.form.username, password: md5(this.state.form.password)}})
//     .then(response=>{
//         console.log(response.data[2].title);
//         for(var idData in response.data[0]){
//             console.log(idData.body);
//         }
//       return response.data
//     })
//     .then(response=>{
//         if(response.lenght>0){
//             var respuesta= response[0];
//             cookies.set('idUsuario', respuesta.idUsuario, {path: '/'});
//             cookies.set('nombre_usuario', respuesta.nombre_usuario, {path: '/'});
//             cookies.set('tipo_usuario', respuesta.tipo_usuario, {path: '/'});
//             //alert(`Bienvenido ${respuesta.idUsuario} ${respuesta.tipo_usuario}`)
//         }else{
//             //alert('El Usuario o la contraseña no son correctos');
//         }
//     })
    
//   }
  
//   render(){
function ValorDolar(props){

    const [valores,setValores] = useState([]);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(()=> {
        //axios.get("https://jsonplaceholder.typicode.com/posts")
        axios.get("https://pruebaservice.vercel.app/api/User")
        //axios.get("https://mindicador.cl/api/dolar")
            .then(res=>{
                const data = res.data;
                setValores(data[0]);
                console.log((data[0] ?? []).length);
            })
            .then(res=>{
                console.log((res ?? []).lenght>0);
                if((res ?? []).lenght>0){
                    var respuesta= res[0];
                    cookies.set('idUsuario', respuesta.idUsuario, {path: '/'});
                    cookies.set('nombre_usuario', respuesta.nombre_usuario, {path: '/'});
                    cookies.set('tipo_usuario', respuesta.tipo_usuario, {path: '/'});
                    //alert(`Bienvenido ${respuesta.idUsuario} ${respuesta.tipo_usuario}`)
                }else{
                    //alert('El Usuario o la contraseña no son correctos');
                }
            })
            .catch(error =>{
                console.log(error);
            })
    }, []);

  return (
    <Container>
        <Row>
            <div>
                {valores.map((v) => <ListGroup.Item key={v.idUsuario}><b>Valor: </b> {v.nombre_usuario} {v.tipo_usuario} </ListGroup.Item>)}
            </div>
        </Row>
      <Row>
        <Col>
          <div className="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre Usuario</Form.Label>
              <Form.Control type="email" placeholder="Usuario" onChange={e => setName(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={ e=> setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out"  />
            </Form.Group>
            <Button variant="primary"   >
              Login
            </Button>
          </div>

        </Col>
      </Row>
    </Container>
  );}


export default ValorDolar;