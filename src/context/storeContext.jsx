import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStoraje"; 

export const StoreContext = createContext(null); 

export const StoreContextProvider = (props) => {
  const [foodData, setFoodData] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', {});
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  
  const userId = window.localStorage.getItem('userId');

 
  const getCartItemsForUser = () => {
    if (!userId) return {}; 
    return cartItems[userId] || {}; 
  }

  const addToCart = (itemId) => {
    const userId = window.localStorage.getItem('userId'); 
    if (!userId) {
      setShowLogin(true); 
      return;
    }
    setCartItems((prev) => {
      const userCart = prev[userId] || {}; 
      const updatedCart = { ...userCart, [itemId]: (userCart[itemId] || 0) + 1 };
      return { ...prev, [userId]: updatedCart }; 
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const userCart = prev[userId] || {}; 
      if (userCart[itemId] > 1) {
        userCart[itemId] -= 1;  
      } else {
        delete userCart[itemId];
      }
      return { ...prev, [userId]: userCart }; 
    });
  };

  const getTotalAmount = () => {
    const cartForUser = getCartItemsForUser();
    let totalAmount = 0;
    for (const item in cartForUser) {
      const itemInfo = foodData.find((product) => String(product.id) === String(item));
      if (itemInfo) {
        totalAmount += itemInfo.servings * cartForUser[item];
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
    cartItems: getCartItemsForUser(), 
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
