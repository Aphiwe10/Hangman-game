// src/components/GameBoard.js
import React from "react";

const GameBoard = ({
  mistake,
  maxWrong,
  guessedWord,
  gameOver,
  answer,
  images,
}) => (
  <div className="GameBoard">
    <h1>Hangman - Guess the Programming Language</h1>
    <img src={images[mistake]} alt={`${mistake}/${maxWrong} mistakes`} />
    <p>
      Wrong guesses: {mistake} of {maxWrong}
    </p>
    <p className="Hangman-word">{!gameOver ? guessedWord : answer}</p>
  </div>
);

export default GameBoard;
