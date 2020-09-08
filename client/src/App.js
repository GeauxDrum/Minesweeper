import React, { useState } from "react";
import Board from "./components/Board";

const makeNewBoard = () => {
  var newBoard = [];
  for (let i = 0; i < 10; i++) {
    newBoard[i] = [];
    for (let j = 0; j < 10; j++) {
      newBoard[i][j] = 0;
    }
  }
  let i = 10;
  while (i > 0) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    if (!newBoard[row][col]) {
      newBoard[row][col] = 9;
      i--;
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let total = 0;
      // upper left
      if (i > 0 && j > 0 && newBoard[i - 1][j - 1] === 9) {
        total++;
      }
      // upper
      if (i > 0 && newBoard[i - 1][j] === 9) {
        total++;
      }
      // upper right
      if (i > 0 && j < 10 && newBoard[i - 1][j + 1] === 9) {
        total++;
      }
      // left
      if (j > 0 && newBoard[i][j - 1] === 9) {
        total++;
      }
      // right
      if (j < 10 && newBoard[i][j + 1] === 9) {
        total++;
      }
      // lower left
      if (i < 9 && j > 0 && newBoard[i + 1][j - 1] === 9) {
        total++;
      }
      // lower
      if (i < 9 && newBoard[i + 1][j] === 9) {
        total++;
      }
      // lower right
      if (i < 9 && j < 10 && newBoard[i + 1][j + 1] === 9) {
        total++;
      }
      // final number assignment
      if (newBoard[i][j] === 0) {
        newBoard[i][j] = total;
      }
    }
  }

  return newBoard;
};

export default function App() {
  const newBoard = makeNewBoard();
  console.log(newBoard);
  const [board, setBoard] = useState(newBoard);

  const [wipeBoard, setWipeBoard] = useState(false);
  const clearBoard = () => {
    setWipeBoard(!wipeBoard);
  };

  const startNewGame = (e) => {
    e.preventDefault();
    clearBoard();
    setBoard(makeNewBoard());
  };

  return (
    <div>
      <h1>Minesweeper</h1>
      <Board board={board} clearBoard={clearBoard} />
      <div className="newGame">
        <button onClick={startNewGame}>New Game</button>
      </div>
    </div>
  );
}
