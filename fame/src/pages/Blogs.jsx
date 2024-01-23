import React from 'react'
import {Col, Container, Image, Row } from 'react-bootstrap'
import banner from "./../images/banner-shade.jpg"
const Blogs = () => {
  return (
    <div>
      <Row style={{height:"100vh"}}>
        <Col lg={12} md={12} sm={12}>
          <Image src={banner} auto/>
        </Col>
      </Row>
    </div>
  )
}

export default Blogs
