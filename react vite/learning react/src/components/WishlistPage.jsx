import React from "react";
import { toast } from "react-toastify";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  };

  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center", fontSize: 32, marginBottom: 24 }}>
        Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your wishlist is empty.</p>
      ) : (
        <div style={gridStyle}>
          {wishlistItems.map((item, idx) => (
            <article key={idx} style={cardStyle}>
              
              <img
                src={item.img}
                alt={item.title}
                style={{ height: 200, objectFit: "contain", marginTop: 10 }}
              />

              <h2 style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</h2>
              <p style={{ color: "#2563eb", fontWeight: 600 }}>${item.price}</p>
              <p style={{ color: "#555", fontSize: 14, margin: "10px 0" }}>
                {item.desc}
              </p>

              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <button
                  style={{
                    background: "green",
                    color: "#fff",
                    padding: "10px 0",
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    addToCart(item);
                    toast.success(`${item.title} added to cart`);
                  }}
                >
                  Add to Cart
                </button>

                <button
                  style={{
                    background: "red",
                    color: "#fff",
                    padding: "10px 0",
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    removeFromWishlist(item.title);
                    toast.info(`${item.title} removed from wishlist`);
                  }}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default WishlistPage;
