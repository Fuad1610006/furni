import React from 'react';
import Sidebar from '../Layout/sidebar';
import Footer from '../Layout/footer';
function Dashboard() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    return (
        <div>
            <Sidebar />

            <div className="dashboard-content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        Dashboard
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container mt-4">
                    <h1>Welcome to the Admin Panel</h1>
                    <p>This is a gorgeous admin panel dashboard with a sidebar and premium features.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Dashboard;