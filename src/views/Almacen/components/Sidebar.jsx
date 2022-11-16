import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link, Outlet, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBarCustom from './NavBarCustom';


const Sidebar = ({children}) => {

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
    <div className='contenedor bg-siderbar-flotex'>
        <div className='sidebar bg-slider-flotex-dash'>
            <div className='top_section'>
                <h1 className='text-white text-center'><FontAwesomeIcon icon="fa-solid fa-user" className='pe-4'/>User</h1>  
                <div className='barra'>
                
                </div>
            </div>
            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index}
                    as={Link}
                  className="link">
                  <p className='pe-2'>{item.icon}</p>
                  <p>{item.name}</p>
              </NavLink>
          ))}
        </div>
    <main className='container-fluid p-0'>
        <div className='content-page'>
            <div className='container-fluid p-0'>
            <NavBarCustom  />
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