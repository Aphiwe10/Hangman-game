// src/components/AlphabetButtons.js

import React from "react"; // Import React to define the functional component

/**
 * AlphabetButtons Component
 * Renders a set of buttons representing the alphabet for the Hangman game.
 *
 * Props:
 * - guessed (Set): A set of letters that have already been guessed.
 *   Used to disable buttons for letters that have been guessed.
 * - onGuess (function): A callback function triggered when a letter button is clicked.
 */

const AlphabetButtons = ({ guessed, onGuess }) => {
  /**
   * generateButtons
   * Generates buttons for all the letters in the English alphabet.
   * - Each button:
   *   - Displays a letter.
   *   - Is disabled if the letter has already been guessed.
   *   - Calls the `onGuess` function when clicked.
   *
   * Returns:
   * - JSX: A series of button elements.
   */
  const generateButtons = () =>
    "abcdefghijklmnopqrstuvwxyz" // Create a string of the alphabet
      .split("") // Split the string into an array of letters
      .map(
        (
          letter // Map each letter to a button element
        ) => (
          <button
            key={letter} // Unique key for each button (required for React lists)
            value={letter} // The value of the button is the corresponding letter
            onClick={onGuess} // Attach the `onGuess` handler to the button
            disabled={guessed.has(letter)} // Disable button if the letter is already guessed
            className="letter-button" // Add CSS class for styling
          >
            {letter}
          </button>
        )
      );

  // Render the buttons within a container
  return <div className="AlphabetButtons">{generateButtons()}</div>;
};

export default AlphabetButtons; // Export the component for use in other parts of the application
