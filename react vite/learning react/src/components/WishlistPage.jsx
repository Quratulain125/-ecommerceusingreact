import React from "react";

function WishlistPage({ wishlistItems = [], removeFromWishlist = () => {}, addToCart = () => {} }) {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <h1 style={{ textAlign: "center", fontSize: 32, marginBottom: 24 }}>Wishlist</h1>

      {(wishlistItems || []).length === 0 ? (
        <p style={{ textAlign: "center" }}>Your wishlist is empty.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {(wishlistItems || []).map((item, idx) => (
            <article key={idx} style={{ background: "#fff", padding: 20, borderRadius: 8, boxShadow: "0 4px 10px rgba(0,0,0,0.1)", textAlign: "center" }}>
<div
  key={item.id}
  className="bg-white p-4 flex flex-col items-center justify-between 
             hover:shadow-xl transition-shadow duration-300 w-64 h-80 mx-auto"
>
  <div className="flex items-center justify-center w-full h-48 bg-gray-100 rounded-md">
    <img
      src={item.img || item.image}
      alt={item.title}
      className="object-contain h-40 w-full"
    />
  </div>

  <div className="mt-3 text-center">
    <h3 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h3>
    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
    <p className="text-blue-600 font-bold mt-2">${item.price}</p>
  </div>
</div>
              
           
              <p style={{ color: "#555", fontSize: 14 }}>{item.desc || item.description}</p>

              <div style={{ marginTop: 12, display: "flex",flexDirection:"column", gap: 8 }}>
                <button style={{ flex: 1, background: "green", color: "#fff", padding: 10, borderRadius: 6 }} onClick={() => addToCart(item)}>Add to Cart</button>
                <button style={{ flex: 1, background: "red", color: "#fff", padding: 10, borderRadius: 6 }} onClick={() => removeFromWishlist(item.title)}>Remove</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default WishlistPage;
