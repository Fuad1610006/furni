import React,{useState} from 'react';
import { Link, useNavigate} from 'react-router-dom'; // Import Link from React Router
import { logout } from "../Auth/auth";
import Sidebar from '../Layout/sidebar';
import Footer from '../Layout/dashboardFooter';

function Dashboard() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    const navigate = useNavigate();

    const [isSignedIn, setIsSignedIn] = useState(() => {
        const userLogged = localStorage.getItem("access_token");
        return userLogged || false;
      });

    const signout = () => {
        setIsSignedIn(false);
        logout();
        navigate("/");
      };
    return (
        <div>
            <Sidebar />
          
            <div className="dashboard-content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/dashboard" className="navbar-brand"> {/* Use Link for Dashboard */}
                        Dashboard
                    </Link>
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
                                <Link to="/profile" className="nav-link"> {/* Use Link for Profile */}
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={signout}>
                                    Logout
                                </Link>
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
