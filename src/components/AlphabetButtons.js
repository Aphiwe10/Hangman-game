// src/components/AlphabetButtons.js
import React from "react";

const AlphabetButtons = ({ guessed, onGuess }) => {
  const generateButtons = () =>
    "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={onGuess}
        disabled={guessed.has(letter)}
        className="letter-button"
      >
        {letter}
      </button>
    ));

  return <div className="AlphabetButtons">{generateButtons()}</div>;
};

export default AlphabetButtons;
