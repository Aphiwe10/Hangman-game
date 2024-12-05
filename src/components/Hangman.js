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
import "../Hangman.css"; // Styles for the component

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 10, // Maximum mistakes allowed
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
    ], // List of programming languages
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set(),
      answer: this.randomWord(), // Initialize with a random word
    };
  }

  /**
   * Pick a random word from the word list
   */
  randomWord() {
    const { wordList } = this.props;
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  /**
   * Generate the current guessed word
   */
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"))
      .join(" ");
  }

  /**
   * Handle letter button clicks
   */
  handleGuess = (evt) => {
    const letter = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  };

  /**
   * Generate alphabet buttons
   */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
        className="letter-button"
      >
        {letter}
      </button>
    ));
  }

  /**
   * Reset the game
   */
  resetGame = () => {
    this.setState({
      mistake: 0,
      guessed: new Set(),
      answer: this.randomWord(),
    });
  };

  render() {
    const { mistake, answer } = this.state;
    const { maxWrong, images } = this.props;

    const isWinner = this.guessedWord().replace(/ /g, "") === answer;
    const gameOver = mistake >= maxWrong;

    let gameState = this.generateButtons();
    if (isWinner) gameState = <p className="win-message">🎉 You Win!</p>;
    if (gameOver)
      gameState = (
        <p className="lose-message">❌ You Lose! The word was "{answer}".</p>
      );

    return (
      <div className="Hangman">
        <h1>Hangman - Guess the Programming Language</h1>
        <img src={images[mistake]} alt={`${mistake}/${maxWrong} mistakes`} />
        <p>
          Wrong guesses: {mistake} of {maxWrong}
        </p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : answer}
        </p>
        <div className="Hangman-btns">{gameState}</div>
        <button className="reset-button" onClick={this.resetGame}>
          Restart Game
        </button>
      </div>
    );
  }
}

export default Hangman;
