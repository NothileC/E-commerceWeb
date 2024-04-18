import React from 'react';
import Sidebar from './sidebar';
import './App.css'; 

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            {/* Add the rest of your app content here */}
            <div className="content">
                <h1>Main Content</h1>
                <p>This is the main content of your app.</p>
            </div>
        </div> 
    );
};

export default App;
