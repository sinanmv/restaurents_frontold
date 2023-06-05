import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestaurantCard from '../RestaurantCard'

function AllRestaurants() {
  // state for holding all restaurants array
  const [allItems, setAllItem] = useState([])

  const base_url = 'http://localhost:3001'
  // code for api call
  const fetchdata = async () => {
    const response = await axios.get(`${base_url}/restaurants/`)
    // console.log(response.data);
    setAllItem(response.data)
  }
  console.log(allItems);
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <Row>
      {
        allItems.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* destructuring */}
          <RestaurantCard  restaurants = {item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default AllRestaurants