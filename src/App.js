import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
const Home = lazy(() => import("./Pages/Home"));
const Room = lazy(() => import("./Pages/Room"));
const Login = lazy(() => import("./Pages/Login"));

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((result) => {
      if (result) {
        dispatch({
          type: "SET_USER",
          user: {
            name: result.displayName,
            email: result.email,
            profile: result.photoURL,
            id: result.uid,
          },
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      {!user ? (
        <Suspense fallback={<h1>Redirecting to Login ...</h1>}>
          <Login />
        </Suspense>
      ) : (
        <Router>
          <Switch>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route path="/room/:id" component={Room} />
              <Route exact path="/" component={Home} />
            </Suspense>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
