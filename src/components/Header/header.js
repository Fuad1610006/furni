import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Admin/Auth/auth";
import { useCart } from "react-use-cart";

function Header() {
  const navigate = useNavigate();
  const { totalUniqueItems } = useCart();
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });

  const signout = () => {
    setIsSignedIn(false);
    logout();
    navigate("/");
  };

  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to show the dropdown menu with a delay
  const handleUserIconHover = () => {
    // Show the dropdown menu immediately
    setShowDropdown(true);
  };

  // Function to hide the dropdown menu after 3 seconds
  const handleUserIconLeave = () => {
    setTimeout(() => {
      setShowDropdown(false);
    }, 6000); // Hide dropdown after 6 seconds
  };

  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        <a className="navbar-brand" href="./">
          Furni<span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link" activeClassName="active">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blogPage" className="nav-link" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                Contact us
              </NavLink>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li className="nav-item dropdown">
               <NavLink to="/cart" className="nav-link">
                <img src="assets/images/cart.svg" alt="Cart" />
                {totalUniqueItems > 0 && (
                  <span className="cart-item-count">{totalUniqueItems}</span>
                )}
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link"
                onMouseEnter={handleUserIconHover} // Add event handler for mouse enter
                onMouseLeave={handleUserIconLeave} // Add event handler for mouse leave
              >
                <img src="assets/images/user.svg" alt="User" />
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                  {isSignedIn ? (
                    <>
                      <NavLink to="/" className="dropdown-item" onClick={signout}>
                        Sign out
                      </NavLink>                    
                    </>
                  ) : (
                    <>
                      <NavLink to="/signin" className="dropdown-item">
                        Sign in
                      </NavLink>     
                      <NavLink to="/dashboard" className="dropdown-item">
                        Dashboard
                      </NavLink>                    
                    </>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
