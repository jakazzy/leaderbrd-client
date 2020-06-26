import React from 'react';
import Card from './card.component';

const CardList = () => {
  const cards = [
    { card: 'card1', id: 1 },
    { card: 'card2', id: 2 },
    { card: 'card3', id: 3 },
  ];
  const cardlist = cards.map((card) => <Card key={card.id} />);
  return <div className="flex px-8 mx-auto">{cardlist}</div>;
};

export default CardList;
