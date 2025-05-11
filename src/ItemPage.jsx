import React, { useContext } from 'react';
//import { itemList } from './itemList';
import ItemCard from './ItemCard';
import { Container, Row, Navbar,Button } from 'react-bootstrap';
import { StoreContext } from './ContextAPI';
import { useNavigate } from 'react-router-dom';

const ItemPage = () => {
    const {itemList, getTotalAmount}=useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <>
            <Navbar className="bg-body-tertiary border-bottom border-dark-subtle">
                <Container>
                    <Navbar.Brand className='fw-bold text-success fs-2'>
                        Kartify
                    </Navbar.Brand>
                    <div className="text-end d-flex gap-2 ">
                        <Button className="bg-success-subtle border-0 text-success" onClick={() => navigate('/cart')}><i class="bi bi-cart3 me-2 fs-5"></i>My Cart</Button>
                        <Button variant="success">Total cost :₹ {getTotalAmount()} </Button>
                    </div>
                </Container>
            </Navbar>
            <Container className="mt-5 mb-5">
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {
                        itemList.map((i, index) => (
                            <ItemCard key={index} id={i.id} name={i.name} image={i.image} price={i.price} />
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