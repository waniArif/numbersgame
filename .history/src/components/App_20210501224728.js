import React, { useState, useEffect } from 'react';

import StarsDisplay from './StarDisplay';
import PlayNumber from './PlayNumber';
import PlayAgain from './PlayAgain';

// STAR MATCH - V9

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export function App({}) {
  return <StarMatch />;
}
