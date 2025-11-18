// src/components/ProductGrid.jsx
import React from "react";
import bag from "../assets/bag.png";
import ring from "../assets/ring.png";
import earring from "../assets/earring.png";
import sil from "../assets/sil.png";
import shirt from "../assets/shirt.png";
import tshirt from "../assets/tshirt.png";
import gold from "../assets/gold.png";
import thing from "../assets/thing.png";
import { useCart } from "../context/CartContext.jsx";
import { toast } from "react-toastify";
import { useWishlist } from "../context/WishlistContext";

function ProductGrid({ searchQuery = "" }) {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const products = [
    { title: "Fjallraven- Foldsac", price: 109.95, desc: "Your perfect pack for everyday use and walks in the forest.", img: bag },
    { title: "Mens Casual Premium", price: 22.3, desc: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket.", img: ring },
    { title: "Mens Cotton Jacket", price: 55.99, desc: "Great outerwear jackets for Spring/Autumn/Winter.", img: earring },
    { title: "Mens Casual Slim Fit", price: 15.99, desc: "The color could be slightly different between on screen and in practice.", img: tshirt },
    { title: "Casual Shirt", price: 45.0, desc: "Comfortable daily wear shirt.", img: shirt },
    { title: "Silver Chain", price: 80.0, desc: "Stylish silver chain.", img: sil },
    { title: "Gold Ring", price: 150.0, desc: "Elegant gold ring.", img: gold },
    { title: "Fashion Accessory", price: 30.0, desc: "Trendy accessory.", img: thing },
    { title: "Gold Ring", price: 150.0, desc: "Elegant gold ring.", img: gold },
    { title: "Fashion Accessory", price: 30.0, desc: "Trendy accessory.", img: thing },
  ];

  const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "20px" };
  const cardStyle = { background: "#fff", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between" };
  
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={gridStyle}>
      {(filteredProducts || []).map((p, i) => (         
        <div key={i} style={cardStyle}>
          <img src={p.img} alt={p.title} style={{ height: 200, objectFit: "contain", marginTop: 10 }} />
          <div style={{ padding: 15 }}>
            <h2 style={{ fontSize: 18, fontWeight: "bold" }}>{p.title}</h2>
            <p style={{ color: "#2563eb", fontWeight: 600 }}>${p.price}</p>
            <p style={{ color: "#555", fontSize: 14, margin: "10px 0" }}>{p.desc}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 15 }}>
              <button
                style={{ backgroundColor: "green", color: "#fff", padding: "10px 0", border: "none", borderRadius: 6, cursor: "pointer" }}
               onClick={() => {
                  addToCart(p);
                  toast.success(`${p.title} added to cart`);
               }}>Add to Cart</button>

              <button
                style={{ backgroundColor: "red", color: "#fff", padding: "10px 0", border: "none", borderRadius: 6, cursor: "pointer" }}
                onClick={() => {
                  addToWishlist(p);
                  toast.success(`${p.title} added to wishlist`);
                }}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
