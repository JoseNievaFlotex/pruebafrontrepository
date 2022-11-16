import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link, Outlet, NavLink } from 'react-router-dom'

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

        <><Row>
          <h1>User</h1>
  
          {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index}
                    as={Link}
                  className="link">
                  <a>{item.icon}</a>
                  <a>{item.name}</a>
              </NavLink>
          ))}

          <main>{children}</main>
          </Row>
          <Outlet />
            </>
  )
}

export default Sidebar;