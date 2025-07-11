import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [food_items, setFood_items] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || ""); 
  const [cartItems, setCartItems] = useState({});

  const url = "http://localhost:4000";

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFood_items(response.data.data);
    } catch (err) {
      console.error(" Error fetching food items:", err.message);
    }
  };

  
  const fetchCartWithToken = async () => {
    if (!token) return;
    try {
      const res = await axios.get(url + "/api/cart/get", {
        headers: { token },
      });
      if (res.data.success) {
        setCartItems(res.data.cartData);
      }
    } catch (err) {
      console.error("Error fetching cart:", err.message);
    }
  };

  
  useEffect(() => {
    fetchFoodList();
    fetchCartWithToken();
  }, [token]); 


  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // ✅ Add to cart
  const addToCart = async (itemId) => {
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const response = await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.error("❌ Error adding to cart", error.message);
    }
  };

  // ✅ Remove from cart
  const removeFromCart = async (itemId) => {
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const response = await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.error("❌ Error removing from cart", error.message);
    }
  };

  // ✅ Total item count
  const getCartTotalItems = () => {
    return Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);
  };

  const contextValue = {
    food_items,
    category,
    setCategory,
    url,
    token,
    setToken,
    cartItems,
    addToCart,
    removeFromCart,
    getCartTotalItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
