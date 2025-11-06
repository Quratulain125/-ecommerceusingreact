import React, { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.title || !product.price) return alert("All fields required");

    addProduct({ ...product, image });
    navigate("/view-product");
  };

  return (
    <div className="flex min-h-screen">
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
  <div className="min-h-screen bg-gray-100 flex-1 flex justify-center items-center ">
  <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-5xl mt-10 ml-10 mr-10">
    <h2 className="text-2xl font-bold mb-8 text-center text-indigo-700">
      Add Product Data
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex items-center justify-center border border-gray-300 rounded-lg p-8 bg-gray-50">
        {image ? (
          <img
            src={image}
            alt="preview"
            className="max-h-64 object-contain rounded-md"
          />
        ) : (
          <span className="text-gray-400 text-lg">No Image</span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          rows="3"
        ></textarea>
        <select
          name="category"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select Category</option>
          <option>Electronics</option>
          <option>Clothes</option>
        </select>
        <input
          type="file"
          onChange={handleImage}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2.5 rounded-md font-medium hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  </div>
</div>



    </div>
  );
};

export default AddProduct;
