import React, { Component } from "react";
//import ChartsPage from "../components/PieChart/pieChart";
import API from "../utils/API";

class User extends Component {

  constructor() {
    super();
    this.state = {
      users : []
    }
  }

  componentDidMount() {
    this.queryUsers();
  }

  queryUsers() {
    API.getAllUsers()
      .then( res => this.setState( {users: res.data} ) )
      .catch( err => console.log(err) );
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>e-mail</td>
              <td>Login id</td>
              <td>Role</td>
            </tr>
            {
              this.state.users.map( (user, i) => <TableRow key = {i} data = {user} /> )
            }
          </tbody>
        </table>
      </div>
    );
  }

}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data._id}</td>
        <td>{this.props.data.firstname}</td>
        <td>{this.props.data.lastname}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.login}</td>
        <td>{this.props.data.role}</td>
      </tr>
    )
  }
}


export default User;
