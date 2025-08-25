// Import React for creating functional components
import React from "react";

// Import NavLink from react-router-dom to handle navigation between routes
import { NavLink } from "react-router-dom";

// Import Bootstrap CSS for styling the navbar
import "bootstrap/dist/css/bootstrap.min.css";

// Define a functional component called Navbar
const Navbar = () => {
  return (
    // Bootstrap navbar with light background and shadow
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        
        {/* Brand name / logo link (navigates to Home page "/") */}
        <NavLink className="navbar-brand fw-bold" to="/">
          Income Tax Department
        </NavLink>

        {/* Button for toggling navbar on small screens (hamburger menu) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"        // Tells Bootstrap to collapse
          data-bs-target="#navbarNav"      // Matches the collapse div ID
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Align nav items to the right (ms-auto = margin start auto) */}
          <ul className="navbar-nav ms-auto">

            {/* Home link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            {/* Add Taxpayer link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-taxpayer">
                Add Taxpayer
              </NavLink>
            </li>

            {/* Taxpayer List link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/taxpayer-list">
                Taxpayer List
              </NavLink>
            </li>

            {/* Calculate Tax link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculate-tax">
                Calculate Tax
              </NavLink>
            </li>

            {/* Tax Rates link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/tax-rates">
                Tax Rates
              </NavLink>
            </li>

            {/* Contact link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>

            {/* About link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            {/* FAQ link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/faq">
                FAQ
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

// Export Navbar so it can be imported in other files (like App.js)
export default Navbar;
