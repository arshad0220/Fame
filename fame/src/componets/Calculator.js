import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';

const Calculator = () => {
  const [likes, setLikes] = useState(50);
  const [discount, setDiscount] = useState(0);
  const [instantCost, setInstantCost] = useState(0);

  useEffect(() => {
    calculateInstantCost();
  }, [likes]);

  const calculateInstantCost = () => {
    let costPerLike;
    let baseCost = 0;

    if (likes <= 5000) {
      costPerLike = 1.4;
    } else {
      costPerLike = 1.45;
    }

    baseCost = Math.ceil(likes / 100) * costPerLike;
    const calculatedDiscount = (baseCost * 0.4).toFixed(2);

    setInstantCost((baseCost - calculatedDiscount).toFixed(2));
    setDiscount(calculatedDiscount);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Likes Calculator</Card.Title>
              <Form>
                <Form.Group controlId="likesSlider">
                  <Form.Label>Likes: {likes}</Form.Label>
                  <Form.Range
                    value={likes}
                    onChange={(e) => setLikes(Number(e.target.value))}
                    min={50}
                    max={10000}
                    step={100}
                  />
                </Form.Group>
                <Form.Group controlId="customInput">
                  <Form.Label>Custom Input:</Form.Label>
                  <Form.Control type="text" placeholder="Enter custom input" />
                </Form.Group>
              </Form>
              <div className="text-center">
                <p>Instant Cost: ${instantCost}</p>
                {discount > 0 && <p>Discount: {discount}%</p>}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
