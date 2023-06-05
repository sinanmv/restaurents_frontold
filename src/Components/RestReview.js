import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({review}) {
    const [open, setOpen] = useState(false);
    console.log(review);
  return (
    <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Client Review
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         {
            review?.map(item=>(
                <div className='my-2 border border-2 p-3' style={{
                    overflowY:'hidden'
                }}>
                    <h6>{item.name}</h6>
                    <p>{item.date}</p>
                    <p>{item.rating}</p>
                    <p>{item.comments}</p>
                </div>

            ))
         }
        </div>
      </Collapse>
    </div>
  )
}

export default RestReview