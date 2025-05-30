import React, { useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { Card, Col, Button, CardFooter } from 'react-bootstrap';
import '../style.css';

const ItemCard = ({ id, name, image, price, setShow }) => {
  const { addToCart } = useContext(StoreContext);

  const handleClick = () => {
    addToCart(id);
    setShow(true);
  };

  return (
    <Col sm={6} md={4} lg={3}>
      <Card className=" shadow-sm border-0 h-100">
        <Card.Img variant="top" src={image} className="cardImg"/>
        <Card.Body>
          <Card.Title className="fs-6">{name}</Card.Title>
          <Card.Text className="text-muted">Price: ₹{price}</Card.Text>
        </Card.Body>
        <CardFooter className="border-top-0">
            <Button variant="success" className="w-100" onClick={handleClick}>
              Add to Cart
            </Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default ItemCard;
