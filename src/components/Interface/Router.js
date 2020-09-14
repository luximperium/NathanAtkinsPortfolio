import React from "react";
import "../../App.css";
import { Route, Switch } from "react-router-dom";
import WebDev from "./WebDev";
import Music from "./Music";
import Home from "./Home";
import ContactContainer from './ContactContainer'

const CategoryNavbar = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories/webdev">
          <WebDev />
        </Route>
        <Route exact path="/categories/music">
          <Music />
        </Route>
        <Route exact path="/contact">
          <ContactContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default CategoryNavbar;
