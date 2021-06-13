import React from 'react';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Birthday from './Component/Birthday/Birthday';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Tours from './Component/Tours/Tours';
import Review from './Component/Review/Review';
import QuestionsAndAnswers from './Component/QuestionsAndAnswers/QuestionsAndAnswers';
import OurMenu from './Component/OurMenu/OurMenu';
import Expreience from './Component/Expierence/Expierence';
import LoremText from './Component/LoremText/LoremText';
import FormSubmit from './Component/FormSubmit/FormSubmit';
import SideBarNav from './Component/SideBarNav/SideBarNav';
import MenuHover from './Component/MenuHover/MenuHover';

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
          <Route path="/lorem/text/count">
            <LoremText></LoremText>
          </Route>
          <Route path="/form/submit">
            <FormSubmit></FormSubmit>
          </Route>
          <Route path="/sideBar/nav">
            <SideBarNav></SideBarNav>
          </Route>
          <Route path="/menu/hover">
            <MenuHover></MenuHover>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
