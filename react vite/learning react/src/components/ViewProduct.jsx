import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const { products, removeProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 min-h-screen">
     <aside className="bg-indigo-950 text-white w-64 p-5 hidden md:block absolute md:relative z-20 h-full md:h-auto">
        <h1 className="text-lg font-bold mb-5">Inventory</h1>
        <ul>
          <li className="mb-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="hover:text-gray-300 flex items-center gap-2"
            >
              <i className="fa-solid fa-gauge"></i> Dashboard
            </button>
          </li>
          <li className="mb-3">
            <button
              onClick={() => navigate("/add-product")}
              className="hover:text-gray-300 flex items-center gap-2"
            >
              <i className="fa-solid fa-plus"></i> Add Product
            </button>
          </li>
          <li className="mb-3">
            <button
              onClick={() => navigate("/view-product")}
              className="hover:text-gray-300 flex items-center gap-2"
            >
              <i className="fa-solid fa-eye"></i> View Product
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="hover:text-gray-300 flex items-center gap-2"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </button>
          </li>
        </ul>
      </aside>
 <main
      style={{
        flex: 1,
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "24px",
          color: "#1e1b4b",
          textAlign: "center",
        }}
      >
        Product Table
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          overflowX: "auto",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          margin: "20px",
          padding: "10px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#1e1b4b", color: "#fff" }}>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Image</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Title</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Description</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Price</th>
              <th style={{ padding: "12px 16px", textAlign: "left" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    color: "#6b7280",
                  }}
                >
                  No products added yet.
                </td>
              </tr>
            ) : (
              products.map((p, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <td style={{ padding: "12px 16px" }}>{index + 1}</td>
                  <td style={{ padding: "12px 16px" }}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt="product"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "6px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                  <td style={{ padding: "12px 16px" }}>{p.title}</td>
                  <td style={{ padding: "12px 16px" }}>{p.description}</td>
                  <td style={{ padding: "12px 16px" }}>${p.price}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <button
                      style={{
                        backgroundColor: "#22c55e",
                        color: "#fff",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        marginRight: "8px",
                        transition: "background-color 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#16a34a")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#22c55e")}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeProduct(index)}
                      style={{
                        backgroundColor: "#ef4444",
                        color: "#fff",
                        border: "none",
                        padding: "6px 12px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#dc2626")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#ef4444")}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
    </div>
  );
};

export default ViewProduct;
