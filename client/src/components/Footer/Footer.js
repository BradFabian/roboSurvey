import React from "react";
import classNames from "classnames";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => (
  <nav className="navbar navbar-expand navbar-light bg-light fixed-bottom">
    <div className={Footer.root}>
      <span className="navbar-text mx-auto">
        Copyright &copy; 2018
        <Link
          to="https://twitter.com/bleodejaneiro"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className={classNames(Footer.icon, "fab fa-twitter-square")} />
        </Link>
        <Link
          to="https://www.instagram.com/bradleo/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className={classNames(Footer.icon, "fab fa-instagram")} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/brad-fabian-5439b6104/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className={classNames(Footer.icon, "fab fa-linkedin")} />
        </Link>
        <Link
          to="hhttps://github.com/BradFabian"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className={classNames(Footer.icon, "fab fa-github-square")} />
        </Link>
      </span>
    </div>
  </nav>
);

export default Footer;
