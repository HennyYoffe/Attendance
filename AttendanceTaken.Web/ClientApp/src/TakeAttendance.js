import React from 'react';
import TakeAttendanceTable from './TakeAttendanceTable';
import axios from 'axios';
import { produce } from 'immer';


class TakeAttendance extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            hereToday: '',
        },
        people: []
    }

    componentDidMount() {
        axios.get('/api/class/getall').then(({ data }) => {
            this.setState({ people: data });
        });
    }
    onHereToday = person => {
        const nextState = produce(this.state, draftState => {
            person = draftState.people.find(p => p.id === person.id);
            person.hereToday = !person.hereToday;
        });
        this.setState(nextState);
    }
    onSubmit = () => {
        const classmates = this.state.people.filter(p => p.hereToday === true);
        axios.post('api/class/takeAttendance', classmates).then(() => {
            this.props.history.push('/');
        });
    }
    clearAll = () => {
        axios.get('api/class/clearAll').then(({ data }) => {
            this.setState({ people: data });
        });
            }
    render() {
        return (
            <div>
                <TakeAttendanceTable
                    people={this.state.people}
                    onHereToday={this.onHereToday}
                    onSubmit={this.onSubmit}
                    clearAll={this.clearAll} />
            </div>);
    }
}

export default TakeAttendance;