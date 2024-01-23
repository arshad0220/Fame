import React from 'react';
import {Col, Card, Image } from 'react-bootstrap';
import "./../utils/style.css"
import five from "./../images/Famefollower/five.png"
const FameFollower = ({items}) => {
    console.log(items)
  return (<Col xs={12} sm={6} md={4} lg={3} className='card mb-5 mr-2'>
      <Image variant="top" src={`${items.icons}`} alt={`Icon ${items.icons}`} width={80} height={80} className='card-icons'/>
      <Card.Body>
        <span  className="card-heading label label-danger" style={{ fontSize: '24px' }}>{items.heading}</span>
        <Card.Text>{items.text}
        </Card.Text>
      </Card.Body>
  </Col>
  )
}

export default FameFollower
