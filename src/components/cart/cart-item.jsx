import React, { useContext } from "react";
import { AppleStoreContext } from "../context/AppleStoreContext";

// CartItem component is responsible for rendering the individual cart items
export const CartItem = (props) => {
  // Destructuring the required data properties from the 'props.data' object
  const { id, productName, price, productImage, briefdescription, color } = props.data;

  // Destructuring the required functions and state from the AppleStoreContext
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(AppleStoreContext);

  return (
    <div className="cartItem" id="productItem">
      {/* Rendering the product image */}
      <img src={productImage} className="product-img" alt={productName} />

      <div className="description" id="description">
        {/* Rendering the product name */}
        <p className="product-name">{productName}</p>

        {/* Rendering the product color */}
        <p className="product-color">{color}</p>

        {/* Rendering the brief description of the product */}
        <p className="brief-description"> {briefdescription}</p>

        {/* Rendering the product price and quantity in the cart */}
        <p className="product-price"> Price: ${price} x {cartItems[id]}</p>

        {/* Rendering the quantity control buttons and input field */}
        <div className="countHandler">
          {/* Button to decrease the quantity of the product in the cart */}
          <button onClick={() => removeFromCart(id)} id="subtraction-icon"> - </button>

          {/* Input field to update the quantity of the product in the cart */}
          <input
            id="inputValue"
            type="number"
            min="1"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />

          {/* Button to increase the quantity of the product in the cart */}
          <button onClick={() => addToCart(id)} id="plus-icon"> + </button>        
        </div>
      </div>
    </div>
  );
};
