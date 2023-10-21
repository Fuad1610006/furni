import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Layout/dashboardFooter";
import { useParams } from "react-router-dom";


function Order() {
const { orderId } = useParams();
// Fetch the order details based on the orderId
const [orderDetails, setOrderDetails] = useState({});
useEffect(() => {
  axios.get(`${global.config.apiUrl}order/${orderId}`).then((response) => {
    if (response.data.success) {
      const orderDetails = response.data.orderDetails;
      // Set the order details in the component's state for rendering
      setOrderDetails(orderDetails);
    } else {
      console.error("Failed to retrieve order details:", response.data.error);
    }
  });
}, [orderId]);


 

return (
  <>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2 className="h3 mb-3 text-black">Order Details</h2>
        <div className="p-3 p-lg-5 border bg-white">
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="c_fname" className="text-black">
                First Name
              </label>
              <p>{orderDetails.c_fname}</p>
            </div>
            <div className="col-md-6">
              <label htmlFor="c_lname" className="text-black">
                Last Name
              </label>
              <p>{orderDetails.c_lname}</p>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="c_companyname" className="text-black">
              Company Name
            </label>
            <p>{orderDetails.c_companyname}</p>
          </div>

          <div className="form-group">
            <label htmlFor="c_address" className="text-black">
              Address
            </label>
            <p>{orderDetails.c_address}</p>
          </div>

          <div className="form-group">
            <label htmlFor="c_state_country" className="text-black">
              State / Country
            </label>
            <p>{orderDetails.c_state_country}</p>
          </div>

          <div className="form-group">
            <label htmlFor="c_postal_zip" className="text-black">
              Postal / Zip
            </label>
            <p>{orderDetails.c_postal_zip}</p>
          </div>

          <div className="form-group">
            <label htmlFor="c_email_address" className="text-black">
              Email Address
            </label>
            <p>{orderDetails.c_email_address}</p>
          </div>

          <div className="form-group">
            <label htmlFor="c_phone" className="text-black">
              Phone
            </label>
            <p>{orderDetails.c_phone}</p>
          </div>

          <div className="form-group">
            <label htmlFor="c_order_notes" className="text-black">
              Order Notes
            </label>
            <p>{orderDetails.c_order_notes}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
   <Footer />
   </>
)
}

export default Order;
   