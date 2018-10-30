import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Listings from "./components/Listings";
import Navbar from "./components/CustomNavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/listings" component={Listings} />
        </div>
      </Router>
    );
  }
}

export default App;
