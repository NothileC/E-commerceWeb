import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import {ShopContext} from '../../context/Shop-context'
import { CartItem } from './Cart-item'

  



export const CheckBag = () => {
  const { cartItems } = useContext(ShopContext);


  return (
    <div className='cart'>
      <div>
        <h1>Check your Bag Items</h1>
      </div>

      <div className='cartItems'>
        {PRODUCTS.map((products) => {
          if (cartItems[products.id] !== 0) {
            return <CartItem data={products}/>
          }



        })};

      </div>


    </div>
  )
}

