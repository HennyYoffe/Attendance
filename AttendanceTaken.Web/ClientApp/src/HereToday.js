import React from 'react';

import axios from 'axios';
import ClassTable from './ClassTable';
import { produce } from 'immer';


class HereToday extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            hereNow: '',
        },
        people: []
    }

    componentDidMount() {
        axios.get('/api/class/getHereToday').then(({ data }) => {            
            this.setState({ people: data });
        });
        if (this.state.people.length < 0) {
            this.props.history.push('/done');

        }
 
    }
   
    onHereNow = person => {  
        this.setState({
            people: this.state.people.filter(p => p.id !== person.id)
        })

        console.log(this.state.people);   
        if (this.state.people.length === 1) {
            this.props.history.push('/done');

        }
    }
    render() {
        return (
            <div>
                <ClassTable
                    people={this.state.people}
                    onHereNow={this.onHereNow}
                />
            </div>);
    }
}
export default HereToday;

//class PeoplePage extends React.Component {
//    state = {
//        person: {
//            firstName: '',
//            lastName: '',
//            age: '',
//        },
//        people: []
//    }


//    componentDidMount = () => {
//        axios.get('/api/people/getall').then(({ data }) => {
//            data.forEach(p => p.markedForDeletion = false);
//            this.setState({ people: data });
//        });
//    }

//    onInputChange = e => {
//        const newState = produce(this.state, draftState => {
//            const { person } = draftState;
//            person[e.target.name] = e.target.value;
//        });
//        this.setState(newState);
//    }

//    onAddClick = () => {
//        axios.post('/api/people/add', this.state.person).then(({ data }) => {
//            const nextState = produce(this.state, draftState => {
//                draftState.people.push(data);
//                draftState.person = {
//                    firstName: '',
//                    lastName: '',
//                    age: ''
//                }
//            });
//            this.setState(nextState);
//        })
//    }

//    onDeleteCheckChanged = person => {
//        const nextState = produce(this.state, draftState => {
//            const personThatChanged = draftState.people.find(p => p.id === person.id);
//            personThatChanged.markedForDeletion = !personThatChanged.markedForDeletion;
//        });

//        this.setState(nextState);
//    }

//    onDeleteClicked = () => {
//        axios.post('/api/people/delete',
//            { personIds: this.state.people.filter(p => p.markedForDeletion).map(p => p.id) })
//            .then(() => {
//                axios.get('/api/people/getall').then(({ data }) => {
//                    data.forEach(p => p.markedForDeletion = false);
//                    this.setState({ people: data });
//                });
//            });
//    }

//    onCheckAllClicked = () => {
//        const nextState = produce(this.state, draftState => {
//            draftState.people.forEach(p => p.markedForDeletion = true);
//        });
//        this.setState(nextState);
//    }

//    onClearAllClicked = () => {
//        const nextState = produce(this.state, draftState => {
//            draftState.people.forEach(p => p.markedForDeletion = false);
//        });
//        this.setState(nextState);
//    }

//    render() {
//        const { person, people } = this.state;
//        return (
//            <div className="container" style={{ marginTop: 40 }}>
//                <HeaderRow person={person} onInputChange={this.onInputChange}
//                    onAddClick={this.onAddClick} />
//                <PeopleTable
//                    onDeleteCheckChanged={this.onDeleteCheckChanged}
//                    people={people}
//                    onDeleteClicked={this.onDeleteClicked}
//                    onCheckAllClicked={this.onCheckAllClicked}
//                    onClearAllClicked={this.onClearAllClicked} />
//            </div>
//        )
//    }

//}

//export default PeoplePage;