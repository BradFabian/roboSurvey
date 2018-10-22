import React from "react";
import { Link } from "react-router-dom";
import "./NavBarUser.css";

const Navbaruser = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <Link className="navbar-brand" to="/">
      RoboSurvey
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/login"
            className={
              window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            LogOut
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <ul className="nav justify-content-end navbar-dark">
        <li className="nav-item  mr-md-2">
          <Link to="/surveyHtml">HTML Survey</Link>
        </li>
        <li className="nav-item  mr-md-2">
          <Link to="/surveyCSS">CSS Survey</Link>
        </li>
        <li className="nav-item  mr-md-2">
          <Link to="/surveyJavascript">Javascript Survey</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbaruser;
