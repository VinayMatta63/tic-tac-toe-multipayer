import React, { useState } from "react";
import Square from "./Square/Square";
import { BoardCover, Game, Row, Reset } from "../styles";
const Board = () => {
  const [isX, setIsX] = useState(true);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const setSquare = (index) => {
    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
    fetch("http://localhost:4000", {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  const handleReset = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setIsX(true);
  };
  return (
    <BoardCover>
      <h1>Tic-Tac-Toe</h1>
      <h3>Player Turn - {isX ? "X" : "O"}</h3>
      <Game>
        <Row>
          <Square val={board[0]} setSquare={setSquare} index={0} />
          <Square val={board[1]} setSquare={setSquare} index={1} />
          <Square val={board[2]} setSquare={setSquare} index={2} />
        </Row>
        <Row>
          <Square val={board[3]} setSquare={setSquare} index={3} />
          <Square val={board[4]} setSquare={setSquare} index={4} />
          <Square val={board[5]} setSquare={setSquare} index={5} />
        </Row>
        <Row>
          <Square val={board[6]} setSquare={setSquare} index={6} />
          <Square val={board[7]} setSquare={setSquare} index={7} />
          <Square val={board[8]} setSquare={setSquare} index={8} />
        </Row>
      </Game>
      <Reset onClick={handleReset}>Reset</Reset>
    </BoardCover>
  );
};

export default Board;
