import React from "react";
import { LoadContainer, LoadHead, HomeButton } from "../../styles";
import { animated, useSpring } from "react-spring";

const Loader = ({ text, handleExit, id, isPrivate, back, closeNotFound }) => {
  const styles = useSpring({
    loop: { reverse: true },
    from: { rotateZ: 0, x: -30 },
    to: { rotateZ: 180, x: 30 },
  });
  return (
    <LoadContainer>
      <LoadHead>{text}</LoadHead>
      {isPrivate && <LoadHead>{id}</LoadHead>}

      <animated.div
        style={{
          width: 80,
          height: 80,
          marginTop: "50px",
          marginBottom: "50px",
          backgroundColor: "#46e891",
          borderRadius: 16,
          ...styles,
        }}
      />
      {handleExit && (
        <HomeButton onClick={() => handleExit(id)}>Exit</HomeButton>
      )}
      {back && <HomeButton onClick={() => closeNotFound()}>Back</HomeButton>}
    </LoadContainer>
  );
};

export default Loader;
