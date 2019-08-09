import React, { Component } from 'react';
import PersonRow from './PersonRow';
import { Link } from 'react-router-dom';


export default class PeopleTable extends Component {
    render() {       
        return (
            <div className="container" style={{ marginTop: 40 }}> 
                <Link to='/addClassmate' className="btn btn-primary pull-right">Add Classmate</Link>
                <button className="btn btn-warning" onClick={this.props.clearAll}>Clear</button>
                <Link to='/' className="btn btn-success"   onClick={this.props.onSubmit}>Done</Link>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Here Today</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.people.map(person => <PersonRow onHereToday={this.props.onHereToday}
                            person={person} key={person.id} />)}
                    </tbody>
                </table>
                <div className="col-md-3">
                  
                </div>
            </div>
        )
    }
}
