import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link, Outlet, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarCustom from './NavBarCustom';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Accordion from 'react-bootstrap/Accordion';

const Sidebar = ({children}) => {

    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
        console.log(isOpen);
    }

    const [abrir, setAbrir] = useState(false);
    const [abrirDos, setAbrirDos] = useState(false);

    const ToogleOpenSid = () => {
        abrir === true ? setAbrir(false) : setAbrir(true)
    }
    const ToogleOpenSidDos = () => {
        abrirDos === true ? setAbrirDos(false) : setAbrirDos(true)
    }

  return (
    <>
    <div className={ `contenedor bg-siderbar-flotex ${isOpen === true ? 'active' : ''}`}>
        <div className={`sidebar bg-slider-flotex-dash ${isOpen === true ? 'active' : ''}`}>
            <div>
                <div className='top_section'>
                    <h1 className='text-white text-center'><FontAwesomeIcon icon="fa-solid fa-user" /><p className='nameDash '>User</p></h1>  
                    <div className='barra'>
                    {/* <Navbar.Brand href="#" onClick={ToggleSidebar}><FontAwesomeIcon icon="fa-solid fa-bars" /></Navbar.Brand> */}
                    </div>
                </div>
                
                <div className={`contenedor-nav-dash-li ${abrir === true ? 'active' : ''}`} onClick={ToogleOpenSid}>
                    <NavLink to={'/almacen/dashboard'}
                            as={Link}
                        className="justify-content-start  link">

                        <p className='m-0 icon-dash-flotex-left'><FontAwesomeIcon icon="fa-solid fa-house" /></p>

                        <p className='nameDash ps-4 m-0'>Dashboard</p>
                    </NavLink>

                </div>
                <div className={`contenedor-nav-dash-li ${abrirDos === true ? 'active' : ''}`} onClick={ToogleOpenSidDos}>
                    <NavLink to={'/almacen/analisis'}
                            as={Link}
                        className="justify-content-start  link">

                        <p className='m-0 icon-dash-flotex-left'><FontAwesomeIcon icon="fa-solid fa-paperclip" /></p>

                        <p className='nameDash ps-4 m-0'>Analytics</p>
                    </NavLink>
                    <div className='level-left-menu'>
                        <div className='content-nav-left'>
                            <NavLink to={'/almacen/analisis'} className='first-content-left'>
                                Analytics
                            </NavLink>
                            <NavLink to={'/almacen/product'}>
                                Producto
                            </NavLink>
                            <NavLink to={'/almacen/dashboard'}>
                                Dashboard
                            </NavLink>

                        </div>
                    </div>

                </div>

                <div className={`contenedor-nav-dash-li ${abrir == true ? 'active' : ''}`} onClick={ToogleOpenSid}>

                    <NavLink to={'/almacen/product'}
                            as={Link}
                        className="justify-content-start  link">

                        <p className='m-0 icon-dash-flotex-left'  ><FontAwesomeIcon icon='fas fa-eye' /></p>

                        <p className='nameDash ps-4 m-0'>Producto</p>
                    </NavLink>
                </div>

                <div className={`contenedor-nav-dash-li ${abrir == true ? 'active' : ''}`} onClick={ToogleOpenSid}>
                    <NavLink to={'/almacen/dashboard'}
                            as={Link}
                        className="justify-content-start  link">

                        <p className='m-0 icon-dash-flotex-left'><FontAwesomeIcon icon="fa-solid fa-dollar-sign" /></p>

                        <p className='nameDash ps-4 m-0'>Dolar</p>
                    </NavLink>

                </div>
                
               
                

            </div>
        </div>
    <main className='container-fluid p-0'>
        <div className='content-page'>
            <div className='container-fluid p-0'>
                <NavBarCustom ToggleSidebar={ToggleSidebar} />
            </div>
            <div>
                {children}

            </div>

        </div>
    </main>
          <Outlet />
    </div>
            </>
  )
}

export default Sidebar;