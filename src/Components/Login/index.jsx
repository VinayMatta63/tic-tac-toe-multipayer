import React from "react";
import styled from "styled-components";

const Login = ({ signIn }) => {
  return (
    <LoginContainer>
      <h1>Login to TTT</h1>
      <button onClick={signIn}>Sign In</button>
    </LoginContainer>
  );
};

export default Login;

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
