import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useCart } from 'react-use-cart'; 

function Checkout() {
	const { items } = useCart();
	// Calculate the total price of items in the cart
	const orderTotal = items.reduce((total, item) => total + (item.quantity * item.price), 0);
	// const displayTotal = discountedTotal === 'N/A' ? orderTotal : discountedTotal;
	const [billingDetails, setBillingDetails] = useState({
    c_fname: "",
    c_lname: "",
    c_companyname: "",
    c_address: "",
    // ...other billing fields
  });

	const navigate = useNavigate(); 

  const handlePlaceOrder = () => {
		// Check if any required fields are empty
		if (
			!billingDetails.c_fname ||
			!billingDetails.c_lname ||
			!billingDetails.c_address ||
			!billingDetails.c_email_address ||
			!billingDetails.c_phone
		) {
			alert('Please fill out all required fields');
			return;
		}
	
		// Send a POST request to your API endpoint
		axios
			.post(`${global.config.apiUrl}checkout`, billingDetails)
			.then((response) => {
				if (response.data.success) {
					navigate("/thankYou");
				} else {
					console.error("Failed to place the order:", response.data.error);
				}
			})
			.catch((error) => {
				console.error("Error placing the order:", error);
			});
	};
	

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
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
								
								<div className="form-group row">
									<div className="col-md-6">
										<label for="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
										<input
										 type="text"
										 className="form-control"
										 id="c_fname"
										name="c_fname" 
										value={billingDetails.c_fname} 
										onChange={handleInputChange}
										 required/>
									</div>
									<div className="col-md-6">
										<label for="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="c_lname" name="c_lname" required/>
									</div>
								</div>

								<div className="form-group row">
									<div className="col-md-12">
										<label for="c_companyname" className="text-black">Company Name </label>
										<input type="text" className="form-control" id="c_companyname" name="c_companyname" />
									</div>
								</div>

								<div className="form-group row">
									<div className="col-md-12">
										<label for="c_address" className="text-black">Address <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="c_address" name="c_address" placeholder="Street address" required/>
									</div>
								</div>

								<div className="form-group mt-3">
									<input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
								</div>

								<div className="form-group row">
									<div className="col-md-6">
										<label for="c_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="c_state_country" name="c_state_country" />
									</div>
									<div className="col-md-6">
										<label for="c_postal_zip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="c_postal_zip" name="c_postal_zip" />
									</div>
								</div>

								<div className="form-group row ">
									<div className="col-md-6">
										<label for="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="c_email_address" name="c_email_address" required/>
									</div>
									<div className="col-md-6">
										<label for="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
										<input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" required/>
									</div>
				
								<div className="col-md-12">
									<label for="c_order_notes" className="text-black">Order Notes</label>
									<textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Write your notes here..."></textarea>
								</div>
								</div>
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
													<tr>
														<td className="text-black font-weight-bold"><strong>Discount</strong></td>
														<td className="text-black">
														$0
														</td>
													</tr>
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
															onClick={handlePlaceOrder}
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