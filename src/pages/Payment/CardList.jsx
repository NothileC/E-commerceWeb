import React from 'react';

const CardList = ({ cards, setDefaultCard }) =>{
  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          <p>{card.cardHolder} ending in {card.cardNumber.slice(-4)}</p>
          <input
            type="checkbox"
            checked={card.isDefault}
            onChange={() => setDefaultCard(index)}
          />
        </div>
      ))}
    </div>
  );
}


export default CardList;