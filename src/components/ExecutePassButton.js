import React from 'react';
import { useGame } from '../context/GameContext';
import Card from './Card';

export default function ExecutePassButton({
  passCard
}) {
  const { to, from, setFrom, selectedCard, setSelectedCard } = useGame();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
