import { Container, Row, Col, Image,Card } from 'react-bootstrap';
import image from "../images/Famefollower/two.png"
import "../Assets/styles/profile.css"

const WhyFame = () => {
  return (
   <Container>
   <Row>
    <span className='fame-heading'>Why Fame?</span>
   </Row>
    <Row>
        <Col>
        <Card className='prifile-card'>
        <div className='image-container'>
            <Image src={image} roundedCircle />
            </div>
        <div className='prifile-body'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </div>
        </Card>
      </Col>
      <Col>
        <Card className='prifile-card'>
        <div className='image-container'>
            <Image src={image} roundedCircle />
            </div>
        <div className='prifile-body'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </div>
        </Card>
      </Col>
      <Col>
        <Card className='prifile-card'>
        <div className='image-container'>
            <Image src={image} roundedCircle />
        </div>
        <div className='prifile-body'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </div>
        </Card>
      </Col>
    </Row>
   </Container>
  )
};

export default WhyFame;