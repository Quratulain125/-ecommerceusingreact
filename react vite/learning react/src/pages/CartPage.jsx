import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Cart from "../components/Cart.jsx";

function CartPage({ cartItems, removeFromCart, changeQuantity }) {
    return (
        <div>
            <Navbar/>
            <Cart />
            <Footer/>

        </div>
    );
}
export default CartPage;