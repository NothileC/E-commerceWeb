import React, { useContext } from "react";
import { AppleStoreContext } from "../context/AppleStoreContext";
import { AppleStoreItems } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";

/*
The Cart component uses the useContext hook to 
access the cartItems and getTotalCartAmount 
functions from the AppleStoreContext.
*/

export const Cart = () => {
  // Access the cartItems and getTotalCartAmount functions from the AppleStoreContext
  const { cartItems, getTotalCartAmount } = useContext(AppleStoreContext);

  // Calculate the total amount of the items in the cart
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      {/* Display the cart items */}
      <div className="cart">
        {AppleStoreItems.map((product) => {
          // Check if the product is in the cart
          if (cartItems[product.id] !== 0) {
            // Render a CartItem component for each product in the cart
            return <CartItem data={product} />;
          }
        })}
      </div>

      {/* Display the checkout section if there are items in the cart */}
      {totalAmount > 0 && (
        <div className="checkout">
          {/* Display the total amount of the cart */}
          <p id="totalp">Bag Total: ${totalAmount}</p>

          {/* Add a button or link to proceed to checkout */}
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};