import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => history.push("/room/zdfdzfd")}>Game Room</button>
    </div>
  );
};

export default Home;
