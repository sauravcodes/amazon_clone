import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./components/StateProvider/StateProvider";
import { auth } from "./components/firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Header />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
