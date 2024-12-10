// src/components/Hangman.js
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
import HelpModal from "./HelpModal";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 10,
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
    ],
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
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set(),
      answer: this.randomWord(),
      isHelpModalOpen: false, // Track help modal visibility
      revealedLetters: [],
    };
  }

  randomWord = () => {
    const { wordList } = this.props;
    return wordList[Math.floor(Math.random() * wordList.length)];
  };

  guessedWord = () =>
    this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"))
      .join(" ");

  handleGuess = (evt) => {
    const letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  };

  resetGame = () => {
    this.setState({
      mistake: 0,
      guessed: new Set(),
      answer: this.randomWord(),
      revealedLetters: [], // Reset revealed letters on game reset
    });
  };

  toggleHelpModal = () => {
    this.setState((st) => ({ isHelpModalOpen: !st.isHelpModalOpen }));
  };

  setRevealedLetters = (newRevealedLetters) => {
    this.setState({ revealedLetters: newRevealedLetters });
  };

  render() {
    const { mistake, answer, isHelpModalOpen, revealedLetters } = this.state;
    const { maxWrong, images } = this.props;

    const isWinner = this.guessedWord().replace(/ /g, "") === answer;
    const gameOver = mistake >= maxWrong;

    return (
      <div className="Hangman">
        <GameBoard
          mistake={mistake}
          maxWrong={maxWrong}
          guessedWord={this.guessedWord()}
          gameOver={gameOver}
          answer={answer}
          images={images}
        />
        <GameStatus isWinner={isWinner} gameOver={gameOver} answer={answer} />
        {!isWinner && !gameOver && (
          <AlphabetButtons
            guessed={this.state.guessed}
            onGuess={this.handleGuess}
          />
        )}
        <button className="reset-button" onClick={this.resetGame}>
          Restart Game
        </button>
        <button className="hint-button" onClick={this.toggleHelpModal}>
          Help
        </button>
        {isHelpModalOpen && (
          <HelpModal
            isOpen={isHelpModalOpen}
            onClose={this.toggleHelpModal}
            secretWord={answer}
            revealedLetters={revealedLetters}
            setRevealedLetters={this.setRevealedLetters}
          />
        )}
      </div>
    );
  }
}

export default Hangman;
