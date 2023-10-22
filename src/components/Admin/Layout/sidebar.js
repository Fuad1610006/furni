import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './layout.css';

function Sidebar() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

    return (
        <div className="dashboard-sidebar">
            <div className="dashboard-user-image">
                <img src={`${global.config.apiUrl}upload/img/user/${userLogged.image}`} alt="user" />
            </div>
            <Link to="#" className="navbar-brand">
                {userLogged.name}
            </Link>
            <hr style={{ backgroundColor: '#ffffff' }} />
            <Link to="/Dashboard" className="dashboard-nav-link">
                Admin Dashboard
            </Link>
            <Link to="/product" className="dashboard-nav-link">
                Product
            </Link>
            <Link to="/shop" className="dashboard-nav-link">
                Shop
            </Link>
            <Link to="/coupon" className="dashboard-nav-link">
                Coupon
            </Link>
            <Link to="/order" className="dashboard-nav-link">
                Orders
            </Link>
            <Link to="/" className="dashboard-nav-link">
                Home Page
            </Link>
        </div>
    );
}

export default Sidebar;
