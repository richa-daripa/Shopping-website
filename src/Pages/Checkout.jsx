import React, { useContext } from 'react';
import { StoreContext } from '../Context/ContextAPI';

const Checkout = () => {

    const {getTotalAmount, totalQuantity} = useContext(StoreContext);

    return (
        <div className='container mt-4 vh-100'>

            <h2 className='mt-4 mb-4 text-center p-2 mt-4' >Checkout form</h2>

            <div class="row mt-4">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Your cart </span>
                        <span class="badge badge-secondary badge-pill">{totalQuantity()}</span>
                    </h4>
                    <ul class="list-group mb-3">
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0">Subtotal</h6>
                            </div>
                            <span class="text-muted">₹{getTotalAmount()}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 class="my-0">Shipping fee</h6>
                                <small class="text-muted">Free on first order</small>
                            </div>
                            <span class="text-muted">₹0</span>
                        </li>
                        
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Total Amount</span>
                            <strong>₹{getTotalAmount() + 0}</strong>
                        </li>
                    </ul>
                     <button class="btn btn-success btn btn-block w-100" type="submit">PROCEED TO PAY</button>
                </div>

                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Billing address</h4>
                    <form >
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" required />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control"  required/>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="email" class="form-control"  placeholder="you@example.com" />
                        </div>

                        <div class="mb-3">
                            <label for="address">Address line 1</label>
                            <input type="text" class="form-control" placeholder="Apartment,Block,Street" required="" />
                        </div>

                        <div class="mb-3">
                            <label for="address2">Address line 2 <small class="text-muted">(Optional)</small></label>
                            <input type="text" class="form-control" id="address2" placeholder="Area,Location,Landmark" />
                        </div>

                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">Country</label>
                                <input type="text" class="form-control"  placeholder="India" readOnly/>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="state">State</label>
                                <select class="custom-select d-block w-100 p-1"  required>
                                    <option value="">Select</option>
                                    <option>Chennai</option>
                                    <option>Mumbai</option>
                                    <option>Bengaluru</option>
                                    <option>Hyderabad</option>
                                </select>
                                
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" required />
                            </div>
                        </div>
                        <hr class="mb-4" />
                        <div class="custom-control custom-checkbox ">
                            <input type="checkbox" class="custom-control-input me-2"  />
                            <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input me-2" />
                            <label class="custom-control-label" for="save-info">Save this information for next time</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Checkout;