import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, NavbarNav, NavItem, NavLink, Fa, SideNav } from "mdbreact";

class NavBarManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      dropdownOpen: false,
      toggleStateA: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleToggleClickA = this.handleToggleClickA.bind(this);
  }

  // Slide out buttons event handlers
  handleToggleClickA() {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const isOpenWithButtonA = this.state.toggleStateA;
    const navStyle = { backgroundColor: "black", color: "#fff" };
    const sideStyle = { backgroundColor: "black", width: "100%" };

    const button1 = (
      <div
        href="#!"
        onClick={this.handleToggleClickA}
        key="sideNavToggleA"
        style={{
          lineHeight: "32px",
          marginRight: "1em",
          verticalAlign: "middle"
        }}
      >
        <Fa icon="bars" color="white" size="2x" />
      </div>
    );
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };
    return (
      <Router>
        <div className="mt-5">
          <SideNav
            triggerOpening={isOpenWithButtonA}
            breakWidth={1300}
            style={sideStyle}
            hidden
          >
            <li>
              <ul className="HTML-SURVEY">
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    User Survey Results
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Add/Edit Survey
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "white" }}>
                    Add/Edit User
                  </a>
                </li>
              </ul>
            </li>
          </SideNav>
          <Navbar style={navStyle} dark expand="md" className="fixed-top">
            <NavbarNav left>
              <NavItem>{button1}</NavItem>
              <NavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
                <strong>RoboSurvey</strong>
              </NavItem>
            </NavbarNav>
            <NavbarNav right style={specialCaseNavbarStyles}>
              <NavItem>
                <a href="/" style={{ padding: "15px" }}>
                  <Fa
                    icon="home"
                    className="d-inline-inline"
                    style={{ color: "white" }}
                  />{" "}
                  <div
                    className="d-none d-md-inline"
                    style={{ color: "white" }}
                  >
                    Home
                  </div>
                </a>
              </NavItem>
              <NavItem>
                <a href="/login" style={{ padding: "15px" }}>
                  <Fa
                    icon="user"
                    className="d-inline-inline"
                    style={{ color: "white" }}
                  />{" "}
                  <div
                    className="d-none d-md-inline"
                    style={{ color: "white" }}
                  >
                    Logout
                  </div>
                </a>
              </NavItem>
            </NavbarNav>
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default NavBarManager;