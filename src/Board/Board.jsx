import React from "react";
import styled from "styled-components";
import Square from "./Square/Square";

const Board = () => {
  const setSquare = () => {
    fetch("http://localhost:4000", {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <BoardCover>
      <h1>Tic-Tac-Toe</h1>
      <Game>
        <Row>
          <Square setSquare={setSquare} />
          <Square setSquare={setSquare} />
          <Square setSquare={setSquare} />
        </Row>
        <Row>
          <Square setSquare={setSquare} />
          <Square setSquare={setSquare} />
          <Square setSquare={setSquare} />
        </Row>
        <Row>
          <Square setSquare={setSquare} />
          <Square setSquare={setSquare} />
          <Square setSquare={setSquare} />
        </Row>
      </Game>
    </BoardCover>
  );
};

export default Board;

const BoardCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Game = styled.div`
  margin: auto;
  width: 60vh;
  height: 60vh;
  padding: 2px;
  border: 1px solid black;
`;

const Row = styled.div`
  display: flex;
  height: 20vh;
`;
