import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WishlistPage from "../components/WishlistPage.jsx";

function Wishlist({ wishlistItems, removeFromWishlist, addToCart }) {
    return (
        <div>
            <Navbar/>
            <WishlistPage  wishlistItems={wishlistItems}
      removeFromWishlist={removeFromWishlist}
      addToCart={addToCart}/>
            <Footer/>

        </div>
    );
}
export default Wishlist;