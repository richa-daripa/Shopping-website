import React, { useContext} from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { StoreContext } from './ContextAPI';

const ItemCard = ({ id, name, image, price }) => {

    const { addToCart} = useContext(StoreContext);

  return (
      <Col sm={6} md={4} lg={3} >
      <Card className=" shadow-sm border-0"style={{ width: '16rem' }}>
        <Card.Img variant="top" src={image} style={{ height: '14rem',objectFit:"cover" }} />
        <Card.Body>
          <Card.Title className='fs-6'>{name}</Card.Title>
          <Card.Text className='text-muted'>Price: ₹{price}</Card.Text>
          <div className="text-end">
            <Button variant="primary" onClick={() => addToCart(id)}>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
   </Col>
  );
};

export default ItemCard;