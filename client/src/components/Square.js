import React, { useState, useEffect } from "react";

export default function Square({
  board,
  row,
  col,
  clearBoard,
  loss,
  lossCondition,
  win,
  winCondition,
  incrementCount,
  cascade,
}) {
  const [text, setText] = useState("");
  const [background, setBackground] = useState("gray");

  let reveal = board[row][col];

  useEffect(() => {
    setBackground("gray");
    setText("");
  }, [clearBoard]);

  // listener for loss condition to apply to each square
  useEffect(() => {
    if (loss) {
      if (reveal === 0) {
        setBackground("lightgray");
        setText(reveal);
      }
      if (reveal > 0 && reveal < 9) {
        setBackground("lightgray");
        setText(reveal);
      }
      if (reveal === 9) {
        setText("X");
        setBackground("red");
      }
    }
  }, [lossCondition]);

  // listener for win conditon to apply to each square
  useEffect(() => {
    if (win) {
      if (reveal === 0) {
        setBackground("lightgray");
        setText(reveal);
      }
      if (reveal > 0 && reveal < 9) {
        setBackground("lightgray");
        setText(reveal);
      }
      if (reveal === 9) {
        setText("X");
        setBackground("green");
      }
    }
  }, [winCondition]);

  // mark squares green
  const rightClick = (e) => {
    e.preventDefault();
    if (text === "") {
      console.log("right clicked!");
      if (background === "gray") {
        setBackground("green");
      } else {
        setBackground("gray");
      }
    }
  };

  // reveal squares on left click
  const clickSquare = (e) => {
    e.preventDefault();

    if (reveal === 0) {
      setBackground("lightgray");
      setText(reveal);
      // text will forever be empty because setState is async
      if (text === "") {
        incrementCount();
        setTimeout(() => {
          cascade(row, col);
        }, 30);
      }
    }
    if (reveal > 0 && reveal < 9) {
      setBackground("lightgray");
      setText(reveal);
      if (text === "") {
        incrementCount();
      }
    }
    if (reveal === 9) {
      lossCondition();
    }
  };

  return (
    <td
      className="square"
      onClick={clickSquare}
      onContextMenu={rightClick}
      style={{ background: background }}
      data-row={row}
      data-col={col}
    >
      {text}
    </td>
  );
}

// if square contains a 0
// reveal blank square
// recursively find all connected zeros using checker formula from earlier

// if square contains a 9
// launch game over sequence
// append "Game Over" to the dom
// loop through the matrix
// change all 9's to red

// fix new game
