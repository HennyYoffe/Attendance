import React from 'react';
import { Link } from 'react-router-dom';



class HomePage extends React.Component {

    state = {
        people: []
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="text-center">
                <Link to='/takeAttendance'>
                    <button className="btn btn-primary" >Take Attendance</button>
                </Link>
                <Link to='/hereToday'>
                    <button className="btn btn-primary" >Here Today</button>
                </Link>

                        </div>
                    </div>
                </div>
            </div>);
    }
}
export default HomePage;

//<Link to='/addClassmate'>
//    <button className="btn btn-primary">Add Classmate</button>
//</Link>
//    <ClassTable
//        people={this.state.people} />
