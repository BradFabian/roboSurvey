import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropdownPage extends React.Component {
  render() {
    return (
      <Dropdown>
        <DropdownToggle caret color="dark">
          Manager Access
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>User</DropdownItem>
          <DropdownItem>Add User</DropdownItem>
          <DropdownItem>Edit User</DropdownItem>
          <DropdownItem >Remove User</DropdownItem>
          <DropdownItem >View User Assessments</DropdownItem>
          <DropdownItem header>Survey</DropdownItem>
          <DropdownItem>Add Survey</DropdownItem>
          <DropdownItem>Edit Survey</DropdownItem>
          <DropdownItem >Delete Survey</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownPage;