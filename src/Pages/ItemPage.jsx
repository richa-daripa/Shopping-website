import React, { useState, useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../Component/ItemCard';
import { Container, Row, Navbar, Button, Toast,Dropdown } from 'react-bootstrap';
import '../style.css';
import { category_list } from '../itemList';

const ItemPage = ({category,setCategory}) => {
  const { itemList, totalQuantity } = useContext(StoreContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [visibleItemCount, setVisibleItemCount] = useState(8);

  

  const handleLoadMore = () => {
    setVisibleItemCount((prev) => prev + 6);
  }

  return (
    <>
      <Navbar className="bg-body-tertiary border-bottom border-2 border-success-subtle pt-2 shadow-sm sticky-top">
        <Container>
          <Navbar.Brand className="fw-bold text-success fs-2">
            Kartify
          </Navbar.Brand>
          <div className="d-flex gap-3">
            <Button
              className="bg-success-subtle border-0 text-success position-relative"
              onClick={() => navigate('/cart')}
            >
              <i className="bi bi-cart3 me-2 fs-5"></i>My Cart
              <span className="position-absolute top-0 start-100 translate-middle  bg-primary text-white rounded-circle fw-bold d-flex align-items-center justify-content-center number-badge">
                {totalQuantity()}
              </span>
            </Button>
          </div>
        </Container>
      </Navbar>

      <Container
        className="d-flex justify-content-center align-items-center mt-2 translate-middle position-fixed start-50 top-20"
        style={{ zIndex: '1090' }}
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={1000}
          autohide
          className="rounded-5"
        >
          <Toast.Body className="bg-dark opacity-75 text-center text-white rounded-pill">
            Item Added To Cart
          </Toast.Body>
        </Toast>
      </Container>

      {itemList.length > 0 ? (
        <Container className="mt-5 mb-5">
          <Dropdown align="end" className='end-0 mb-4 d-flex justify-content-end '>
            <Dropdown.Toggle variant="outline-success" >
              Category 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
                category_list.map((cat,index)=>(
                  <Dropdown.Item onClick={()=>setCategory((prev)=>prev===cat?"All":cat)} active={category===cat}>{cat}</Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>

          <Row xs={1} sm={2} md={3} className="g-5">
            {itemList.slice(0, visibleItemCount).map((i, index) => {
              if(category==="All" || category===i.category){
                return (<ItemCard
                key={i.id}
                id={i.id}
                name={i.name}
                image={i.image}
                price={i.price}
                setShow={setShow}
              />
                );
              }
              return null;
            }
              
            )}
          </Row>
          {
            visibleItemCount < itemList.length && (
              <div className="text-center mt-5">
                <Button className=" border-1 rounded-0 bg-light text-secondary" onClick={handleLoadMore}>Load More</Button>
              </div>
            )
          }
        </Container>
      ) : (
        <h4 className="text-center mt-4 pt-4 vh-100">
          Failed to load the content. Try again later
        </h4>
      )}
    </>
  );
};
export default ItemPage;