import React, { Component } from "react";
import step1 from "../assets/hangman_drawings/state1.GIF";
import step10 from "../assets/hangman_drawings/state10.gif";
import step11 from "../assets/hangman_drawings/state11.GIF";
import step2 from "../assets/hangman_drawings/state2.GIF";
import step3 from "../assets/hangman_drawings/state3.GIF";
import step4 from "../assets/hangman_drawings/state4.GIF";
import step5 from "../assets/hangman_drawings/state5.GIF";
import step6 from "../assets/hangman_drawings/state6.GIF";
import step7 from "../assets/hangman_drawings/state7.GIF";
import step8 from "../assets/hangman_drawings/state8.GIF";
import step9 from "../assets/hangman_drawings/state9.GIF";
import AlphabetButtons from "./AlphabetButtons";
import GameBoard from "./GameBoard";
import GameStatus from "./GameStatus";
import "./Hangman.css"; // Import CSS for styling
import HelpModal from "./HelpModal"; // Import HelpModal component

/**
 * Hangman Component
 * Handles the main game logic and UI for the Hangman game.
 */
class Hangman extends Component {
  static defaultProps = {
    maxWrong: 10, // Maximum mistakes allowed before losing
    images: [
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
      step8,
      step9,
      step10,
      step11,
    ], // Hangman drawing images
    wordList: [
      "javascript",
      "python",
      "java",
      "ruby",
      "swift",
      "kotlin",
      "typescript",
      "golang",
      "php",
      "rust",
      "csharp",
      "scala",
      "perl",
      "haskell",
      "elixir",
      "clojure",
    ], // List of possible secret words
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0, // Number of mistakes made
      guessed: new Set(), // Set of guessed letters
      answer: this.randomWord(), // The secret word to guess
      isHelpModalOpen: false, // Tracks whether the help modal is visible
    };
  }

  /**
   * Selects a random word from the word list.
   */
  randomWord = () => {
    const { wordList } = this.props;
    return wordList[Math.floor(Math.random() * wordList.length)];
  };

  /**
   * Generates the current guessed word with unguessed letters as underscores.
   */
  guessedWord = () =>
    this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"))
      .join(" ");

  /**
   * Handles a letter guess by updating the guessed set and mistakes count.
   */
  handleGuess = (evt) => {
    const letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  };

  /**
   * Resets the game state to start a new game.
   */
  resetGame = () => {
    this.setState({
      mistake: 0,
      guessed: new Set(),
      answer: this.randomWord(),
    });
  };

  /**
   * Toggles the visibility of the HelpModal.
   */
  toggleHelpModal = () => {
    this.setState((st) => ({ isHelpModalOpen: !st.isHelpModalOpen }));
  };

  render() {
    const { mistake, answer, isHelpModalOpen } = this.state;
    const { maxWrong, images } = this.props;

    // Check if the player has won or lost the game
    const isWinner = this.guessedWord().replace(/ /g, "") === answer;
    const gameOver = mistake >= maxWrong;

    return (
      <div className="Hangman">
        {/* Display the game board */}
        <GameBoard
          mistake={mistake}
          maxWrong={maxWrong}
          guessedWord={this.guessedWord()}
          gameOver={gameOver}
          answer={answer}
          images={images}
        />

        {/* Display the game status */}
        <GameStatus isWinner={isWinner} gameOver={gameOver} answer={answer} />

        {/* Alphabet buttons for guessing letters */}
        {!isWinner && !gameOver && (
          <AlphabetButtons
            guessed={this.state.guessed}
            onGuess={this.handleGuess}
          />
        )}

        {/* Restart game button */}
        <button className="reset-button" onClick={this.resetGame}>
          Restart Game
        </button>

        {/* Help button */}
        <button className="hint-button" onClick={this.toggleHelpModal}>
          Help
        </button>

        {/* Help modal */}
        <HelpModal isOpen={isHelpModalOpen} onClose={this.toggleHelpModal} />
      </div>
    );
  }
}

export default Hangman;
