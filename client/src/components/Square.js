import React, { useState, useEffect } from "react";

export default function Square(props) {
  const [text, setText] = useState("");
  const [background, setBackground] = useState("gray");

  let reveal = props.board[props.row][props.col];

  useEffect(() => {
    setBackground("gray");
    setText("");
  }, [props.clearBoard]);

  useEffect(() => {
    if (props.loss) {
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
  }, [props.lossCondition]);

  useEffect(() => {
    if (props.win) {
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
  }, [props.winCondition]);

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

  const clickSquare = (e) => {
    e.preventDefault();

    if (reveal === 0) {
      setBackground("lightgray");
      setText(reveal);
      if (text === "") {
        props.incrementCount();
      }
    }
    if (reveal > 0 && reveal < 9) {
      setBackground("lightgray");
      setText(reveal);
      if (text === "") {
        props.incrementCount();
      }
    }
    if (reveal === 9) {
      props.lossCondition();
    }
  };

  return (
    <td
      className="square"
      onClick={clickSquare}
      onContextMenu={rightClick}
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
