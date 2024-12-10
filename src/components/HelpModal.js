// src/components/HelpModal.js
import React from "react";
import "./Hangman.css";

const HelpModal = ({
  isOpen,
  onClose,
  secretWord,
  revealedLetters,
  setRevealedLetters,
}) => {
  const generateHint = () => {
    if (revealedLetters.length >= secretWord.length) return;

    // Find unrevealed letters in the word
    const unrevealed = [...secretWord]
      .map((letter, index) => (revealedLetters.includes(index) ? null : index))
      .filter((index) => index !== null);

    // Randomly pick up to 2-3 letters to reveal
    const hintsToAdd = unrevealed.sort(() => 0.5 - Math.random()).slice(0, 2);

    // Update the revealed letters state
    setRevealedLetters([...revealedLetters, ...hintsToAdd]);
  };

  const renderHintWord = () => {
    return [...secretWord]
      .map((letter, index) => (revealedLetters.includes(index) ? letter : "_"))
      .join(" ");
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Hint</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              If you're stuck, press the button below to reveal up to 2 letters.
              Use this wisely! 😊
            </p>
            <div className="hint-word text-center fs-4 fw-bold">
              {renderHintWord()}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={generateHint}>
              Get a Hint
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
