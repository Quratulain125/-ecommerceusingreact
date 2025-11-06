import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductsHeader from "../components/ProductsHeader.jsx";
import CategoryButtons from "../components/CategoryButtons.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import ButtonGroup from "../components/ButtonGroup.jsx"
import { useState } from "react";

function HomePage({ addToCart, addToWishlist }) {
   const [query, setQuery] = useState("");
    return (
        <div>
            <Navbar/>
            <ProductsHeader query={query} onSearchChange={setQuery}/>
            <CategoryButtons/>
      <ProductGrid addToCart={addToCart} addToWishlist={addToWishlist}/>        
          <ButtonGroup/>
            <Footer/>

</div>

    );
}
export default HomePage;