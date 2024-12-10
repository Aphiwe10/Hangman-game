import React from "react";
import "./Hangman.css";

/**
 * HelpModal Component
 * Displays a modal with the rules of the Hangman game when the user requests help.
 *
 * Props:
 * - isOpen (boolean): Determines if the modal is displayed.
 * - onClose (function): Callback to close the modal.
 */
const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render the modal if it is not open.

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">Game Rules</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body: Displays the rules of the game */}
          <div className="modal-body">
            <p>Welcome to Hangman! Here's how to play:</p>
            <ol>
              <li>
                Guess the secret word one letter at a time by clicking the
                letter buttons.
              </li>
              <li>
                Each incorrect guess adds a part to the hangman. You have
                limited tries.
              </li>
              <li>Use your guesses wisely to avoid losing the game!</li>
              <li>Press the "New Game" button to start over if needed.</li>
            </ol>
            <p>Good luck, and have fun! 😊</p>
          </div>

          {/* Modal Footer: Close button */}
          <div className="modal-footer">
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
