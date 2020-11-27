import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";
import { useStatevalue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders";

const promise = loadStripe('pk_test_51Hcy3jG7r3t1a9leUvNA8dyMNSIXBDUS2UOjF15YOtdj8uE5kz4abJssvQQrS9UmBhtYIbjlSbE0Slrk0G6BDlBo00xv3CpWIf'
);

function App() {
  const [{user , basket}, dispatch] = useStatevalue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        //login user /just login user
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
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
