import React, { Component } from 'react';

class TableDataRow extends Component {

    displayPermission = () => {
        if(this.props.permission === 1){
            return "Admin"
        } else if(this.props.permission === 2)
        {
            return "Moderator"
        } else {
            return "Normal"
        }
    }

    editUserRow = () => {
        this.props.editUserClick();
        this.props.changeStatusEdit();
    }

    getId = (userId) => {
        this.props.getUserId(userId);
    }

    render() {
        return (
            <tbody>
                    <tr>
                        <td>{this.props.stt + 1}</td>
                        <td>{this.props.userName}</td>
                        <td>{this.props.userPhone}</td>
                        <td>{this.displayPermission()}</td>
                        <td>
                            <div className="btn-warning sua"
                            onClick = {(user) => this.editUserRow(user)}><i className="fa fa-edit" />Edit</div>
                            <div className="btn-danger sua"><i className="fa fa-edit"
                            onClick = {(userId) => this.getId(this.props.id)}
                            />Delete</div>
                        </td>
                    </tr>
            </tbody>
        );
    }
}

export default TableDataRow;