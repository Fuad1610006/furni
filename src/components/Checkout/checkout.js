import React from 'react';
// import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useCart } from 'react-use-cart'; 

function Checkout() {
	const { cartTotal, items,emptyCart  } = useCart();
	
	const navigate = useNavigate();
	
	const orderTotal = items.reduce((total, item) => total + (item.quantity * item.price), 0);
	const placeOrder = async () => {
	 
		try {
		  const orderData = {
			first_name: document.getElementById('firstName').value,
			last_name: document.getElementById('lastName').value,
			email: document.getElementById('email').value,
			phone:  document.getElementById('phone').value,
			address: document.getElementById('address').value,
			district: document.getElementById('district').value,
			zip: document.getElementById('zip').value,
			order_notes: document.getElementById('order_notes').value,
			items: items,
			// sub_total: cartTotal.toFixed(2),
			// discount: totalDiscount.toFixed(2),
			total: orderTotal,
		  };
		  const response = await fetch(`${global.config.apiUrl}order/create`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(orderData), // Assuming 'inputs' contains the data you want to send
		  });
		  const data = await response.json();
		  console.log(data);
  
		  if (data.status == 1) {
			// Order was successfully placed
			alert('Order placed successfully!');
			emptyCart();
			navigate('/thankYou');
			// You can perform further actions, such as clearing the cart
		  } else {
			// Order placement failed
			alert('Failed to place the order. Please try again.');
		  }
		} catch (error) {
		  // Handle errors here, e.g., network issues or server errors
		  console.error(error);
		}
	};

	return (
		<>
			<Header />

			<div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Checkout</h1>
							</div>
						</div>
						<div className="col-lg-7">
						</div>
					</div>
				</div>
			</div>

			<div className="untree_co-section">
				<div className="container">
					
					<div className="row">
						<div className="col-md-6 mb-5 mb-md-0">
							<h2 className="h3 mb-3 text-black">Billing Details</h2>
							<div className="p-3 p-lg-5 border bg-white">
								<form>
								<div className="form-group row">
									<div className="col-md-6">
										<label for="firstName" className="text-black">First Name <span className="text-danger">*</span></label>
										<input
										 type="text"
										 className="form-control"
										 id="firstName"
										name="firstName" 
										 required/>
									</div>
									<div className="col-md-6">
										<label for="lastName" className="text-black">Last Name <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="lastName" name="lastName" required/>
									</div>
								</div>

								

								<div className="form-group row">
									<div className="col-md-12">
										<label for="address" className="text-black">Address <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="address" name="address" placeholder="Street address" required/>
									</div>
								</div>

							
								<div className="form-group row">
									<div className="col-md-6">
										<label for="district" className="text-black">District <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="district" name="district" />
									</div>
									<div className="col-md-6">
										<label for="zip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="zip" name="zip" />
									</div>
								</div>

								<div className="form-group row ">
									<div className="col-md-6">
										<label for="email" className="text-black">Email Address <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="email" name="email" required/>
									</div>
									<div className="col-md-6">
										<label for="phone" className="text-black">Phone <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="phone" name="phone" placeholder="Phone Number" required/>
									</div>
				
								<div className="col-md-12">
									<label for="order_notes" className="text-black">Order Notes</label>
									<textarea name="order_notes" id="order_notes" cols="30" rows="5" className="form-control" placeholder="Write your notes here..."></textarea>
								</div>
								</div>						
								</form>
								</div>
						</div>
						
						<div className="col-md-6">
								<div className="row mb-5">
									<div className="col-md-12">
										<h2 className="h3 mb-3 text-black">Your Order</h2>
										<div className="p-3 p-lg-5 border bg-white">
											<table className="table site-block-order-table mb-5">
												<thead>
													<th>Product</th>
													<th>Total</th>
												</thead>
												<tbody>
													{items.map((item) => (
														<tr key={item.id}>
															<td>
																{item.name} <strong className="mx-2">x</strong> {item.quantity}
															</td>
															<td>${(item.quantity * item.price)}</td>
														</tr>
													))}
													<tr>
														<td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
														<td className="text-black">${orderTotal}</td>
													</tr>
													{/* <tr>
														<td className="text-black font-weight-bold"><strong>Discount</strong></td>
														<td className="text-black">
														$0
														</td>
													</tr> */}
													<tr>
														<td className="text-black font-weight-bold"><strong>Order Total</strong></td>
														<td className="text-black font-weight-bold">
														<strong>
														<strong>${orderTotal}</strong>
														</strong>
													</td>
												</tr>
												</tbody>
											</table>

											<div className="border p-3 mb-3">
												<h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>

												<div className="collapse" id="collapsebank">
													<div className="py-2">
														<p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
													</div>
												</div>
											</div>

											<div className="border p-3 mb-3">
												<h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>

												<div className="collapse" id="collapsecheque">
													<div className="py-2">
														<p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
													</div>
												</div>
											</div>

											<div className="border p-3 mb-5">
												<h3 className="h6 mb-0"><a className="d-block" data-bs-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>

												<div className="collapse" id="collapsepaypal">
													<div className="py-2">
														<p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
													</div>
												</div>
											</div>

														<button
															className="btn btn-black btn-lg py-3 btn-block"
															onClick={placeOrder}
														>
															Place Order
														</button>

										</div>
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

			export default Checkout