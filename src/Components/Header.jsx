import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
   <>

  <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='d-flex'>
          <i className="fa-solid fa-address-book fa-bounce" bounce style={{color: "#0e0102",}} />
          <h3>Contact <span style={{color:"purple"}}>Optimizer</span></h3>            
          </Navbar.Brand>
        </Container>
      </Navbar>
   
   
   </>
  )
}

export default Header