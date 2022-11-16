import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link, Outlet, NavLink } from 'react-router-dom';
import SidebarMenu from 'react-bootstrap-sidebar-menu';



const Sidebar = ({children}) => {

    const menuItem =[
        {
            path:"/almacen/dashboard",
            name:"Dashboard",
            icon: "",
        },
        {
            path:"/almacen/analisis",
            name:"Analytics",
            icon: "",
        },
        {
            path:"/almacen/product",
            name:"Product",
            icon: "",
        },
    ]

  return (

        <><Row className='bg-slider-flotex-dash'>
            <SidebarMenu >
                <h1>User</h1>
                <div className='hoda'>
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index}
                                as={Link}
                            className="link">
                            <a>{item.icon}</a>
                            <a>{item.name}</a>
                        </NavLink>
                    ))}

                </div>
                <div className='new-div'>

                    <main className='div-dos-new'>{children}</main>
                </div>
            </SidebarMenu>

            
            
          </Row>
          <Outlet />
            </>
  )
}

export default Sidebar;