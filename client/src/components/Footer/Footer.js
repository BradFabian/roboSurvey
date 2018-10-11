import React from "react";
import "./Footer.css";

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";*/

const Footer = props => (
  <nav className="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
    <span className="navbar-text mx-auto">
      Copyright &copy; 2018
      {/*<Link
        to="https://twitter.com/bleodejaneiro"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link
        to="https://www.instagram.com/bradleo/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/brad-fabian-5439b6104/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        to="hhttps://github.com/BradFabian"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faCoffee} />
     </Link>*/}
    </span>
  </nav>
);

export default Footer;
