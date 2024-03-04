import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   
        <Navbar variant='dark'>
        <Container >
          <Navbar.Brand href="#home" className='d-flex'>
            <img
              alt=""
              src="https:/www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <h5 className='mt-1 ms-2'>  <span className='text-warning'>Food</span> Circle</h5>
          </Navbar.Brand>
          <input type="text" className=' form-control  w-25'  placeholder='search by Neighbour' />
        </Container>
      </Navbar>
    
  )
}

export default Header