import React from "react";
import logo from "../assets/logo.png";
import "../index.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1e1b4b",
    color: "white",
    padding: "12px 40px",
    fontFamily: "Arial, sans-serif",
    width: "100%",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const logoStyle = {
    width: "50px",
    height: "50px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const centerStyle = {
    flex: 1,
    textAlign: "center",
  };

  const linkListStyle = {
    listStyle: "none",
    display: "inline-flex",
    gap: "30px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: 500,
    transition: "color 0.3s ease",
  };

  const rightStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const iconGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const iconLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
    display: "inline-flex",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: "#1e3a8a",
    color: "white",
    padding: "8px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 500,
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  const handleDashboardRedirect = () => {
    navigate("/login");
  };

  return (
    <header style={navbarStyle}>
      <div style={leftStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <h1 style={titleStyle}>E-commerce</h1>
      </div>

      <nav style={centerStyle}>
        <ul style={linkListStyle}>
          <li>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={linkStyle}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div style={rightStyle}>
        <div style={iconGroupStyle}>
          <Link to="/wishlist" style={iconLinkStyle}>
            <i className="fa-solid fa-heart"></i>
          </Link>
          <Link to="/cart" style={iconLinkStyle}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>

        <button
          onClick={handleDashboardRedirect}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#4338ca")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1e3a8a")}
        >
          Admin Dashboard
        </button>
      </div>
    </header>
  );
}

export default Navbar;
