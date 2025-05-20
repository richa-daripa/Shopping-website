
import React, { useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Button, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
  const {
    cartItems,
    itemList,
    addToCart,
    removeFromCart,
    getTotalAmount,
    handleDelete,
    totalQuantity,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="mt-4">
        <Button variant="success" onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left me-2"></i>Continue shopping
        </Button>
      </div>
      <Navbar className="border-bottom bg-success-subtle shadow-sm mt-4">
        <Container className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <Navbar.Brand className="h1 fs-2 ">Your Cart</Navbar.Brand>
          </div>
        </Container>
      </Navbar>

      {Object.keys(cartItems).length > 0 ? (
        <>
          <div className="row mt-4 ">
            <div className="col-md-8 order-md-1 ">
              <Container className="mt-4 border shadow-sm rounded ">
                <h2 className="fs-4 mb-2 pt-4">Items in Cart</h2>
                <Row lg={1}>
                  {itemList
                    .filter((item) => cartItems[item.id] > 0)
                    .map((item, index) => (
                      <Col md={6} className="mb-3">
                        <Card className="p-3 d-flex flex-row align-items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="me-5"
                            width="150"
                            height="150"
                          />
                          <div className="flex-grow-1">
                            <h5>{item.name}</h5>
                            <p>Price: ₹{item.price}</p>
                            <div className="d-flex align-items-center">
                              <Button
                                variant="outline-secondary bg-body-secondary text-black"
                                className="btn-sm"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <i className="bi bi-dash"></i>
                              </Button>
                              <span className="mx-2 ">
                                {cartItems[item.id]}
                              </span>
                              <Button
                                variant="outline-secondary bg-body-secondary text-black"
                                className="btn-sm"
                                onClick={() => addToCart(item.id)}
                              >
                                <i className="bi bi-plus"></i>
                              </Button>
                            </div>
                          </div>
                          <Button
                            className="ms-3 bg-body-secondary text-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Remove
                          </Button>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Container>
            </div>

            <div className="col-md-4 order-md-2 mb-4 ">
              <Card className=" border-success border-2 mt-4 w-100">
                <Card.Body>
                  <Card.Title className="border-bottom  border-3 border-success-subtle pb-2">
                    Price Details
                  </Card.Title>
                  <Card.Text className="border-bottom border-dark pt-2">
                    <div className="d-flex justify-content-between">
                      <p>Total MRP :</p>
                      <span>₹{getTotalAmount()} </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Total quantity :</p>
                      <span>{totalQuantity()}</span>
                    </div>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Total Amount:</p>
                    <strong>₹{getTotalAmount()} </strong>
                  </div>
                  <Button
                    variant="success"
                    className="w-100 mt-4"
                    onClick={() => navigate('/checkout')}
                  >
                    GO TO CHECKOUT
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </>
      ) : (
          <div className="vh-100">
            <h4 className="text-center mt-4 pt-4">
              Oops! Your Kartify Cart is empty
            </h4>
          </div>
      )}
    </div>
  );
};
export default Cart;
