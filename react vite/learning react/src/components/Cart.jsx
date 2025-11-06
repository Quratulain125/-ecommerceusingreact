import React from "react";
import CheckoutPage from "../pages/CheckoutPage";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems = [], removeFromCart = () => {}, changeQuantity = () => {} }) {
  const total = (cartItems || []).reduce((acc, it) => acc + (Number(it.price) || 0) * (it.quantity || 1), 0);
 const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 24 }}>Your Cart</h1>

      {(cartItems || []).length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f3f4f6", textAlign: "left" }}>
                <th style={{ padding: 12 }}>Title</th>
                <th style={{ padding: 12 }}>Price</th>
                <th style={{ padding: 12 }}>Quantity</th>
                <th style={{ padding: 12 }}>Subtotal</th>
                <th style={{ padding: 12 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(cartItems || []).map((item, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: 12 }}>{item.title}</td>
                  <td style={{ padding: 12 }}>${Number(item.price).toFixed(2)}</td>
                  <td style={{ padding: 12 }}>
                    <button onClick={() => changeQuantity(item.title, -1)}>-</button>
                    <span style={{ margin: "0 10px" }}>{item.quantity || 1}</span>
                    <button onClick={() => changeQuantity(item.title, 1)}>+</button>
                  </td>
                  <td style={{ padding: 12 }}>${((Number(item.price) || 0) * (item.quantity || 1)).toFixed(2)}</td>
                  <td style={{ padding: 12 }}>
                    <button style={{ background: "#ef4444", color: "#fff", border: "none", padding: "6px 12px", borderRadius: 4, cursor: "pointer" }} onClick={() => removeFromCart(item.title)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
       
      
          <div style={{ padding: 16, textAlign: "right" }}>
            <h2>Total: ${total.toFixed(2)}</h2>
             <button
          onClick={handleCheckout}
style={{ background: "blue", color: "#fff", border: "none", padding: "6px 12px", borderRadius: 4, cursor: "pointer", margin:"5px" }}        >
           Checkout
        </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
