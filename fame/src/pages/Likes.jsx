import React from 'react';
import {Col, Container, Row, Tabs, Tab, Card, Button} from 'react-bootstrap';
import banner from "./../images/banner-shade.jpg";
import {AboutContaint} from "./../utils/Aboutfame.js"
import FameFollower from '../componets/FameFollower.jsx';
import video from "./../Assets/Videos/loading.mp4";
import "../utils/style.css";
import one from "../images/Famefollower/One.png";
import Slider from 'react-slick';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


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
      <Row style={{marginTop:'10px',height:"auto",backgroundColor:"#4c1d95", padding:"20px",marginLeft:"-120px", marginRight:"-120px"}}>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            <h2 className="mb-4" style={{color:"#BF125D"}}>Get more likes with our affordable pricing!</h2>
            <p className="lead" style={{color:"#ffffff"}}>
              Our high-quality, real-user likes will help boost your TikTok
              visibility and engagement. Choose the perfect package for you!
            </p>
          </Col>
         </Row>
        <Row style={{paddingLeft:'20px'}}>
          <Tabs defaultActiveKey="buyLikes"className="mb-3" justify >
            <Tab eventKey="buyLikes" title="Buy Likes" style={{height:"500px", color:"#BF125D"}}>
              <Slider {...sliderSettings}>
                {allPrices.map((price, index) => (
                  <Col key={index} className="mb-4 text-center">
                    {/* Pricing Card */}
                    <Card className={`border-0 shadow-sm pricing-card ${price.popular ? 'popular' : ''}`}>
                      <Card.Body>
                        {/* Card Title */}
                        <Card.Title className="fw-bold mb-3">
                          <span className="display-5">{price.amount}</span>
                          <br />
                          Likes
                        </Card.Title>

                        {/* Card Product */}
                        <Card.Text className="text-muted mb-3">{price.product}</Card.Text>

                        {/* Card Features */}
                        <ul className="list-unstyled">
                          {price.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>

                        {/* Card Price */}
                        <Card.Text className="text-muted mb-3">{price.price}</Card.Text>

                        {/* Buy Now Button */}
                        <Button variant="primary" className="w-100">
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Slider>
            </Tab>
            <Tab eventKey="buyComments" title="Buy comments">
              <Slider {...sliderSettings}>
                {allPrices.map((price, index) => (
                  <Col key={index} className="mb-4 text-center">
                    {/* Pricing Card */}
                    <Card className={`border-0 shadow-sm pricing-card ${price.popular ? 'popular' : ''}`}>
                      <Card.Body>
                        {/* Card Title */}
                        <Card.Title className="fw-bold mb-3">
                          <span className="display-5">{price.amount}</span>
                          <br />
                          Comments
                        </Card.Title>
                        {/* Card Product */}
                        <Card.Text className="text-muted mb-3">{price.product}</Card.Text>

                        {/* Card Features */}
                        <ul className="list-unstyled">
                          {price.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>

                        {/* Card Price */}
                        <Card.Text className="text-muted mb-3">{price.price}</Card.Text>

                        {/* Buy Now Button */}
                        <Button variant="primary" className="w-100">
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Slider>
            </Tab>
          </Tabs>
         </Row>
      </Row>
    </Container>
  )
}

export default Likes
