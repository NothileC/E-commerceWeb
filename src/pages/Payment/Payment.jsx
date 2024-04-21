import React, { useState } from 'react';
import CardForm from './CardForm';
import CardList from './CardList';

const Payment = () =>{
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    // If the new card is default, uncheck all others
    if (newCard.isDefault) {
      setCards(cards.map(card => ({ ...card, isDefault: false })));
    }
    setCards([...cards, newCard]);
  };

  const setDefaultCard = (index) => {
    setCards(cards.map((card, i) => ({
      ...card,
      isDefault: i === index,
    })));
  };

  return (
    <div>
      <h2>Select a Card</h2>
      <CardList cards={cards} setDefaultCard={setDefaultCard} />
      <h2>Add a New Card</h2>
      <CardForm addCard={addCard} />
    </div>
  );
}

export default Payment;