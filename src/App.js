import React from 'react';
import Birthday from './Component/Birthday/Birthday';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Tours from './Component/Tours/Tours';
import Review from './Component/Review/Review';
import QuestionsAndAnswers from './Component/QuestionsAndAnswers/QuestionsAndAnswers';
import OurMenu from './Component/OurMenu/OurMenu';
import Expreience from './Component/Expierence/Expierence';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
          <Route path="/questions/answers">
            <QuestionsAndAnswers></QuestionsAndAnswers>
          </Route>
          <Route path="/our/menu">
            <OurMenu></OurMenu>
          </Route>
          <Route path="/expreience">
            <Expreience></Expreience>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
