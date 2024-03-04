import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


import Collapse from 'react-bootstrap/Collapse';

function RestReview() {
    
  const [open, setOpen] = useState(false);


  return (
    <>
        <Button
    className='btn btn-warning ms-3'
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
     Click here to See the Reviews
    </Button>
   
    <Collapse in={open}>
     <div className='my-2'>
        <hr/>
            
          <div className='mt-5'>
          
            <h6>Name and Date</h6>
            <p>Review</p>
            <p>commets</p>
          </div>
     </div>
       
    </Collapse>
    </>
  )
}

export default RestReview