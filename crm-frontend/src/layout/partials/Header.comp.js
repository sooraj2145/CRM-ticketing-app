import React from 'react'
import { Navbar,Nav,NavbarBrand } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <NavbarBrand href="#home"><div>CRM System</div></NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">             
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
