import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    payment: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order details:', formData);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
          <div className="text-center">
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed!</h2>
            <p className="text-gray-600 mb-4">Thank you for your order. We'll process it shortly.</p>
            <button
              onClick={() => setOrderPlaced(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition"
            >
              Place Another Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center mb-8">Checkout</h2>
   <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="name"
          style={{ fontSize: "14px", fontWeight: "500", color: "#333", marginBottom: "6px" }}
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="email"
          style={{ fontSize: "14px", fontWeight: "500", color: "#333", marginBottom: "6px" }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="phone"
          style={{ fontSize: "14px", fontWeight: "500", color: "#333", marginBottom: "6px" }}
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="address"
          style={{ fontSize: "14px", fontWeight: "500", color: "#333", marginBottom: "6px" }}
        >
          Address
        </label>
        <textarea
          id="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          rows="3"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
            resize: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="payment"
          style={{ fontSize: "14px", fontWeight: "500", color: "#333", marginBottom: "6px" }}
        >
          Payment Method
        </label>
        <select
          id="payment"
          value={formData.payment}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }}
        >
          <option value="">Select Payment Method</option>
          <option value="cash">Cash on Delivery</option>
          <option value="credit">Credit Card</option>
          <option value="bank">Bank Transfer</option>
        </select>
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#3B82F6",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "6px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563EB")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3B82F6")}
      >
        Confirm Order
      </button>
    </form>
      </div>
    </div>
  );
};

export default Checkout;