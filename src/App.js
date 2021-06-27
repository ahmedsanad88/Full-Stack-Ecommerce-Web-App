//jshint esversion:6

import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from './Footer';
import UserData from './UserData';

const promise = loadStripe(process.env.REACT_APP_STRIPE_API);

// create listener to keep track of who sign in (by using useEffect)

function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once as i keep it empty array and will run when component load even if you reload the page.
    auth.onAuthStateChanged(authUser => {
      // console.log('the user is >>>>', authUser); used to test the auth code will track login in or not..

      if(authUser) {
        //  the user just loggin / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }else {
        //  if the is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      } 
    })


  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            {/* using stripe to help for payment process */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/data">
            <UserData />
          </Route>
          <Route path="/">
            {/* Header */}
            {/* <Header /> */}
            {/* Home */}
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
