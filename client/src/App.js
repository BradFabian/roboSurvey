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

  this.state = {         //state added, look into opening and closing curly brakets after fat arrow
    userId: null
  } 

  //added
  const ShowSurvey = (props) => {
    return (
      <DisplaySurvey userId = {"MyUserId"} {...props}/>
    );
  }

  //added
  const setUserId = (id) => {
    this.setState({userId: id});
  }

  const doLogin = (props) => {
    return (
      <Login onLogin = {this.setUserId} {...props}/>
    )
  }

 return (
  

  <Router>
    <div>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/faq" component={FAQ} />

      {/** Modifyied */}
      <Route exact path="/login" component={doLogin} />

      <Route exact path="/user/:id" component={User} />
      <Route exact path="/manager" component={Manager} />

      {/** Added */}
      <Route exact path="/survey/:id"  component={ShowSurvey} />

    </div>
  </Router>
);

}

export default App;
