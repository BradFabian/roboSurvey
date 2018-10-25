import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import API from "../../utils/API";

class BasicTable extends React.Component {
  state = {
    users: []
};

loadUsers = () => {
  API.getAllUsers()
  .then(res => {
    this.setState (
      { users: res.data},
      () => {
         const {users} = this.state; 
         console.table(users);
         let arr = [];
         users.map((element)=>{
           let temp;
            temp = (({firstname, lastname, email, role}) => ({firstname, lastname, email, role})) (element);
            arr.push(temp);
          })
        this.setState({users: arr})
      }
    );
  })
  .catch(err => console.log(err));
};

componentDidMount() {
    this.loadUsers();  
  }

render () {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </TableHead>
      <TableBody rows={this.state.users}> 
      </TableBody>
    </Table>
  );
}
}

export default BasicTable;