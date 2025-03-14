import '../App.css'
import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, Row } from 'react-bootstrap'

const NavbarC = ({filterbysearch}) => {
  const [searchValue , setSearchValue]=useState('');
  const onSearch=(e)=>{
    e.preventDefault();
    filterbysearch(searchValue)
    setSearchValue('')
  }
  return (
    <Row className=''>
      <Navbar bg='dark' expand="lg md" variant='dark'>
      <Container>
        <Navbar.Brand href="#"> 
          <div className='brand-color'>مطعم عبد</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="mx-2"
              onChange={(e)=>setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button onClick={onSearch} className='btn-search'>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavbarC
