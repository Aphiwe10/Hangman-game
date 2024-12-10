// src/components/GameBoard.js

import React from "react"; // Import React for creating the component

/**
 * GameBoard Component
 * Displays the Hangman game interface, including the image, guessed word, and game status.
 *
 * Props:
 * - mistake (number): Current number of wrong guesses.
 * - maxWrong (number): Maximum allowable wrong guesses before the game ends.
 * - guessedWord (string): Word with correctly guessed letters revealed and others hidden (e.g., "_ e _ _").
 * - gameOver (boolean): Indicates whether the game is over (true if over, false otherwise).
 * - answer (string): The full answer to the current puzzle (displayed when the game is over).
 * - images (array): Array of image URLs or paths corresponding to the hangman states.
 */

const GameBoard = ({
  mistake, // Number of mistakes made so far
  maxWrong, // Maximum number of mistakes allowed
  guessedWord, // The current state of the guessed word
  gameOver, // Game over status
  answer, // The answer to the puzzle
  images, // Array of images for hangman states
}) => (
  <div className="GameBoard">
    {/* Game title */}
    <h1>Hangman - Guess the Programming Language</h1>

    {/* Display hangman image based on the number of mistakes */}
    <img src={images[mistake]} alt={`${mistake}/${maxWrong} mistakes`} />

    {/* Display the number of wrong guesses out of the maximum allowed */}
    <p>
      Wrong guesses: {mistake} of {maxWrong}
    </p>

    {/* Display the guessed word or the full answer if the game is over */}
    <p className="Hangman-word">{!gameOver ? guessedWord : answer}</p>
  </div>
);

export default GameBoard; // Export the GameBoard component for use in other parts of the application
