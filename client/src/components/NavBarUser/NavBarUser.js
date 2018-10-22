import React from "react";
import { Link } from "react-router-dom";
import "./NavBarUser.css";

const Navbaruser = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <Link className="navbar-brand" to="/">
      RoboSurvey
    </Link>

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

    <ul className="navbar-nav justify-content-end ml-auto">
      <li className="nav-item  mr-md-2">
        <Link to="/surveyHtml" style={{ color: "white" }}>
          HTML Survey
        </Link>
      </li>
      <li className="nav-item  mr-md-2">
        <Link to="/surveyCSS" style={{ color: "white" }}>
          CSS Survey
        </Link>
      </li>
      <li className="nav-item  mr-md-2">
        <Link to="/surveyJavascript" style={{ color: "white" }}>
          Javascript Survey
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbaruser;
