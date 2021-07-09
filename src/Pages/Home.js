import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth, db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Modal from "@material-ui/core/Modal";

const Home = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let room = null;
  const findRoom = async () => {
    setLoading(true);
    const rooms = await db
      .collection("rooms")
      .get()
      .then((data) =>
        data.docs.filter(
          (doc) => doc.data().players.length < 2 && !doc.data().isPrivate
        )
      );

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
          isPrivate: false,
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
  const createPrivateRoom = async () => {
    await db
      .collection("rooms")
      .add({
        board: ["", "", "", "", "", "", "", "", ""],
        message: null,
        gameDone: false,
        playerTurn: "X",
        turnCount: 0,
        players: [user.id],
        isPrivate: true,
      })
      .then((doc) => {
        history.push(`/room/${doc.id}`);
        setLoading(false);
      });
  };
  const findPrivateRoom = async (e) => {
    e.preventDefault();
    handleOpen();
    setLoading(true);
    const room = await db.collection("rooms").doc(input).get();
    await db
      .collection("rooms")
      .doc(input)
      .update({ players: [...room.data().players, user.id] })
      .then(() => {
        history.push(`/room/${input}`);
      });
    setLoading(false);
  };
  const body = (
    <form
      style={{
        width: "60vh",
        height: "60vh",
        margin: "auto",
        backgroundColor: "white",
      }}
      onSubmit={(e) => findPrivateRoom(e)}
    >
      <input
        type="text"
        placeholder="Enter Room ID:"
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ display: "none" }}>Search</button>
    </form>
  );
  if (loading) return <h1>Finding Room..</h1>;
  return (
    <div>
      <h1>Home</h1>
      <button onClick={findRoom}>Game Room</button>
      <button onClick={createPrivateRoom}>Create Private Room</button>
      <button onClick={handleOpen}>Find Private Room</button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  );
};

export default Home;
