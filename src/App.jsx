import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop  from './pages/shop/Shop';
import {CheckBag}  from './pages/CheckBag/CheckBag';
import {ShopContextProvider}  from './context/Shop-context';

const App = () => {


  return (
    <div className='App'>
      <ShopContextProvider>
      <Router>
       <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/CheckBag' element={<CheckBag/>}></Route>


        </Routes>
      </Router>
     </ShopContextProvider>
    </div>
  );
};

export default App;
