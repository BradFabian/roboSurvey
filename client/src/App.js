import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Login from "./pages/login";
import Manager from "./pages/Manager/manager"
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/manager" component={Manager}/>
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
