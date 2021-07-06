import React, { useState } from "react";
import styled from "styled-components";
const Square = ({ setSquare }) => {
  const [val, setVal] = useState("");
  const check = () => {
    setVal("X");
    setSquare();
  };
  return <Container onClick={check}>{val}</Container>;
};

export default Square;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: lightgray;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  font-size: 40px;
  font-weight: 500;
  :hover {
    transform: scale(1.03);
  }
`;
