import React, { useState, useEffect } from "react";
import { BoardCover, Game, Row, Reset, Container } from "../../styles";
import findBestMove from "../../helpers/ai.js";
const OfflineBoard = () => {
  //   const [loading, setLoading] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gameDone, setGameDone] = useState(false);
  const [message, setMessage] = useState(null);
  const [turnCount, setTurnCount] = useState(0);
  const [playerTurn, setPlayerTurn] = useState("X");
  const [aiMove, setAiMove] = useState(null);

  //   if (loading) return <h1>Resetting the Game...</h1>;

  useEffect(() => {
    if (playerTurn === "O") {
      const move = findBestMove([
        board.slice(0, 3),
        board.slice(3, 6),
        board.slice(6, 9),
      ]);
      setAiMove(move.row * 3 + move.col);
      // setAiMove();
    }
  }, [board, playerTurn]);

  const setSquare = (index) => {
    if (!board[index] && !gameDone) {
      const newBoard = [...board];
      newBoard[index] = playerTurn;
      if (turnCount >= 4) {
        if (playerTurn === "X") {
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
            setMessage("Player Wins");
            setGameDone(true);
          }
        } else {
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
            setMessage("AI Wins");
            setGameDone(true);
          }
        }
        if (turnCount === 8) {
          setMessage("Draw");
          setGameDone(true);
        }
      }
      setTurnCount(turnCount + 1);
      setBoard(newBoard);
      setPlayerTurn(playerTurn === "X" ? "O" : "X");
    }
  };
  useEffect(() => {
    setSquare(aiMove);
  }, [aiMove]);

  const handleReset = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setGameDone(false);
    setMessage(null);
    setPlayerTurn("X");
    setAiMove(null);
    setTurnCount(null);
  };
  const handleExit = () => {};
  return (
    <BoardCover>
      <h1>Tic-Tac-Toe Room </h1>
      <h3>{message ? message : `Player Turn - ${playerTurn}`}</h3>
      {playerTurn === "O" && !gameDone ? (
        <h1
          style={{
            position: "absolute",
            zIndex: 101,
            marginTop: "-30px",
            color: "white",
            backgroundColor: "black",
            opacity: 0.5,
            height: "65vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Waiting for other player's turn
        </h1>
      ) : (
        ""
      )}
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

      {gameDone && <Reset onClick={() => handleReset()}>Reset</Reset>}
      <Reset onClick={() => handleExit()}>Exit</Reset>
    </BoardCover>
  );
};

export default OfflineBoard;
