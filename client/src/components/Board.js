import React, { useState } from "react";
import Square from "./Square";

export default function Board(props) {
  return (
    <div>
      <table>
        <tbody>
          {props.board.map((row, i) => (
            <tr key={i}>
              {row.map((col, j) => (
                <Square key={j} row={i} col={j} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
