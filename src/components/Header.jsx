 import React from 'react'
 import {Button,NavDropdown,Nav,Navbar,Container,Form} from 'react-bootstrap'
//  import Login from"./Login.jsx";
//  import SignUp from "./SignUp.jsx";
 import {Link} from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <div className='Header'>
         <Navbar  bg="light" expand="lg">
        <Container fluid > 
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link> <Link to='/' className='link'>Home</Link></Nav.Link>  
            <Nav.Link> <Link to='/' className='link'>Link</Link></Nav.Link> 
           
          </Nav>
          <Form className="d-flex">
            <Link to='/signup'>
            <Button variant="outline-primary">Sign Up</Button>
            </Link>
            <Link to='/login' >
            <Button id='btn-margin' variant="outline-primary">Log In</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header
