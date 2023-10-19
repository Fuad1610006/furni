import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { fetchCoupons } from '../api/fetchCoupons';

function Cart() {
  const [couponCode, setCouponCode] = useState('');
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  useEffect(() => {
    async function fetchAvailableCoupons() {
      try {
        const coupons = await fetchCoupons();
        setAvailableCoupons(coupons);
      } catch (error) {
        console.error('Error fetching coupons:', error);
      }
    }

    fetchAvailableCoupons();
  }, []);

  const applyCoupon = () => {
    const selectedCoupon = availableCoupons.find((coupon) => coupon.code === couponCode);

    if (selectedCoupon) {
      setAppliedCoupon(selectedCoupon);
    } else {
      setAppliedCoupon(null);
    }
  };

  // Calculate the discounted total based on the applied coupon
  const discountedTotal = appliedCoupon
    ? Math.round(cartTotal * (1 - appliedCoupon.discount / 100))
    : cartTotal;

  return (
    <>
      <Header />
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isEmpty ? (
                      <tr>
                        <td colSpan="6">Your cart is empty.</td>
                      </tr>
                    ) : (
                      items.map((item) => (
                        <tr key={item.id}>
                          <td className="product-thumbnail">
                            <img
                              src={`${global.config.apiUrl}${item.image}`}  
                              alt="Product"
                              className="img-fluid"
                            />
                          </td>
                          <td className="product-name">
                            <h2 className="h5 text-black">{item.name}</h2>
                          </td>
                          <td>${item.price}</td>
                          <td>
                            <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: '120px' }}>
                              <div className="input-group-prepend">
                                <button
                                  className="btn btn-outline-black decrease"
                                  type="button"
                                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                >
                                  <span>-</span>
                                </button>
                              </div>
                              <input
                                type="text"
                                className="form-control text-center quantity-amount"
                                value={item.quantity}
                                readOnly
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-outline-black increase"
                                  type="button"
                                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                >
                                  <span>+</span>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>${item.quantity * item.price}</td>
                          <td>
                            <button
                              className="btn btn-black btn-sm"
                              onClick={() => removeItem(item.id)}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">
                    Coupon
                  </label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input
                    type="text"
                    className="form-control py-3"
                    id="coupon"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                </div>
                <div className="col-md-4 py-2">
                  <button className="btn btn-black" onClick={applyCoupon}>
                    Apply Coupon
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="col-md-12 mt-3">
                    <div className="alert alert-success">
                      Coupon applied successfully! Discount has been applied.
                    </div>
                  </div>
                )}
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
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Discount</span>
                    </div>
                    <div className="col-md-6 text-right">
                      {appliedCoupon ? (
                        <strong className="text-black">
                          ${cartTotal - discountedTotal}
                        </strong>
                      ) : (
                        <span className="text-black">N/A</span>
                      )}
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${discountedTotal}</strong>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to="/checkout">
                        <button className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
