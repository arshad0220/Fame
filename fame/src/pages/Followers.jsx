import React from 'react'
import { Col, Container, Row,InputGroup, Form, Image, Card } from 'react-bootstrap';
import "../Assets/styles/styles.css"
import SearchBar from '../componets/SearchBar';
import tiktok from "../Assets/Image/tik-tok.avif"
import { GoStarFill } from "react-icons/go";

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
  }]
  return (
    <div className='container-div'  >
    <Container>
      <Row className='mb-1'>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Row>
            <span className="fame-heading">Buy TikTok Likes and Followers starting at $1.00</span>
          </Row>
          <Row>
           <div className='search-bar '>
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
      <Row>
        <Row> 
        <span className='fame-heading'>Our Clients Get Ral Results</span>
        </Row>
        <Row >
        {
          data.map((item)=> <Card style={{ position: 'relative', width: '100px', height: '100px', backgroundColor: '#3498db', color: '#fff', overflow: 'hidden' }} >
                <Card.Img variant="top" src="holder.js/100px180" rounded/>
                <Card.Text> <GoStarFill /> </Card.Text>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
    )
        }
        </Row>
      </Row>
      <Row></Row>
    </Container>
    </div>
  )
}

export default Followers
