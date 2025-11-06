import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0f172a",
    color: "white",
    padding: "40px 20px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle = { fontSize: "18px", fontWeight: "bold", marginBottom: "10px" };
  const linkStyle = { color: "#d1d5db", textDecoration: "none" };
  const hoverColor = (e) => (e.target.style.color = "#60a5fa");
  const normalColor = (e) => (e.target.style.color = "#d1d5db");

  return (
    <footer style={footerStyle}>
      <div style={gridStyle}>
        <div>
          <h2 style={headingStyle}>E-Commerce</h2>
          <p style={{ color: "#d1d5db" }}>
            Your one-stop shop for the latest trends in fashion, electronics, and lifestyle. Shop smart. Shop easy.
          </p>
        </div>

        <div>
          <h2 style={headingStyle}>Quick Links</h2>
          {["Home", "About", "Contact", "Dashboard"].map((text) => (
            <div key={text}>
              <a href="#" style={linkStyle} onMouseOver={hoverColor} onMouseOut={normalColor}>
                {text}
              </a>
            </div>
          ))}
        </div>

        <div>
          <h2 style={headingStyle}>Customer Service</h2>
          {["Privacy Policy", "Terms & Conditions", "Help & Support"].map((text) => (
            <div key={text}>
              <a href="#" style={linkStyle} onMouseOver={hoverColor} onMouseOut={normalColor}>
                {text}
              </a>
            </div>
          ))}
        </div>

        <div>
          <h2 style={headingStyle}>Contact Us</h2>
          <p style={{ color: "#d1d5db" }}> Lahore, Pakistan</p>
          <p style={{ color: "#d1d5db" }}>support@gmail.com</p>
          <p style={{ color: "#d1d5db" }}>+92 312 3456789</p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #4b5563",
          textAlign: "center",
          marginTop: "20px",
          paddingTop: "10px",
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        © 2025 E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
