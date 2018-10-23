import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";

class NavbarUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <Router>
        <Navbar color="black" dark expand="md" fixed>
          <NavbarBrand href="/">
            <strong>RoboSurvey</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login">LogOut</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    Take Survey
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#">HTML SURVEY</DropdownItem>
                    <DropdownItem href="#">CSS SURVEY</DropdownItem>
                    <DropdownItem href="#">JAVASCRIPT SURVEY</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavbarUser;
