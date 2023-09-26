import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useCart } from 'react-use-cart'; // Import useCart
import { Link } from 'react-router-dom';

function Cart() {
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart(); // Initialize the cart

  return (
    <>
      <Header />
      {items.map((item) => (
        <tr key={item.id}>
          <td className="product-thumbnail">
            <img src={item.image} alt={item.name} className="img-fluid" />
          </td>
          <td className="product-name">
            <h2 className="h5 text-black">{item.name}</h2>
          </td>
          <td>${item.price}</td>
          <td>
            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: "120px" }}>
              <div className="input-group-prepend">
                <button className="btn btn-outline-black decrease" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
              </div>
              <input type="text" className="form-control text-center quantity-amount" value={item.quantity} placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
              <div className="input-group-append">
                <button className="btn btn-outline-black increase" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><span>+</span></button>
              </div>
            </div>
          </td>
          <td>${item.itemTotal}</td>
          <td><button className="btn btn-black btn-sm" onClick={() => removeItem(item.id)}>X</button></td>
        </tr>
      ))}

      <div className="row">
        <div className="col-md-6">
          <div className="row mb-5">
            <div className="col-md-6 mb-3 mb-md-0">
              <button className="btn btn-black btn-sm btn-block">Update Cart</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label className="text-black h4" for="coupon">Coupon</label>
              <p>Enter your coupon code if you have one.</p>
            </div>
            <div className="col-md-8 mb-3 mb-md-0">
              <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
            </div>
            <div className="col-md-4">
              <button className="btn btn-black">Apply Coupon</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 pl-5">
          <div className="row justify-content-end">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 text-right border-bottom mb-5">
                  <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <span className="text-black">Subtotal</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">${cartTotal}</strong>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6">
                  <span className="text-black">Total</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">${cartTotal}</strong>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <Link to="/checkout" className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <Footer />
    </>
  )
}
export default Cart