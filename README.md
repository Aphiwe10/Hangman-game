# Hangman Game

## Description

The Hangman Game is a fun word-guessing game where players try to guess a word by suggesting letters. The player has a limited number of attempts to guess the word correctly. Each incorrect guess draws part of a stick figure of a man, and the game ends either when the player correctly guesses the word or when the man is fully drawn.

## Rules of the Game

- The game will randomly choose a word from a predefined list of words.
- You will have to guess the letters of the word.
- If you guess a letter correctly, it will appear in the word.
- If you guess a letter incorrectly, part of the man is drawn.
- You have a limited number of incorrect guesses before the game is over.
- The game ends when either you guess the word correctly or the man is fully drawn.

## Features

- Interactive word guessing with visual feedback on incorrect guesses.
- Hangman drawing updates with each wrong guess.
- Word progress shown with blanks for unguessed letters.
- Game reset functionality when a game is finished.

## How to Play

1. Enter a letter in the input field to guess.
2. If the letter is in the word, it will appear in the correct position.
3. If the letter is not in the word, the hangman figure will draw a new part.
4. The game ends when you either guess all the letters of the word or the hangman is completely drawn.

## Installation Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Steps to Run the Game Locally

1. **Clone the repository**:
   Open a terminal and run the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/Aphiwe10/hangman-game.git
   ```
2. **Install and Start the node modules**:
   npm install
   npm start
