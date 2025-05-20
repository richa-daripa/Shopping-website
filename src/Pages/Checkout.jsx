import React, { useState, useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

const Checkout = () => {
  const { cartItems, itemList,  setCartItems, getTotalAmount } = useContext(StoreContext);
  const [showPlacedOrder, setShowPlacedOrder] = useState(false);
  const navigate = useNavigate();

  const handleOrder=()=>{
    navigate('/');
    setCartItems({});
  }

  return (
    <div className="container mt-4 text-center">
      <h2 className="mt-4 mb-4 text-center p-5 mt-4">Your Order Summary</h2>
      <table className="table table-bordered table-striped table-hover ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price per item(₹)</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {itemList
            .filter((item) => cartItems[item.id] > 0)
            .map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} alt={item.name} width="100" />
                </td>
                <td>{cartItems[item.id]}</td>
                <td>{item.price}</td>
              </tr>
            ))}

          <tr>
            <td colSpan={3} className="text-end fw-bold">
              Total Amount
            </td>
            <td className="fw-bold">{getTotalAmount()}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex align-items-center justify-content-center gap-4 mt-5">
        <Button variant="success" onClick={() => navigate('/cart')}>
          Back to Cart
        </Button>
        <Button variant="success" onClick={()=>setShowPlacedOrder(true)}>Place Order</Button>
      </div>
      <Modal
        show={showPlacedOrder}
        onHide={() => setShowPlacedOrder(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="p-4 bg-success-subtle">
          <div className="text-center">
            <h5>Your order has been placed successfully</h5>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-4'>
            <Button className="bg-success" onClick={handleOrder}>Back to Home</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Checkout;
