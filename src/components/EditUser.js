import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name,
            phone: this.props.editUserObject.phone,
            permission: this.props.editUserObject.permission,
        }
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        this.props.getInfoUser(info);
        this.props.changeStatusEdit();
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="col">
                    <form>
                    <div className="card text-left">
                        <div className="card text-white bg-primary mb-3">
                        <div className="card-header">EDIT USER</div>
                        <div className="card-body">
                            <div className="form-group">
                            <label htmlFor="true">Tên user</label>
                            <input defaultValue = {this.props.editUserObject.name}
                            onChange = {(event) => this.isChange(event)}
                            type="text" className="form-control" name="name"
                            aria-describedby="helpId" placeholder="user" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="true">Điện thoại</label>
                            <input defaultValue = {this.props.editUserObject.phone}
                            onChange = {(event) => this.isChange(event)}
                            type="text" className="form-control" name="phone" 
                            aria-describedby="helpId" placeholder="phone" />
                            </div>
                            <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Quyền</label>
                            <select defaultValue = {this.props.editUserObject.permission}
                            onChange = {(event) => this.isChange(event)}
                            className="form-control" name="permission" 
                            id="exampleFormControlSelect1">
                                <option value={1}>Admin</option>
                                <option value={2}>Madrator</option>
                                <option value={3}>Normal</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <input className="btn btn-block btn-dark" type="button"
                            value="Save" onClick = {() => this.saveButton()}>
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

export default EditUser;