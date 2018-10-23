import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
export default props => {
  return (
    <Menu isOpen={true} width={"20%"}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/laravel">
        Html
      </a>

      <a className="menu-item" href="/angular">
        Javascript
      </a>

      <a className="menu-item" href="/react">
        CSS
      </a>

      <a className="menu-item" href="/vue">
        React
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
  );
};
