import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from './base_url';
import axios from 'axios';
import { Row ,Col,Image, ListGroup } from 'react-bootstrap';
import RestOp from './RestOp';
import RestReview from './RestReview';

function ViewRestaurants() {
  const [restaurantddetails,setrestaurantsdetails]=useState({})
  const {id} = useParams()
  // destructuring pathParams = useParams()
  // const pathParams = useParams()
  // console.log(pathParams);
  // console.log(id);//3
  // api call for fetch particular restaurant details
  const fetchData=async()=>{
    const {data} = await axios.get(`${base_url}/restaurants/${id}`);
    setrestaurantsdetails(data)
  }
  useEffect(()=>{
    fetchData();
  },[])
  console.log(restaurantddetails);
  return (
    <div>
{
    restaurantddetails?
    <Row>
      <Col sm={12} md={3}>
      <Image src={`${restaurantddetails.photograph}`} fluid/>
      </Col>
      <Col md={8}>
        <h2 style={{overflowY:'hidden'}}>{restaurantddetails?.name}</h2>
        <h5 style={{overflowY:'hidden'}}>{restaurantddetails?.neighborhood}</h5>

      <ListGroup>
      <ListGroup.Item>Cuisine : {restaurantddetails?.cuisine_type}</ListGroup.Item>
      <ListGroup.Item><RestOp op={restaurantddetails?.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><RestReview review={restaurantddetails?.reviews} /></ListGroup.Item>  
    </ListGroup>
      </Col>
    </Row>:''
}
    </div>
  )
}

export default ViewRestaurants