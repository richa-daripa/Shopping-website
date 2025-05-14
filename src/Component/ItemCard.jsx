import React, { useContext} from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { Card, Col, Button } from 'react-bootstrap';

const ItemCard = ({ id, name, image, price , setShow}) => {

    const { addToCart} = useContext(StoreContext);

  return (
      <Col sm={6} md={4} lg={3} >
      <Card className=" shadow-sm border-0">
        <Card.Img variant="top" src={image} style={{ height: '14rem',objectFit:"cover" }} />
        <Card.Body>
          <Card.Title className='fs-6'>{name}</Card.Title>
          <Card.Text className='text-muted'>Price: ₹{price}</Card.Text>
          <div className="text-end">
            <Button variant="success" onClick={() => {addToCart(id);setShow(true)}}>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
   </Col>
  );
};

export default ItemCard;