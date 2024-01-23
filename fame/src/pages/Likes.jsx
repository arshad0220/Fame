import React from 'react';
import {Col, Container, Image, Row, Card } from 'react-bootstrap';
import banner from "./../images/banner-shade.jpg";
import {AboutContaint} from "./../utils/Aboutfame.js"
import FameFollower from '../componets/FameFollower.jsx';
import video from "./../Assets/Videos/loading.mp4"
import "../utils/style.css"

const Likes = () => {
  const bannerStyle={
    height: '650px',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    marginLeft:"-120px",
    marginRight:"-120px"
  }

  return (
    <Container>
      <Row style={bannerStyle} className="overflow-hidden">
        <Col lg={6} md={6} sm={12}>

        </Col>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center justify-content-center overflow-hidden">
          <video width="90%" height="auto" autoPlay loop muted playsInline >
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
      <Row style={{height:"600px"}} className='bg-white'>
          <h1 className="fame-heading mt-5 mb-5">New TikTok Growth Machine</h1>
          <Row className="justify-content-center">
            {AboutContaint.map((items,i) => (<FameFollower items={items} />
            ))}
          </Row>
      </Row>
      <Row className=''>
      
      </Row>

    </Container>
  )
}

export default Likes
