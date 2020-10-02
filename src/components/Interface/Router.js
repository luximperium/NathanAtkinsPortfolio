import React from "react";
import "../../App.css";
import { Route, Switch } from "react-router-dom";
import WebDev from "./WebDev";
import Music from "./Music";
import Home from "./Home";
import ContactContainer from './ContactContainer'
import Red from './WebDev/RedBadge'
import Blue from './WebDev/BlueBadge'
import Gold from './WebDev/GoldBadge'

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
        <Route exact path="/categories/webdev/red">
          <Red />
        </Route><Route exact path="/categories/webdev/blue">
          <Blue />
        </Route><Route exact path="/categories/webdev/gold">
          <Gold />
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
