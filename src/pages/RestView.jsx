import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../component/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import restaurantSlice from '../redux/restaurantSlice';


function RestView() {
  const [show, setShow] = useState(false);
  const {id}=useParams()
  console.log(id);
const allRestaurant =useSelector((state)=>state.restaurantSlice.allRestaurant)
console.log(allRestaurant);

const selectedrestaurant =allRestaurant.restaurants.find(item=>item.id==id)
console.log(selectedrestaurant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
   <Row className='mt-5'>
    <Col md={1}></Col>
    <Col md={3}>
      <img width={'100%'} className='rounded pt-3' height={'450px'} src={selectedrestaurant.photograph} alt="" />
    </Col>
    <Col md={7}>
      <hr/>
      <h4 className='text-center'><span className=' text-warning '>RESTAURANT</span> DETAILS</h4>
      <hr/>
      <ListGroup>
      <ListGroup.Item><h4 className=' text-center  p-4'>{selectedrestaurant.name}</h4></ListGroup.Item>
      <ListGroup.Item><p>Neighborhood:{selectedrestaurant.neighborhood} </p></ListGroup.Item>
      <ListGroup.Item><p>Cuisine_type:{selectedrestaurant.cuisine_type}</p></ListGroup.Item>
      <ListGroup.Item><p>Address:{selectedrestaurant.name}</p></ListGroup.Item>
      <ListGroup.Item className=' text-center  p-3'>
       
          <button onClick={handleShow} className='btn btn-warning '>Operating Hours</button>
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className='text-warning' >Operating Hours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
            <ListGroup.Item>Monday:{selectedrestaurant.operating_hours.Monday}</ListGroup.Item>
<ListGroup.Item>Tuesday:{selectedrestaurant.operating_hours.Tuesday}</ListGroup.Item>
<ListGroup.Item>Wednesday:{selectedrestaurant.operating_hours.Wednesday}</ListGroup.Item>
<ListGroup.Item>Thursday:{selectedrestaurant.operating_hours.Thursday}</ListGroup.Item>
<ListGroup.Item>Friday:{selectedrestaurant.operating_hours.Friday}</ListGroup.Item>
            </ListGroup>
        
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
        <RestReview/>
      
      </ListGroup.Item>
    </ListGroup>

  

    </Col> 
    <Col md={1}>

    </Col>
   </Row>
  )
}

export default RestView



