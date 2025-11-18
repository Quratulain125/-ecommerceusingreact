import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const raw = localStorage.getItem("wishlist");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("Failed to read wishlist from localStorage:", err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems || []));
      console.debug("Wishlist saved to localStorage:", wishlistItems);
    } catch (err) {
      console.error("Failed to save wishlist to localStorage:", err);
    }
  }, [wishlistItems]);

  const normalizeProduct = (p) => ({
    title: p.title,
    price:
      typeof p.price === "string"
        ? Number(p.price.replace(/[^0-9.-]+/g, ""))
        : p.price,
    img: p.img || p.image || "",
    desc: p.desc || p.description || "",
  });

  const addToWishlist = (product) => {
    const p = normalizeProduct(product);
    setWishlistItems((prev) => {
      if ((prev || []).some((it) => it.title === p.title)) {
        console.debug("addToWishlist: already exists", p.title);
        return prev;
      }
      const next = [...(prev || []), p];
      console.debug("addToWishlist -> new wishlist:", next);
      return next;
    });
  };

  const removeFromWishlist = (title) => {
    setWishlistItems((prev) => {
      const next = (prev || []).filter((it) => it.title !== title);
      console.debug("removeFromWishlist -> new wishlist:", next);
      return next;
    });
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
