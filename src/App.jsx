import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import CheckBag from './pages/CheckBag/CheckBag';

const App = () => {


  return (
    <div className='App'>

      <Router>
       <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/CheckBag' element={<CheckBag/>}></Route>


        </Routes>
      </Router>
     
    </div>
  );
};

export default App;
