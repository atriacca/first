import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <div className="navBar">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/services">Services</Link>
        </div>
      </nav>
    )
}

export default Navbar;