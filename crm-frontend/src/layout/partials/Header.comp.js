import React from 'react'
import { Navbar,Nav,NavbarBrand } from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom'


const Header = () => {
  
  
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand href="#home"><div>CRM System</div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">             
          <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
          <NavLink to="/ticket-lists" className="nav-link">Tickets</NavLink>
          <NavLink to="/" className="nav-link">Logout</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
