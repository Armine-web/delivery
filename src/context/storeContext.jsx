import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [foodData, setFoodData] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodData.find((product) => String(product.id) === String(item));
        if (itemInfo) {
          totalAmount += itemInfo.servings * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setFoodData(data.recipes);
      })
      .catch((error) => console.error('Error fetching food data:', error));
  }, []);

  const contextValue = {
    RecipeList: foodData,
    cartItems: cartItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    setCartItems: setCartItems,
    getTotalAmount: getTotalAmount,
    handleSearch: handleSearch,
    searchQuery: searchQuery,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
