import React, { useState, useEffect } from "react";

export default function Square(props) {
  const [text, setText] = useState("");
  const [background, setBackground] = useState("gray");

  useEffect(() => {
    setBackground("gray");
    setText("");
  }, [props.clearBoard]);

  const clickSquare = (e) => {
    let reveal = props.board[props.row][props.col];
    e.preventDefault();

    if (reveal === 0) {
      setBackground("lightgray");
      setText(reveal);
    }
    if (reveal > 0 && reveal < 9) {
      setBackground("lightgray");
      setText(reveal);
    }
    if (reveal === 9) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (props.board[i][j] === 9) {
            console.log(props.board[i][j]);
            // props.board[i][i].setBackground("red");
            setText("X");
          }
        }
      }
    }
  };
  return (
    <td
      className="square"
      onClick={clickSquare}
      style={{ background: background }}
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
