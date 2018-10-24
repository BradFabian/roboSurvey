import React from "react";
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, CardBody, Input, Button } from "mdbreact";
import API from "../../utils/API";

class Login extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      modalOpen: false,
      userRole: null,
      userId: null,
      email: "",
      password: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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
          alert("Wrong email or password");
          //this.toggleModal();
          this.clearForm();
        } 

      })
      .catch(err => console.log(err));
  }

  clearForm() {
    this.refs.email.value = "";
    this.refs.password.value = "";
  }

  toggleModal() {
    this.setState({modalOpen: !this.state.modalOpen});
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
        <MessageModal show={this.state.modalOpen}
             onClose={this.toggleModal}>
          Wrong e-mail or password
        </MessageModal>

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
                    <Button onClick={this.handleClick} color="elegant">Login</Button>
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

class MessageModal extends React.Component {

  render() {
    if (!this.props.show) {
      return null
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    return (
      
      <div className="backdrop" style={{backdropStyle}}>
        <div className="modal" style={{modalStyle}}>
          
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

MessageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default withRouter(Login);
