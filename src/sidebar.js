import React from 'react';
import './sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Add your sidebar content here */}
            <ul>
                <li>
                <img src="" alt="Home" />
                </li>
                <li>
                <img src="path_to_about_image" alt="About" />
                </li>
                <li>
                <img src="path_to_contact_image" alt="Contact" />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;