import React ,{useEffect, useState}from 'react'
import { Col, Container, Row,InputGroup, Form, Image, Card, Badge } from 'react-bootstrap';
import "../Assets/styles/styles.css"
import SearchBar from '../componets/SearchBar';
import tiktok from "../Assets/Image/tik-tok.avif"
import MovingFeedbacks from '../componets/MovingFeedbacks';
import WhyFame from '../componets/WhyFame';

const Followers = () => {
  const data=[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
  {
    "albumId": 1,
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
  {
    "albumId": 1,
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
  }]

  return (
    <>
      <div className='container-div'>
      <Container>
        <Row className='mb-1'>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Row>
              <span className="fame-heading h1">Buy TikTok Likes and Followers starting at $1.00</span>
            </Row>
            <Row>
            <div className='search-bar'>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <Image src={tiktok} width={50} />
                </InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text className='primary-icon-bg-color'><span className='primary-icon-bg-color primary-icon-color'> </span> Grow Your Tik Tock</InputGroup.Text>
              </InputGroup>
            </div>
            </Row>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
          </Col>
        </Row>
      </Container>
      </div>
      <div style={{height:"auto", padding:"20px", margin:"10p"}}>
      <Container>
        <Row>
          <Row> 
          <span className='fame-heading'>Our Clients Get Ral Results</span>
          </Row>
          <Row>
            <span className='mini-fame-heading'>We helped thousands of creators to exponentially grow their followers and engagement to make their videos go viral</span>
          </Row>
          <Row  className='slider'>
          <MovingFeedbacks data={data}/>
          </Row>
        </Row>
      </Container>
      
      </div>
      <div style={{height:"auto", padding:"20px", margin:"10p"}}>
        <WhyFame />
      </div>
    </>
  )
}

export default Followers
