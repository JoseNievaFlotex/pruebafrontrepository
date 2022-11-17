import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link, Outlet, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarCustom from './NavBarCustom';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Sidebar = ({children}) => {

    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
        console.log(isOpen);
    }

    const menuItem =[
        {
            path:"/almacen/dashboard",
            name:"Dashboard",
            icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
        },
        {
            path:"/almacen/analisis",
            name:"Analytics",
            icon: <FontAwesomeIcon icon="fa-solid fa-paperclip" />,
        },
        {
            path:"/almacen/product",
            name:"Product",
            icon: <FontAwesomeIcon icon='fas fa-eye' />,
        },
    ]

  return (
    <>
    <div className={ `contenedor bg-siderbar-flotex ${isOpen == true ? 'active' : ''}`}>
        <div className={`sidebar bg-slider-flotex-dash ${isOpen == true ? 'active' : ''}`}>
            <div>
                <div className='top_section'>
                    <h1 className='text-white text-center'><FontAwesomeIcon icon="fa-solid fa-user" /><p className='nameDash '>User</p></h1>  
                    <div className='barra'>
                    {/* <Navbar.Brand href="#" onClick={ToggleSidebar}><FontAwesomeIcon icon="fa-solid fa-bars" /></Navbar.Brand> */}
                    </div>
                </div>
                
                <NavLink to={'/almacen/dashboard'}
                        as={Link}
                    className="justify-content-center  link">

                    <p className=''><FontAwesomeIcon icon="fa-solid fa-house" /></p>

                    <p className='nameDash ps-2'>Dashboard</p>
                </NavLink>
                <div className='contenedor-nav-dash-li'>
                    <NavLink to={'/almacen/analisis'}
                            as={Link}
                        className="justify-content-center  link">

                        <p className=''><FontAwesomeIcon icon="fa-solid fa-paperclip" /></p>

                        <p className='nameDash ps-2'>Analytics</p>
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
                <NavLink to={'/almacen/product'}
                        as={Link}
                    className="justify-content-center  link">

                    <p className=''><FontAwesomeIcon icon='fas fa-eye' /></p>

                    <p className='nameDash ps-2'>Producto</p>
                </NavLink>
                
               
                

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