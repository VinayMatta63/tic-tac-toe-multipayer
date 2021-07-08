import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Home = lazy(() => import("./Pages/Home"));
const Room = lazy(() => import("./Pages/Room"));

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/room/:id" component={Room} />
            <Route exact path="/" component={Home} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
