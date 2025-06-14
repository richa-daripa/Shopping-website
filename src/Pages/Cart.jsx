import React, { useState, useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Button, Row, Col, Card, Modal } from 'react-bootstrap';
import '../style.css';

const Cart = () => {
  const { cartItems, itemList, addToCart, removeFromCart, getTotalAmount, handleDelete, handleDeleteConfirm, delConfirm, showDelConfirm, totalQuantity, delItemImage } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showPlacedOrder, setShowPlacedOrder] = useState(false);

  return (
    <div className="container">
      {Object.keys(cartItems).length > 0 ? (
        <>
          <Navbar className="border-bottom bg-success-subtle shadow-sm mt-2">
            <Container className="d-flex justify-content-center align-items-center">
              <div className="text-center">
                <Navbar.Brand className="h1 fs-2 ">Your Cart</Navbar.Brand>
              </div>
            </Container>
          </Navbar>

          <div className="row">
            <div className="col-md-8 order-md-1 ">
              <Container className="mt-4 border shadow-sm rounded mb-2">
                <h2 className="fs-4 mb-3 pt-3">Items in Cart</h2>
                <Row lg={1} className="overflow-y-auto mb-3 height">
                  {itemList
                    .filter((item) => cartItems[item.id] > 0)
                    .map((item, index) => (
                      <Col md={6} className="mb-2">
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
                              <span className="mx-2 "> {cartItems[item.id]}</span>
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
                            className="ms-3 bg-body-secondary text-secondary border-0"
                            onClick={() => handleDeleteConfirm(item)}
                          >
                            <i class="bi bi-trash-fill me-2"></i>Remove
                          </Button>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Container>
              <div className="mt-4">
                <Button variant="success" onClick={() => navigate('/')}>
                  <i className="bi bi-arrow-left me-2"></i>Continue shopping
                </Button>
              </div>
            </div>

            <div className="col-md-4 order-md-2 mb-4 ">
              <Card className=" border-success border-2 mt-4 w-100">
                <Card.Body>
                  <Card.Title className="border-bottom  border-3 border-success-subtle pb-2">Price Details</Card.Title>
                  <Card.Text className="border-bottom border-dark pt-2">
                    <div className="d-flex justify-content-between">
                      <p>Total MRP :</p>
                      <span>₹{getTotalAmount()} </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Total Items :</p>
                      <span>{totalQuantity()}</span>
                    </div>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <p className="fw-bold">Order Total:</p>
                    <strong>₹{getTotalAmount()} </strong>
                  </div>
                  <Button
                    variant="success"
                    className="w-100 mt-4"
                    onClick={() => setShowPlacedOrder(true)}
                  >
                    PLACE ORDER
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </>
      ) : (
        <div className="position-absolute start-50 translate-middle-x d-flex flex-column align-items-center justify-content custom-top">
          <h2 className="text-center">
            Oops! Your Kartify Cart is Empty
          </h2>
          <Button variant="success" className="mt-5" onClick={() => navigate('/')}>
            Back to Shop
          </Button>
        </div>
      )}
      <Modal
        show={showPlacedOrder}
        onHide={() => setShowPlacedOrder(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-4 bg-success-subtle rounded-3">
          <div className="text-center">
            <h5>Your order has been placed successfully</h5>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <Button className="bg-success" onClick={() => navigate('/checkout')}>
              Check Order Details
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={delConfirm}
        onHide={() => showDelConfirm(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className=" d-flex flex-column gap-3 p-3 mt-2 mx-2">
          <div className="d-flex flex-row justify-content-between">
            {delItemImage && (
              <img src={delItemImage} alt="Item to be removed" className="img-fluid w-25 h-25" />
            )}
            <div className='d-flex flex-column align-items-start ms-4 gap-2'>
              <h5>Remove from Cart?</h5>
              <p>Are you sure you want to remove this item from your cart?</p>
            </div>
          </div>

          <div className="d-flex justify-content-around align-items-center border-top border-secondary-subtle pt-2">
            <Button className="w-25 bg-light text-secondary border-0" onClick={() => showDelConfirm(false)} >
              Cancel
            </Button>
            <div class="vr"></div>
            <Button
              className="w-25 bg-light text-danger border-0"
              onClick={handleDelete}
            >
              Remove
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Cart;