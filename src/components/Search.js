import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue:''
        }
    }

    displayButton = () => {
        if(this.props.displayButton === true) {
            return <div className="btn btn-block btn-outline-secondary mt-2 mb-2"
            onClick={() => this.props.setState()}>Close</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info mt-2 mb-2"
            onClick={() => this.props.setState()}>AddNewUser</div>
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    getInfoUser = (info) => {
        this.props.getInfoUser(info);
        console.log(info);
    }

    editStatus = () => {
        if(this.props.editStatus === true)
            return  <EditUser
                    getInfoUser = {(info) => this.getInfoUser(info)}
                    editUserObject = {this.props.editUserObject}
                    changeStatusEdit = {() => this.props.changeStatusEdit()} />;
    }

    render() {
        return (
            <div className="col-12">
                {this.editStatus()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" name="" id="" onChange = {(event) => this.isChange(event)}
                        className="form-control" placeholder="Enter search information" />
                        <div className="btn btn-info"
                        onClick = {(dl) => this.props.checkConnectProps(this.state.tempValue)}>Search</div>
                    </div>
                    {this.displayButton()}
                </div>
            </div>
        );
    }
}

export default Search;