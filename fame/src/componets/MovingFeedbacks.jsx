import React, { useEffect, useState } from 'react';
import { Card, Badge, Col ,Row,Image} from 'react-bootstrap';
import { GoStarFill } from "react-icons/go";
import "../Assets/styles/slider.css"
import image from "../Assets/Image/tik-tok.avif"
const MovingFeedbacks = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000); // Adjust the interval duration (in milliseconds) for the sliding speed
  
      return () => clearInterval(intervalId);
    }, [data]);

  return (<div className="d-flex overflow-hidden slide-track">
  {data.map((item, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={3} className="slide">
      <Card className='review-card'>
        <Row>
            <Col xl={4} xs={4} md={4}>
            <div className='image-container'>
                <Image src={image} roundedCircle />
            </div>
            </Col>
            <Col xl={8} xs={8} md={8} >
              <div style={{marginTop:"25px", marginLeft:"5px", display:"flex",flexDirection:"row" }}>
             <GoStarFill  style={{ color: '#FF4500', marginLeft:"15px" }}/>
             <GoStarFill  style={{ color: '#FF4500', marginLeft:"5px" }}/>
             <GoStarFill  style={{ color: '#FF4500', marginLeft:"5px" }}/>
             <GoStarFill  style={{ color: '#FF4500', marginLeft:"5px" }}/>
             <GoStarFill  style={{ color: '#FF4500', marginLeft:"5px" }}/>
              </div>
            </Col>
        </Row>
          <Card.Body>
          <Card.Title>
            <span>
              <span className='h5'>Title</span> <Badge>review</Badge>
            </span>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</div>
  )
}

export default MovingFeedbacks

/*
<div className="d-flex overflow-hidden">
  {data.map((item, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={3} className={`mb-5 ${index === currentIndex ? 'mr-2' : 'mr-0'}`}>
      <Card style={{ width: '200px', minHeight: '300px' }}>
        <Card.Img variant="top" src={item.imageUrl} style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '10px auto' }} />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Badge bg="warning" className="p-2">{item.rating} Stars <GoStarFill /></Badge>
            <h5 className="card-title">{item.title}</h5>
          </div>
          <p className="card-text">{item.description}</p>
        </Card.Body>
      </Card>
    </Col>
  ))}
</div>
*/