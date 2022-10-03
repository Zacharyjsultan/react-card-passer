import { createContext, useContext, useState } from 'react';


const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
  


  return (
    <GameContext.Provider value={{ deck, setDeck, playerOneHand, setPlayerOneHand, playerTwoHand, setPlayerTwoHand, playerThreeHand, setPlayerThreeHand, selectedCard, setSelectedCard, from, setFrom, to, setTo }}> {children} </GameContext.Provider>
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