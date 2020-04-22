import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission: ""
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    displayForm = () => {
        if(this.props.checkState === true) {
            return (
                <div className="col">
                    <form>
                    <div className="card text-left">
                        <div className="card text-white bg-primary mb-3">
                        <div className="card-header">Thêm mới</div>
                        <div className="card-body">
                            <div className="form-group">
                            <label htmlFor="true">Tên user</label>
                            <input type="text" className="form-control" name="name" onChange = {(event) => this.isChange(event)}
                            aria-describedby="helpId" placeholder="user" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="true">Điện thoại</label>
                            <input type="text" className="form-control" name="phone" onChange = {(event) => this.isChange(event)}
                            aria-describedby="helpId" placeholder="phone" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Quyền</label>
                            <select className="form-control" name="permission" onChange = {(event) => this.isChange(event)}
                            id="exampleFormControlSelect1">
                                <option value={1}>Admin</option>
                                <option value={2}>Madrator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <input className="btn btn-block btn-dark" type="reset"
                            onClick = {(name, phone, permission) => this.props.addUser(this.state.name, this.state.phone, this.state.permission )}
                            value="Save">
                            </input>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.displayForm()}
            </div>  
        );
    }
}

export default AddUser;