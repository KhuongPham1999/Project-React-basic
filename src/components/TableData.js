import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    getUserId = (userId) => {
        this.props.getUserId(userId);
    }

    displayData = () => {
        return(
            this.props.dataTable.map((value, key) => {
                return (
                <TableDataRow
                    getUserId = {(userId) => this.getUserId(userId)}
                    editUser = {this.props.editUser} 
                    changeStatusEdit = {() => this.props.changeStatusEdit()}
                    editUserClick = {(user) => this.props.editUserConnect(value)}
                    id = {value.id} 
                    userName = {value.name}
                    key = {key}
                    stt = {key}
                    userPhone = {value.phone} 
                    permission = {value.permission} />)
            })
        );
    }

    render() {
        return (
                <div className="col">
                    <table className="table table-striped table-hove">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Permission</th>
                                <th>Setup</th>
                            </tr>
                        </thead>
                        {this.displayData()}                 
                    </table>
                </div>
        );
    }
}

export default TableData;