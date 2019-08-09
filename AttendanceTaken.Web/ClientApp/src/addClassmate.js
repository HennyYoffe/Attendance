import React from 'react';
import { produce } from 'immer';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AddClassmate extends React.Component {
    state = {       
            firstName: '',
        lastName: '',
    }
    onInputChange = e => {
        const newState = produce(this.state, draftState => {
            draftState[e.target.name] = e.target.value;
        });
        this.setState(newState);
    }

    onSubmit = () => {
        axios.post('api/class/add', this.state).then(() => {
            this.props.history.push('/takeAttendance');
        });
    }
    render() {
        const { firstName, lastName } = this.state;
        return (<div className="row">
            <div className="col-md-3">
                <input name="firstName" value={firstName}
                    onChange={this.onInputChange} className="form-control" placeholder="First Name" />
            </div>
            <div className="col-md-3">
                <input name="lastName" value={lastName}
                    onChange={this.onInputChange} className="form-control" placeholder="Last Name" />
            </div>
            <br />
            <div className="col-md-3">
                <button className="btn btn-success" onClick={this.onSubmit}>Save</button>
            </div>
        </div>
        );
    }
}
export default AddClassmate;