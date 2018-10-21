import React from "react";
import { Row, Col } from "mdbreact";
import NavBar from "../components/NavBar/index";
import Footer from "../components/Footer";
import Login from "../components/Login";
import image from "../assets/img/bg7.jpg";

class LoginPage extends React.Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          paddingBottom: "30%",
          paddingTop: "10%"
        }}
      >
        {" "}
        <Row>
          <Col size="md-12">
            <NavBar />
          </Col>
        </Row>
        <div className="row">
          <Login />
        </div>
        <Row>
          <Col size="md-12">
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
