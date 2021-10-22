import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Element, Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Jib7uSJZZQNAnDhCyxfcjHUbchTV3NXmODZl4awZW7RMHRCXW1A25bWqCPyiRUflIrFFi0jn6WswTktm8mkTu1C00hDQRjz6B');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
    <div className="App">
      <Switch>
        <Route path="/orders">
        <Header />
        <Orders />
        </Route>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>
        <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
        <Payment />
        </Elements>
        </Route>
        <Route path="/">
        <Header />
        <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
