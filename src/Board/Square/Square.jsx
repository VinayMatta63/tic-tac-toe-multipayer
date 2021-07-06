import React from "react";
import { Container } from "../../styles";

const Square = ({ setSquare, val, index }) => {
  const check = () => {
    setSquare(index);
  };
  return <Container onClick={check}>{val}</Container>;
};

export default Square;
