/* 
this file sets up a React Context for managing the state of an ecommerce 
store's cart, providing functions for adding, removing, and updating items, 
as well as calculating the total cart amount.
*/

//The file starts by importing createContext and useState from React, as well as AppleStoreItems from products.js

import { createContext, useState } from "react";
import { AppleStoreItems } from "../../products"; // Import product data from a separate file

/* The AppleStoreContext is created using the createContext function, with an initial value of null. 
This context will be used to manage the state of the cart.*/

export const AppleStoreContext = createContext(null); // Initial value set to null

/*
The getDefaultCart function creates an empty cart object with keys for 
each item ID and initial quantities of 0. This function 
is used to initialize the cart state
*/

const getDefaultCart = () => {
  // Function to create an empty cart object with keys for each item ID
  // and initial quantities of 0
  let cart = {};
  for (let i = 1; i < AppleStoreItems.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

/* 
The AppleStoreContextProvider component is a provider component for the AppleStoreContext. 
It wraps child components with the context provider, making the context values available to them.
*/

export const AppleStoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart()); // Initialize cart state with empty cart

/*
The component defines several functions that will be exposed as context values:

getTotalCartAmount: calculates the total cart amount by iterating 
over the cart items and multiplying each item's quantity by its price.

addToCart: adds an item to the cart, increasing its quantity.

removeFromCart: removes an item from the cart, decreasing 
its quantity (ensuring it doesn't go negative).

updateCartItemCount: updates an item's quantity in the cart.

checkout: clears the cart (simulates checkout).
*/
  
  const getTotalCartAmount = () => {
    // Function to calculate the total cart amount
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = AppleStoreItems.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    // Add fixed shipping and tax costs (assuming these values are constants elsewhere)
    totalAmount += (85 + 20 + 53.21);

    return totalAmount;
  };

  const addToCart = (itemId) => {
    // Function to add an item to the cart, increasing its quantity
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); // Update cart state with spread operator
  };

  const removeFromCart = (itemId) => {
    // Function to remove an item from the cart, decreasing its quantity (ensuring it doesn't go negative)
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    // Function to update an item's quantity in the cart
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    // Function to clear the cart (simulate checkout)
    setCartItems(getDefaultCart());
  };



  
  const contextValue = {
    cartItems, // Current state of the cart items
    addToCart, // Function to add an item to the cart
    updateCartItemCount, // Function to update an item's quantity
    removeFromCart, // Function to remove an item from the cart
    getTotalCartAmount, // Function to calculate the total cart amount
    checkout, // Function to clear the cart (simulate checkout)
  };

/*
The component returns the AppleStoreContextProvider component, 
which wraps child components with the context provider. The value prop 
is set to the contextValue object, making the context values available to child components.
*/
  
  return (
    <AppleStoreContext.Provider value={contextValue}>
      {props.children} // Wrap child components with the context provider
    </AppleStoreContext.Provider>
  );
};
