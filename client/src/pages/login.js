import React from "react";
import { Col } from "mdbreact";
import NavBar from "../components/NavBar/index";
import Footer from "../components/Footer";
import Login from "../components/Login";
import image from "../assets/img/bg7.jpg";

class LoginPage extends React.Component {
  render() {
    return (
      <div
        id="loginMedia"
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          paddingTop: "300px",
          paddingBottom: "400px",
          backgroundPosition: "center"
        }}
      >
        <Col size="md-12">
          <NavBar />
        </Col>

        <Login />

        <Col size="md-12">
          <Footer />
        </Col>
      </div>
    );
  }
}

export default LoginPage;
