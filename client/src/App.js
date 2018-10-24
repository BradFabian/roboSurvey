import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Login from "./pages/login";
import Manager from "./pages/manager";
import User from "./pages/user";

import DisplaySurvey from "./pages/survey"; //added

import "./App.css";

const App = () => {

  
return (
  

  <Router>
    <div>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/user/:id" component={User} />
      <Route exact path="/manager" component={Manager} />

      {/** Added */}
      <Route exact path="/survey/:id"  component={DisplaySurvey} />

    </div>
  </Router>
);

}

export default App;
