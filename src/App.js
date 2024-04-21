import React from 'react';
import Sidebar from './sidebar';
import './App.css';
import Itemview from './Itemview'; // Import the ItemView component

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            {/* Render the ItemView component */}
            <Itemview />
            {/* Add the rest of your app content here */}
            <div className="content">
                
            </div>
        </div>
    );
};

export default App; 
