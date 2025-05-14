
import React, { useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Button, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
    const { cartItems, itemList, addToCart, removeFromCart, getTotalAmount, handleDelete,totalQuantity } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='mt-4'>
                <Button variant="success" onClick={() => navigate('/')}><i class="bi bi-arrow-left me-2"></i>Continue shopping</Button>
            </div>


            <Navbar className='border-bottom bg-success-subtle shadow-sm mt-4'>
                <Container className='d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                        <Navbar.Brand className='h1 fs-2 '>
                            Your Cart
                        </Navbar.Brand>
                    </div>
                </Container>
            </Navbar>

            {
                Object.keys(cartItems).length > 0 ? (
                    <>
                        <Container className="mt-4 border shadow-sm rounded " >
                            <h2 className="fs-4 border-bottom border-info-subtle border-3 mb-4 pb-2 pt-4">Items in Cart - {totalQuantity()}</h2>
                            <Row lg={1}>
                                {itemList.filter(item => cartItems[item.id] > 0).map((item, index) => (
                                    <Col md={6} className="mb-3">
                                        <Card className="p-3 d-flex flex-row align-items-center">
                                            <img src={item.image} alt={item.name} className="me-5" width="150" height="150" />
                                            <div className="flex-grow-1">
                                                <h5>{item.name}</h5>
                                                <p>Price: ₹ {item.price}</p>
                                                <div className="d-flex align-items-center">
                                                    <Button variant='outline-secondary bg-body-secondary text-black' className="btn-sm" onClick={() => removeFromCart(item.id)}><i class="bi bi-dash"></i></Button>
                                                    <span className="mx-2 ">{cartItems[item.id]}</span>
                                                    <Button variant='outline-secondary bg-body-secondary text-black' className="btn-sm" onClick={() => addToCart(item.id)}><i class="bi bi-plus"></i></Button>
                                                </div>
                                            </div>
                                            <Button className="ms-3 bg-body-secondary text-danger" onClick={() => handleDelete(item.id)}>Remove</Button>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>



                        <Card style={{ width: '18rem' }} className=' border-success border-2 mt-4'>
                            <Card.Body>
                                <Card.Title className="border-bottom  border-3 border-success-subtle pb-2">Price Details</Card.Title>
                                <Card.Text className='border-bottom border-dark pt-2'>
                                    <div className='d-flex justify-content-between'>
                                        <p>Total MRP :</p>
                                        <p>₹ {getTotalAmount()} </p></div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Shipping fee :</p>
                                        <p>₹ 0 </p></div>
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <p className='fw-bold'>Total Amount:</p>
                                    <p>₹ {getTotalAmount() + 0} </p></div>
                                <Button variant="success" className='w-100 mt-4' onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
                            </Card.Body>
                        </Card>
                    </>
                ) : (
                    <h4 className='text-center mt-4 pt-4 vh-100'>Oops! Your Kartify Cart is empty</h4>
                )
            }


        </div>
    )
}
export default Cart;