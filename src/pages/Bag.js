import React from 'react';
import "./pages-style/bag.css";
import { Link } from "react-router-dom";
import { Cart } from '../components/cart/cart';
import bagIcon from "../../src/assets/icons/checkout.png"
import Sidenav from '../components/sidenav/Sidenav';

const Bag = () => {
  return (
    <div>
      {/* The Bag component represents a page where users can view the items in their bag */}
      <div className='columns'>
        {/* The layout is divided into three columns */}
        <div className='column1'>
          {/* The left column contains a side navigation component */}
          <Sidenav /> {/* Renders the side navigation component */}
        </div>
        <div className='column-2'>
          {/* The middle column contains the bag items */}
          <h1 className='bagTitle'>Check your Bag Items</h1>
          <div className='bagsection'>
            <Cart /> {/* Renders the component that displays the bag items */}
          </div>
        </div>
        <div className='column-3'>
          {/* The right column contains the bag summary and checkout button */}
          <div>
            <h1 id='heading-cart'>Bag</h1>
          </div>
          <div className='sidecart'>
            <Cart /> {/* Renders the component that displays the bag summary */}
          </div>
          <Link to="/checkout" className="ViewBag-Btn">
            {/* Renders a link to the checkout page */}
            <img src={bagIcon} className='iconBag' /> {/* Renders an icon for the bag/checkout */}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Bag;
