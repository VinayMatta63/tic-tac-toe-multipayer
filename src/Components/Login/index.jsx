import React from "react";

const Login = ({ signIn }) => {
  return (
    <div>
      <h1>Login to TTT</h1>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Login;
