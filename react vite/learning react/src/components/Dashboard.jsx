import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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

     <main className="flex-1 flex items-center justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
    <div
      onClick={() => navigate("/view-product")}
      className="bg-white shadow-md rounded-lg p-5 cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold">Manage Product</h3>
      <p className="text-gray-600">
        View, edit, and delete products in your inventory.
      </p>
    </div>

    <div
      onClick={() => navigate("/add-product")}
      className="bg-white shadow-md rounded-lg p-5 cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold">Add New Products</h3>
      <p className="text-gray-600">
        Add new products to your inventory with details.
      </p>
    </div>
  </div>
</main>

    </div>
  );
};

export default Dashboard;
