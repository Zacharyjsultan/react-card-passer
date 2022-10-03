import { createContext, useContext, useState } from 'react';


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return (
    <GameContext.Provider value={{ deck, setDeck }}> {children} </GameContext.Provider>
  );
};

const useGame = () => {
    
}