import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const normalizeProduct = (p) => ({
    title: p.title,
    price:
      typeof p.price === "string"
        ? Number(p.price.replace(/[^0-9.-]+/g, ""))
        : p.price,
    img: p.img || p.image || p.imgUrl || "",
    desc: p.desc || p.description || "",
  });

  const addToCart = (product) => {
    const p = normalizeProduct(product);
    setCartItems((prev) => {
      const existing = prev.find((it) => it.title === p.title);
      if (existing) {
        return prev.map((it) =>
          it.title === p.title
            ? { ...it, quantity: it.quantity + 1 }
            : it
        );
      }
      alert(`${p.title} added to cart`);
      return [...(prev || []), { ...p, quantity: 1 }];
    });
  };

  const removeFromCart = (title) => {
    setCartItems((prev) => (prev || []).filter((it) => it.title !== title));
  };

  const changeQuantity = (title, delta) => {
    setCartItems((prev) =>
      (prev || []).map((it) =>
        it.title === title
          ? { ...it, quantity: Math.max(1, (it.quantity || 1) + delta) }
          : it
      )
    );
  };

  const total = (cartItems || []).reduce(
    (acc, it) => acc + (Number(it.price) || 0) * (it.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        changeQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
