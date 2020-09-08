import React from "react";

export default function Square(props) {
  const clickSquare = (e) => {
    e.preventDefault();
    console.log("square clicked", props.row, props.col);
    console.log(props.board[props.row][props.col]);
  };
  return <td className="square" onClick={clickSquare}></td>;
}
