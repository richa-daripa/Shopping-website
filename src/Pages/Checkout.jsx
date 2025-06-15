import React, { useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const Checkout = () => {
  const { cartItems, itemList, setCartItems, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/');
    setCartItems({});
  }

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center gap-4 mt-4">
        <i class="bi bi-check-circle-fill icon-size text-success mt-2"></i>
        <h2 className="text-center fw-bold">
          Thank you for your purchase
        </h2>

        <div className="container w-75 border shadow-sm py-2 px-4 rounded-3 bg-success-subtle">
          <p className="fs-4 text-success">Order Summary</p>
          <ul class="list-group list-group-flush overflow-y-auto mb-2 order-height ">
            {itemList
              .filter((item) => cartItems[item.id] > 0)
              .map((item, index) => (
                <li class="list-group-item py-3 ">
                  <div className="d-flex flex-row gap-2 align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-size"
                    />
                    <div className="flex-grow-1 ms-3">
                      <h5 className='me-2'>{item.name}</h5>
                      <p>Qty: {cartItems[item.id]}</p>
                      <small>Price: ₹{item.price}</small>
                    </div>
                    <span className="fw-bold me-2">
                      ₹{cartItems[item.id] * item.price}
                    </span>
                  </div>
                </li>
              ))}
            <li class="list-group-item d-flex fw-bold">
              <div className="flex-grow-1 text-end me-5">Total Amount:</div>
              <span className="me-2">₹{getTotalAmount()}</span>
            </li>
          </ul>
        </div>
        <Button variant="success" onClick={handleOrder}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
