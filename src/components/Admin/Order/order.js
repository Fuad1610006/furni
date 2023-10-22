import { useEffect, useState } from "react";
import Footer from "../Layout/dashboardFooter";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  function getOrders() {
    axios
      .get(`${global.config.apiUrl}order`)
      .then(function (response) {
        if (response.data.status === 1 && Array.isArray(response.data.data)) {
          setOrders(response.data.data);
        } else {
          console.error(
            "API response does not contain the expected data structure:",
            response.data
          );
        }
      })
      .catch(function (error) {
        console.error("Error fetching orders:", error);
      });
  }
  const approveOrder = (orderId) => {
    // You can implement the logic to approve the order here
    // For this example, we're just logging the order ID
    console.log("Order approved: " + orderId);
  };
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              <small>Order List</small>
            </h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Zip</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order, key) => (
                    <tr key={key}>
                      <td>{order.order_id}</td>
                      <td>{order.first_name}</td>
                      <td>{order.last_name}</td>
                      <td>{order.email}</td>
                      <td>{order.address}</td>
                      <td>{order.phone}</td>
                      <td>{order.zip}</td>
                      <td>
                        <Link
                          to={`/order/${order.order_id}`} // Replace with your actual route
                          className="btn btn-primary btn-xs"
                        >
                          View
                        </Link>
                        <button
                          className="btn btn-success btn-xs"
                          onClick={() => approveOrder(order.order_id)}
                        >
                          Approve
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No orders available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
