import React from "react";
import { Container, Row, Col, Card, CardBody, Input, Button } from "mdbreact";

import image from "../assets/img/bg7.jpg";

class LoginPage extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <Login />
      </div>
    );
  }
}

export default LoginPage;
