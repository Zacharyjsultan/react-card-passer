import { createContext, useContext, useState } from 'react';


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);

  return (
    <GameContext.Provider value={{ deck, setDeck, playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand, playerThreeHand, setPlayerThreeHand, selectedCard, setSelectedCard }}> {children} </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGame must be used within this application');
  }

  return context;
};

export { GameProvider, useGame };