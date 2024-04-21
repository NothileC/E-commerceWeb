import React from 'react';
import './Itemview.css'; // Import your CSS file for styling


const Itemview = ({ item }) => {
    return (
        <div className="item-view">
              <div className="top-area"></div>
            <img src="../img/watch.png" alt="Apple Watch" className="item-image" />
            <div className="item-details">
                <h2 className="item-title">Apple Watch</h2>
                <h3 className="item-subtitle">SERIES 5 SE</h3> {/* Apply CSS class to h3 element */}
                <img src="../img/therating.png" alt="5-star rating" className="star-rating"/> {/* Render the star rating image */}
                <p className="item-price">$529.99</p>
                <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.</p>
                <div>
            <img src="../img/addtobag.png" alt="Add to Bag" className="add-to-bag-button" /> {/* Add the button image */}
        </div>
        <img src="../img/line.png" alt="Horizontal Line" className="horizontal-line" /> {/* Add the horizontal line image */}  
            </div>
        </div>
    );
};

export default Itemview;