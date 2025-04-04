import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStoraje"; 

export const StoreContext = createContext(null); 

export const StoreContextProvider = (props) => {
  const [foodData, setFoodData] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', {});  
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId]; 
      }
      return newCart;
    });
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = foodData.find((product) => String(product.id) === String(item));
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
