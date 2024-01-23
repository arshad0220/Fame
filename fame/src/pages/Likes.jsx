import React from 'react';
import {Col, Container, Row, Tabs, Tab, Card, Carousel} from 'react-bootstrap';
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
  const prices = [
    {
      amount: 100,
      price: '$1.20',
      product: 'Basic Package',
      features: [
        'One Time Purchase',
        'Lightning Fast Delivery',
        'High-Quality Likes',
        'Real-User Likes',
        'Steady Growth',
        '24/7 Support',
      ],
      popular: false,
    },
    {
      amount: 500,
      price: '$5.20',
      product: 'Standard Package',
      features: [
        'One Time Purchase',
        'Lightning Fast Delivery',
        'High-Quality Likes',
        'Real-User Likes',
        'Steady Growth',
        '24/7 Support',
      ],
      popular: true,
    },
    {
      amount: 1000,
      price: '$9.49',
      product: 'Premium Package',
      features: [
        'One Time Purchase',
        'Lightning Fast Delivery',
        'High-Quality Likes',
        'Real-User Likes',
        'Steady Growth',
        '24/7 Support',
      ],
      popular: false,
    },
    {
      amount: 2500,
      price: '$21.20',
      product: 'Pro Package',
      features: [
        'One Time Purchase',
        'Lightning Fast Delivery',
        'High-Quality Likes',
        'Real-User Likes',
        'Steady Growth',
        '24/7 Support',
      ],
      popular: false,
    },
    {
      amount: 5000,
      price: '$38.49',
      product: 'Ultimate Package',
      features: [
        'One Time Purchase',
        'Lightning Fast Delivery',
        'High-Quality Likes',
        'Real-User Likes',
        'Steady Growth',
        '24/7 Support',
      ],
      popular: false,
    },
  ];

  // Additional product cards (for demonstration purposes)
  const additionalPrices = Array.from({ length: 10 }, (_, index) => ({
    amount: 500 * (index + 2),
    price: `$${(5.20 * (index + 2)).toFixed(2)}`,
    product: `Custom Package ${index + 1}`,
    features: [
      'One Time Purchase',
      'Lightning Fast Delivery',
      'High-Quality Likes',
      'Real-User Likes',
      'Steady Growth',
      '24/7 Support',
    ],
    popular: false,
  }));

  // Combine the initial prices with additional prices for the slider
  const allPrices = [...prices, ...additionalPrices];


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
      <Row style={{height:"auto"}} >
          <h1 className="fame-heading mt-5 mb-5">New TikTok Growth Machine</h1>
          <Row className="justify-content-center">
            {AboutContaint.map((items,i) => (<FameFollower items={items} />
            ))}
          </Row>
      </Row>
      <Row style={{marginTop:'10px',height:"auto",backgroundColor:"#4c1d95"}}>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h2 className="mb-4">Get more likes with our affordable pricing!</h2>
            <p className="lead">
              Our high-quality, real-user likes will help boost your TikTok
              visibility and engagement. Choose the perfect package for you!
            </p>
          </Col>
         </Row>
         <Row>
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Home" style={{height:"600px"}}>
            {allPrices.map((price, index) => (
              <Carousel key={index}>
                <Carousel.Item>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            ))}
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
          </Tabs>
         </Row>
      </Row>
    </Container>
  )
}

export default Likes
