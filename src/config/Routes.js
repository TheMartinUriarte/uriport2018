import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import BizCard from "../containers/BusinessCard";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/businesscard" component={BizCard} />
  </Switch>
);
