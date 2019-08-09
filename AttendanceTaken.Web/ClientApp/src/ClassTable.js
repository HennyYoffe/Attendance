import React, { Component } from 'react';
import PersonRow from './PersonRow';
import { Link } from 'react-router-dom';

export default class ClassTable extends Component {
    render() {
        const buttonStyle = {
            margin: 5
        }
        return (
            <div className="container" style={{ marginTop: 40 }}>               
                           <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Here Now</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                        {this.props.people.map(person => <tr >
                            <td><button onClick={() => this.props.onHereNow(person)} className="form-control btn btn-danger">Here Now</button></td>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>                            
                        </tr> )}
                </tbody>
                </table>
            </div>
        )
    }
}

//<th style={{ width: '25%' }}>
//    <button onClick={this.props.onDeleteClicked} style={buttonStyle} className="btn btn-danger">Delete</button>
//    <button onClick={this.props.onCheckAllClicked} style={buttonStyle} className="btn btn-warning">Check All</button>
//    <button onClick={this.props.onClearAllClicked} style={buttonStyle} className="btn btn-success">Clear All</button>
//</th>