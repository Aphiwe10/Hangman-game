// src/components/GameStatus.js
import React from "react";

const GameStatus = ({ isWinner, gameOver, answer }) => {
  if (isWinner) return <p className="win-message">🎉 You Win!</p>;
  if (gameOver)
    return (
      <p className="lose-message">❌ You Lose! The word was "{answer}".</p>
    );
  return null;
};

export default GameStatus;
