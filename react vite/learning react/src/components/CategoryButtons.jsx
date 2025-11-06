import React from "react";

function CategoryButtons() {
  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Home & Furniture",
    "Beauty & Personal care",
    "Toys & Games",
    "Sports & Outdoors",
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "8px 16px",
    backgroundColor: "white",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {categories.map((cat, index) => (
        <button
          key={index}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#dbeafe")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
