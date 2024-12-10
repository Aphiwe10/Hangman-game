// src/components/GameStatus.js

import React from "react"; // Import React to define the functional component

/**
 * GameStatus Component
 * Displays the current status of the Hangman game.
 * - Shows a win message if the player wins.
 * - Shows a lose message with the correct answer if the player loses.
 * - Renders nothing if the game is ongoing.
 *
 * Props:
 * - isWinner (boolean): Indicates if the player has won the game.
 * - gameOver (boolean): Indicates if the game is over due to reaching the maximum number of wrong guesses.
 * - answer (string): The correct word being guessed in the game. Displayed if the player loses.
 */

const GameStatus = ({ isWinner, gameOver, answer }) => {
  // If the player wins, show a victory message
  if (isWinner) return <p className="win-message">🎉 You Win!</p>;

  // If the game is over and the player loses, show the correct word
  if (gameOver)
    return (
      <p className="lose-message">❌ You Lose! The word was "{answer}".</p>
    );

  // If the game is ongoing, render nothing
  return null;
};

export default GameStatus; // Export the component for use in other parts of the application
