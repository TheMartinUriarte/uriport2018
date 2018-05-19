import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Home from './components/Home';
import BizCards from './components/BusinessCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/BusinessCard' component={ TodosContainer }/>
        <Switch>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
