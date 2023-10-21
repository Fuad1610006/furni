import { useEffect, useState } from "react";
import Sidebar from '../Layout/sidebar';
import Footer from "../Layout/dashboardFooter";

export default function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);

    function getOrders() {
        // Use the fetch method to retrieve data
        fetch(`${global.config.apiUrl}order`)
            .then(response => response.json())
            .then(data => {
                setOrders(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const deleteOrder = (id) => {
        // Use the fetch method to delete data
        fetch(`${global.config.apiUrl}order/delete/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                getOrders();
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
    }

    return (
        <div>
            <Sidebar />
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
                                                <a href="javascript:void(0)" className="btn btn-danger btn-xs" onClick={() => deleteOrder(order.order_id)}>Delete</a>
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
