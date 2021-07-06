import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: lightgrey;
  cursor: pointer;
  transition: all 0.2s;
  color: white;
  font-size: 40px;
  font-weight: 500;
  :hover {
    transform: scale(1.03);
    background-color: #fafafa;
    color: gray;
  }
`;

export const Reset = styled.button`
  margin: auto;
`;

export const BoardCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Game = styled.div`
  margin: auto;
  width: 60vh;
  height: 60vh;
  padding: 2px;
  border: 1px solid black;
`;

export const Row = styled.div`
  display: flex;
  height: 20vh;
`;
