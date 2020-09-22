import React, { useState } from "react";
import Square from "./Square";

export default function Board(props) {
  return (
    <div id="board">
      <table>
        <tbody>
          {props.board.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <Square
                  key={j}
                  board={props.board}
                  row={i}
                  col={j}
                  lossCondition={props.lossCondition}
                  clearBoard={props.clearBoard}
                  loss={props.loss}
                  win={props.win}
                  incrementCount={props.incrementCount}
                  winCondition={props.winCondition}
                  cascade={props.cascade}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
