import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth, db } from "../firebase";
import { useStateValue } from "../StateProvider";

const Home = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  let room = null;
  const findRoom = async () => {
    setLoading(true);
    const rooms = await db
      .collection("rooms")
      .get()
      .then((data) => data.docs.filter((doc) => doc.data().players.length < 2));

    if (rooms.length > 0) {
      room = rooms[Math.floor(rooms.length * Math.random())];
      await db
        .collection("rooms")
        .doc(room.id)
        .update({ players: [...room.data().players, user.id] })
        .then(() => {
          history.push(`/room/${room.id}`);
          setLoading(false);
        });
    } else {
      await db
        .collection("rooms")
        .add({
          board: ["", "", "", "", "", "", "", "", ""],
          message: null,
          gameDone: false,
          playerTurn: "X",
          turnCount: 0,
          players: [user.id],
        })
        .then((doc) => {
          history.push(`/room/${doc.id}`);
          setLoading(false);
        });
    }
  };
  const logoutHandler = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "REMOVE_USER",
      });
    }
  };
  if (loading) return <h1>Finding Room..</h1>;
  return (
    <div>
      <h1>Home</h1>
      <button onClick={findRoom}>Game Room</button>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
};

export default Home;
