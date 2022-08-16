import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
  <Router>
    <div className="app">
      
      <Switch>
        <Route path="/login"> 
        <Login/> 
        </Route>
        <Route path="/Checkout">
        <Header/>
          <Checkout/>
           </Route>
           <Route path="/">
            <h1> Welcome to Amazon-Clone Store 🚀</h1>
            <Header/>
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App; 
