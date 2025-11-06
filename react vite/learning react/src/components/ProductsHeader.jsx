import React from "react";

function ProductsHeader() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
        Our Products
      </h1>
      <input
        type="text"
        placeholder="Search Products..."
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
    </div>
  );
}

export default ProductsHeader;
