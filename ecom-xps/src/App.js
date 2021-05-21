import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Profile from "./Profile";
import Footer from "./Footer";
import { useStateValue } from "./StateProvider";
import { auth, db } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import AllProducts from "./AllProducts";
import Mobiles from "./Mobiles";
import Fashion from "./Fashion";
import Books from "./Books";
import Electronics from "./Electronics";

const promise = loadStripe(
  "pk_test_51Ic462SG9Kqog9SgXQowC6RzXJF0nZi46JeJmzlZVkhkM1rUplNCIJKWx9DrqxJAadebTWgriNTmspeE8JxkPbzT00gfvFdEr4"
);
function App() {
  const [profile, setProfile] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

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
  }, []);

  useEffect(() => {
    if (user && profile) {
      db.collection("users")
        .doc(user?.uid)
        .collection("profile")
        .onSnapshot((snapshot) =>
          setProfile(snapshot.docs.map((doc) => doc.data()))
        );
    } else setProfile([]);
  }, [user]);

  useEffect(() => {
    dispatch({
      type: "SET_PROFILE",
      userName: profile[0],
    });
  }, [profile]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/electronics">
            <Header />
            <Electronics />
            <Footer />
          </Route>
          <Route path="/books">
            <Header />
            <Books />
            <Footer />
          </Route>
          <Route path="/mobiles">
            <Header />
            <Mobiles />
            <Footer />
          </Route>
          <Route path="/fashion">
            <Header />
            <Fashion />
            <Footer />
          </Route>
          <Route path="/allproducts">
            <Header />
            <AllProducts />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
