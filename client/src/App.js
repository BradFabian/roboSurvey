import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import FAQ from "./pages/faq";
import Login from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" componnent={About} />
        <Route exact path="/about" componnent={About} />
        <Route exact path="/faq" componnent={FAQ} />
        <Route exact path="/login" componnent={Login} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
