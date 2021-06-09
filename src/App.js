import React from 'react';
import Birthday from './Component/Birthday/Birthday';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Tours from './Component/Tours/Tours';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from './Component/Review/Review';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/birthday">
            <Birthday></Birthday>
          </Route>
          <Route path="/tours">
            <Tours></Tours>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
