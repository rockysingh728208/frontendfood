import React, {useState, createContext } from "react";
import food_items from "../food";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
const [category, setCategory] = useState("All");


  const contextValue = { food_items,category,setCategory };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
