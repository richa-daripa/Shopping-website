import React, { useState, useContext } from 'react';
//import { itemList } from './itemList';
import ItemCard from './ItemCard';
import { Container, Row, Navbar, Button, Toast } from 'react-bootstrap';
import { StoreContext } from './ContextAPI';
import { useNavigate } from 'react-router-dom';

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
                            <span class="position-absolute top-0 start-100 translate-middle border border-dark bg-danger-subtle text-dark rounded-circle fw-bold d-flex align-items-center justify-content-center" style={{ width: "24px", height: "24px", fontSize: "14px" }}>
                                {totalQuantity()}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </Button>
                    </div>
                </Container>
            </Navbar>

            <Container className='d-flex justify-content-center align-items-center mt-2 translate-middle position-fixed start-50 top-20' style={{zIndex:"1090"}}>
                <Toast  onClose={() => setShow(false)} show={show} delay={1000} autohide>
                    <Toast.Body className="bg-primary-subtle text-center">Item Added</Toast.Body>
                </Toast>
            </Container>


            <Container className="mt-5 mb-5">
                <Row xs={1} sm={2} md={3} className="g-5">
                    {
                        itemList.map((i, index) => (
                            <ItemCard key={i.id} id={i.id} name={i.name} image={i.image} price={i.price} setShow={setShow} />
                        ))
                    }
                </Row>
            </Container>

            <Navbar className="border-top border-dark mt-4">
                <Container className="justify-content-center">
                    <Navbar.Text>
                        Copyright © 2025 Kartify.com. All rights reserved
                    </Navbar.Text>
                </Container>
            </Navbar>
        </>

    )
}
export default ItemPage;