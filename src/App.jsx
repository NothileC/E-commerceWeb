import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Payment from './pages/Payment/Payment';
import ShippingAddress from './pages/Address/ShippingAddress';





const App = () => {



  return (
    <>
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <nav>
              <Link className="nav-link" to="/pages/Payment/Payment"> Payment </Link>
              <Link className="nav-link" to="/pages/Address/ShippingAddress"> Shipping Address</Link>
            </nav>
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/pages/Payment/Payment" element={<Payment />} />
              <Route path="/pages/Address/ShippingAddress" element={<ShippingAddress />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    
  </>
  );
};

export default App;
