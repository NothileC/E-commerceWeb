import { createContext, useState } from "react";
import { AppleStoreItems } from "../../products"; // Import product data from a separate file

// Create a React Context for Apple Store data
export const AppleStoreContext = createContext(null); // Initial value set to null

const getDefaultCart = () => {
  // Function to create an empty cart object with keys for each item ID
  // and initial quantities of 0
  let cart = {};
  for (let i = 1; i < AppleStoreItems.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Provider component for the AppleStoreContext
export const AppleStoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart()); // Initialize cart state with empty cart

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

  return (
    <AppleStoreContext.Provider value={contextValue}>
      {props.children} // Wrap child components with the context provider
    </AppleStoreContext.Provider>
  );
};
