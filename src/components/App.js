import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        fixState: false,
        data: DataUser,
        searchText:'',
        editStatus: false,
        editUserObject: {},
        userObject: {}
    }
  }

  changeState = () => {
    this.setState({
        fixState: !this.state.fixState
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  
  getNewUser = (name, phone, permission) => {
    var item = {};
      item.id = uuidv4();
      item.name = name;
      item.phone = phone;
      item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  editUser = (user) => {
    this.setState({
      editUserObject: user
    });
    localStorage.setItem('userData', JSON.stringify(this.state.editUserObject));
  }

  changeStatusEdit = () => {
    this.setState({
      editStatus: !this.state.editStatus
    });
  }

  getInfoUser = (info) => {
    this.state.data.forEach((value, key) => {
      if(info.id === value.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })

  }

  getUserId = (userId) => {
    var deleteData = this.state.data.filter(item => item.id !== userId);
    this.setState({
      data: deleteData
    });

    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  
  render() {
    localStorage.setItem('userData', JSON.stringify(this.state.data));
    
    var resuit = [];
    this.state.data.forEach((item) => {
      if(item.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1) {
        resuit.push(item);
      }
    })

    return (
      
      <div>
      <Header></Header>
      <div className="searchForm">
        <div className="container">
          <div className="row">
            <Search
            getInfoUser = {(info) => this.getInfoUser(info)}
            editUserObject = {this.state.editUserObject}
            changeStatusEdit = {() => this.changeStatusEdit()}
            editStatus = {this.state.editStatus}
            setState = {() => this.changeState()} 
            displayButton = {this.state.fixState}
            checkConnectProps ={(dl) => this.getTextSearch(dl)}>
            </Search>
            <TableData
            getUserId = {(userId) => this.getUserId(userId)}
            changeStatusEdit = {() => this.changeStatusEdit()}
            editUserConnect = {(user) => this.editUser(user)}
            dataTable = {resuit}></TableData>
            <AddUser
            addUser = {(name, phone, permission) => this.getNewUser(name, phone, permission)}
            checkState = {this.state.fixState}></AddUser>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;