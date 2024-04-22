import React from 'react';
import './Addpayment.css';

const CardList = ({ cards, setDefaultCard }) =>{
  return (
    <div>
      <div className="payment">
        <header className='selectCard'>SELECT A CARD</header>
      
      {cards.map((card, index) => (
        <div key={index}>
          <input
            type="checkbox"
            className="form-check-input"
            checked={card.isDefault}
            onChange={() => setDefaultCard(index)}
          /> <p>{card.cardHolder} ending in {card.cardNumber.slice(-4)}</p>
        </div>
      ))}
      </div>
    </div>
  );
}


export default CardList;