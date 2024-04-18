import React from 'react';
import './sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Add your sidebar content here */}
            <ul>
                <li>
                <img src="./img/Logo.png" alt="Logo"/>
                </li>
                <li>
                <img src="./img/lines.png" alt="More"/>
                </li>
                <li>
                <img src="./img/sidebaricon2.png" alt="Store"/>
                </li>
                <li>
                <img src="./img/shoppingbag.png" alt="Bag"/>
                </li>
            </ul>
        </div>
    );    
};

export default Sidebar;