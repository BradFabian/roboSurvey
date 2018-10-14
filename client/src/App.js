import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Login from "./pages/login";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />

      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/login" component={Login} />

      <Footer />
    </div>
  </Router>
);

export default App;
