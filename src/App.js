import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MyRoutes from "./config/Routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {MyRoutes}
      </div>
    );
  }
}

export default App;
