import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { BoardCover, Game, Row, Reset, Container } from "../styles";
const Board = () => {
  const { id } = useParams();
  const history = useHistory();
  const [isX, setIsX] = useState(true);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turnCount, setTurnCount] = useState(0);
  const [message, setMessage] = useState(null);
  const [gameDone, setGameDone] = useState(false);

  const setSquare = (index) => {
    if (!board[index] && !gameDone) {
      const newBoard = [...board];
      newBoard[index] = isX ? "X" : "O";
      setBoard(newBoard);
      if (turnCount >= 4) {
        if (isX) {
          if (
            (newBoard[0] === "X" &&
              newBoard[1] === "X" &&
              newBoard[2] === "X") ||
            (newBoard[3] === "X" &&
              newBoard[4] === "X" &&
              newBoard[5] === "X") ||
            (newBoard[6] === "X" &&
              newBoard[7] === "X" &&
              newBoard[8] === "X") ||
            (newBoard[0] === "X" &&
              newBoard[4] === "X" &&
              newBoard[8] === "X") ||
            (newBoard[6] === "X" && newBoard[4] === "X" && newBoard[2] === "X")
          ) {
            setMessage("X Wins!!");
            setGameDone(true);
          }
        }
        if (!isX) {
          if (
            (newBoard[0] === "O" &&
              newBoard[1] === "O" &&
              newBoard[2] === "O") ||
            (newBoard[3] === "O" &&
              newBoard[4] === "O" &&
              newBoard[5] === "O") ||
            (newBoard[6] === "O" &&
              newBoard[7] === "O" &&
              newBoard[8] === "O") ||
            (newBoard[0] === "O" &&
              newBoard[4] === "O" &&
              newBoard[8] === "O") ||
            (newBoard[6] === "O" && newBoard[4] === "O" && newBoard[2] === "O")
          ) {
            setMessage("O Wins !!");
            setGameDone(true);
          }
        }
        if (turnCount === 9) {
          setMessage("Draw");
          setGameDone(true);
        }
      }
      setIsX(!isX);
      setTurnCount(turnCount + 1);
    }
    // fetch("http://localhost:4000", {
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  };
  const handleReset = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setIsX(true);
    setGameDone(false);
    setTurnCount(0);
    setMessage(null);
  };
  return (
    <BoardCover>
      <h1>Tic-Tac-Toe Room {id}</h1>
      <h3>{message ? message : `Player Turn - ${isX ? "X" : "O"}`}</h3>
      <Game>
        <Row>
          <Container onClick={() => setSquare(0)}>{board[0]}</Container>
          <Container onClick={() => setSquare(1)}>{board[1]}</Container>
          <Container onClick={() => setSquare(2)}>{board[2]}</Container>
        </Row>
        <Row>
          <Container onClick={() => setSquare(3)}>{board[3]}</Container>
          <Container onClick={() => setSquare(4)}>{board[4]}</Container>
          <Container onClick={() => setSquare(5)}>{board[5]}</Container>
        </Row>
        <Row>
          <Container onClick={() => setSquare(6)}>{board[6]}</Container>
          <Container onClick={() => setSquare(7)}>{board[7]}</Container>
          <Container onClick={() => setSquare(8)}>{board[8]}</Container>
        </Row>
      </Game>
      <Reset onClick={handleReset}>Reset</Reset>
      <Reset onClick={() => history.push("/")}>Exit</Reset>
    </BoardCover>
  );
};

export default Board;
