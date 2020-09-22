import React, { useState, useEffect } from "react";
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

  // populate the board with adjacent mine totals
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

  console.log(newBoard);
  return newBoard;
};

export default function App() {
  const newBoard = makeNewBoard();
  const [board, setBoard] = useState(newBoard);
  const [wipeBoard, setWipeBoard] = useState(false);
  const [loss, setLoss] = useState(false);
  const [win, setWin] = useState(false);
  const [banner, setBanner] = useState("Good Luck!");

  // game over functions
  const clearBoard = () => {
    setWipeBoard(!wipeBoard);
  };
  const winCondition = () => {
    console.log("YOU WIN!");
    setWin(true);
    setBanner("YOU WIN!!!");
  };
  const lossCondition = () => {
    console.log("GAME OVER");
    setLoss(true);
    setBanner("GAME OVER");
  };
  const startNewGame = (e) => {
    e.preventDefault();
    clearBoard();
    setLoss(false);
    setWin(false);
    setBoard(makeNewBoard());
    setBanner("Good Luck!");
  };

  // counter for win condition
  var clickCount = 0;
  const incrementCount = () => {
    if (clickCount === 89) {
      winCondition();
    }
    clickCount = clickCount + 1;
    console.log("count is: ", clickCount);
  };

  // cascading all zeros for easier gameplay

  const cascade = (row, col) => {
    for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
      for (let colOffset = -1; colOffset <= 1; colOffset++) {
        if (rowOffset === 0 && colOffset === 0) {
          continue;
        }
        const neighbor = document.querySelector(
          `[data-row="${row + rowOffset}"][data-col="${col + colOffset}"]`
        );
        if (neighbor) {
          neighbor.click();
        }
      }
    }
  };

  return (
    <div>
      <h1>Minesweeper</h1>
      <h1>10 mines on the board, right-click to mark them</h1>
      <h2 id="banner">{banner}</h2>
      <Board
        board={board}
        clearBoard={clearBoard}
        loss={loss}
        win={win}
        lossCondition={lossCondition}
        winCondition={winCondition}
        incrementCount={incrementCount}
        cascade={cascade}
      />
      <div className="newGame">
        <button onClick={startNewGame}>New Game</button>
      </div>
    </div>
  );
}
