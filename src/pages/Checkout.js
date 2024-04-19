import React from 'react';
import "./pages-style/checkout.css";
import { CartSummary } from '../components/cartsummary/cartsummary';
import { ShippingAddress } from '../components/cartsummary/shippingaddress';
import { PaymentMethod } from '../components/cartsummary/paymentmethod';
import { Cart } from '../components/cart/cart';

// The Checkout component represents a page where users can review and complete their purchase.
const Checkout = () => {
  return (
    <div className='columns-cartsummary'>
      {/* The layout is divided into two columns */}
      <div className='column1checkout'>
        {/* The left column contains the user's shipping address, payment method, and cart */}
        <ShippingAddress /> {/* Renders the component for entering the shipping address */}
        <PaymentMethod /> {/* Renders the component for selecting the payment method */}
        <Cart /> {/* Renders the component that displays the items in the cart */}
      </div>
      <div className='column2checkout'>
          {/* The right column contains the summary of the cart */}
          <CartSummary /> {/* Renders the component that displays the summary of the cart */}
      </div>
    </div>
  );
};

export default Checkout;