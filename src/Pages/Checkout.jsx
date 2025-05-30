import React, {  useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import '../style.css';

const Checkout = () => {
  const { cartItems, itemList,  setCartItems, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleOrder=()=>{
    navigate('/');
    setCartItems({});
  }

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center gap-4 mt-4">
      <i class="bi bi-check-circle-fill icon-size text-success mt-4"></i>
      <h2 className="mb-4 text-center fw-bold">Thank you for your purchase</h2>
      
        <div className="container w-75 border shadow-sm py-2 px-4 rounded-3 bg-success-subtle">
        <p className="fs-4 text-success">Order Summary</p>
      <table className="table table-bordered bg-success border-success table-sm mx-auto">
        <thead >
          <tr >
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price per item(₹)</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {itemList
            .filter((item) => cartItems[item.id] > 0)
            .map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{cartItems[item.id]}</td>
                <td>{item.price}</td>
                <td>{cartItems[item.id]*item.price}</td>
              </tr>
            ))}

          <tr>
            <td colSpan={3} className="text-end fw-bold">
              Total Amount (₹)
            </td>
            <td className="fw-bold">{getTotalAmount()}</td>
          </tr>
        </tbody>
      </table>
        </div>
        <Button variant="success" onClick={handleOrder}>
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
