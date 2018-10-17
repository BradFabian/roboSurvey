import React from "react";
import { Container, Row, Col, Card, CardBody, Input, Button } from "mdbreact";

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="4" style={{ margin: "auto" }}>
            <Card>
              <CardBody>
                <form>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <Input
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <Input
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <Button>Login</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
