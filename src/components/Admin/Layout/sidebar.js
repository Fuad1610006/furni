import React from 'react';
import './layout.css';

function Sidebar() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

    return (
        <div className="dashboard-sidebar">
            <div className="dashboard-user-image">
                <img src={`http://localhost/Furni/${userLogged.image}`} alt="user" />
            </div>
            <a className="navbar-brand" href="#"> {userLogged.name}</a>
            <hr style={{ backgroundColor: '#ffffff' }} />
            <a href="#" className="dashboard-nav-link">
                Admin Dashboard
            </a>
            <a href="./Product" className="dashboard-nav-link">
                Product
            </a>
            <a href="./" className="dashboard-nav-link">
                Home Page
            </a>
        </div>
    );
}

export default Sidebar;