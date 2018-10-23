import React from 'react';
import { Table, TableBody, TableHead  } from 'mdbreact';
import API from "../../utils/API";

//just commenting for the sake of it.


class BasicTable extends React.Component {
  state = {
    users: []
};

componentDidMount() {
    this.loadUsers();  
  }

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
            temp = (({firstname, lastname, email}) => ({firstname, lastname, email})) (element);
            arr.push(temp);
         })
        this.state.users = arr;
      }
    );
  })
  .catch(err => console.log(err));
};

render () {
  return (
    <Table>
      <TableHead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </TableHead>
      <TableBody rows={this.state.users}> 
      </TableBody>
    </Table>
  );
}
}

export default BasicTable;