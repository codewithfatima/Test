import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">MyStore</h1>
        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
          </li>
        </ul>
      </div>
    </nav>
    
    </>
  );
};

export default Navbar;
