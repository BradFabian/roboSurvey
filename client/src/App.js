import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Login from "./pages/login.js";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" Component={About} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/faq" Component={FAQ} />
        <Route exact path="/login" Component={Login} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
