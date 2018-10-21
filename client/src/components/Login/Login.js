import React from "react";
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, Input, Button } from "mdbreact";
import API from "../../utils/API";

class Login extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      userRole: null,
      userId: null,
      email: "",
      password: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
  }

  validateUser() {
    const user = {email: this.state.email, password: this.state.password};
    API.getUserAuth(user)
      .then( res => {
        if (res.data.length > 0) {
          this.setState({userId: res.data[0]._id, userRole: res.data[0].role});
          this.clearForm();
          if (this.state.userRole === 'user')
            this.props.history.push("/user/"+this.state.userId);
          if (this.state.userRole === 'manager')
            this.props.history.push("/manager");
        }
        else {
          alert("Wrong email or password")
          this.clearForm();
        } 

      })
      .catch(err => console.log(err));
  }

  clearForm() {
    this.refs.email.value = "";
    this.refs.password.value = "";
  }


  changeEmail(event) {
    this.setState({email: event.target.value});
  }

  changePass(event) {
    this.setState({password: event.target.value});
  }

  handleClick( event ) {
    event.preventDefault();
    console.log("button was clicked");

    if ( this.validateUser() ) {
      console.log("the user with email " + this.state.email + " exist on database");
    }
  }

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
                      ref="email"
                      value = {this.state.email}
                      onChange = {this.changeEmail}
                    />
                    <Input
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      ref="password"
                      value = {this.state.password}
                      onChange = {this.changePass}
                    />
                  </div>
                  <div className="text-center">
                    <Button onClick={this.handleClick}>Login</Button>
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

export default withRouter(Login);
