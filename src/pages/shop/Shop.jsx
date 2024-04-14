import React from 'react';
import { PRODUCTS } from '../../products';
import {Product} from './Product';
import './Shop.css';



const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Digital One</h1>
        </div>

        <div className='products'>
            {PRODUCTS.map((products) => (
              <Product data={products}/>
            

            ))}

        </div>





    </div>
  )
}

export default Shop