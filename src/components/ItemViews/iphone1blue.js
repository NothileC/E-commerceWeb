import React from 'react';
import './Itemview.css'; // Import your CSS file for styling

const Itemview = ({ item }) => {
    return (
        <div className="item-view">
            <div className="top-area">
            <button className="back-button">Back</button>
                
                {/* Content for the top area */}
            </div>
            <div className="bottom-area">
                <div className="item-details">
                    <img src="../img/blueiphone.png" alt="Apple Watch" className="item-image" />
                    <div className="item-info">
                        <h2 className="item-title">iPhone 11</h2>
                        <h3 className="item-subtitle">Subway Blue</h3>
                        <img src="../img/therating.png" alt="5-star rating" className="star-rating"/>
                        <p className="item-price">$619.99</p>
                        <p className="short-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.</p>
                    </div>
                </div>
                <div className="description-header">
                    <h3 className="description-header-text">Description</h3>
                </div>
                <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.
Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.
Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.
Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros.
</p>
            </div>
        </div>
    );
};

export default Itemview;