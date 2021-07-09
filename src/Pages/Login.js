import React from "react";
import LoginComponent from "../Components/Login/index";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";

const Login = () => {
  const [, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: {
            name: result.user.displayName,
            email: result.user.email,
            profile: result.user.photoURL,
            id: result.user.uid,
          },
        });
      })
      .catch((error) => alert(error.message));
  };
  return <LoginComponent signIn={signIn} />;
};

export default Login;
