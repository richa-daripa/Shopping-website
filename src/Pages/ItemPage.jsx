import React, { useState, useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../Component/ItemCard';
import { Container, Row, Navbar, Button, Toast } from 'react-bootstrap';

const ItemPage = () => {
    const { itemList, totalQuantity } = useContext(StoreContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <>
            <Navbar className="bg-body-tertiary border-bottom border-dark-subtle pt-2">
                <Container>
                    <Navbar.Brand className='fw-bold text-success fs-2'>
                        Kartify
                    </Navbar.Brand>
                    <div className="d-flex gap-3">
                        <Button className="bg-success-subtle border-0 text-success position-relative" onClick={() => navigate('/cart')}><i class="bi bi-cart3 me-2 fs-5"></i>My Cart
                            <span class="position-absolute top-0 start-100 translate-middle  bg-primary text-white rounded-circle fw-bold d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px", fontSize: "14px" }}>
                                {totalQuantity()}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </Button>
                    </div>
                </Container>
            </Navbar>

            <Container className='d-flex justify-content-center align-items-center mt-2 translate-middle position-fixed start-50 top-20' style={{ zIndex: "1090" }}>
                <Toast onClose={() => setShow(false)} show={show} delay={1000} autohide style={{ borderRadius: "50px" }}>
                    <Toast.Body className="bg-dark opacity-75 text-center text-white rounded-pill">Item Added To Cart</Toast.Body>
                </Toast>
            </Container>

            {
                itemList.length > 0 ? (
                    <Container className="mt-5 mb-5">
                        <Row xs={1} sm={2} md={3} className="g-5">
                            {
                                itemList.map((i, index) => (
                                    <ItemCard key={i.id} id={i.id} name={i.name} image={i.image} price={i.price} setShow={setShow} />
                                ))
                            }
                        </Row>
                    </Container>
                ) : (

                    <h4 className='text-center mt-4 pt-4 vh-100'>Failed to load the content. Try again later</h4>
                )
            }

        </>

    )
}
export default ItemPage;