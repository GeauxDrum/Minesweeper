import React from "react";

export default function Square(props) {
  const clickSquare = (e) => {
    e.preventDefault();
    console.log("square clicked", props.row, props.col);
    // if (props.newBoard)
  };
  return <td className="square" onClick={clickSquare}></td>;
}
