import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import AddClassmate from './addClassmate';
import TakeAttendance from './TakeAttendance';
import HereToday from './HereToday';
import Done from './Done';

class App extends React.Component {
    render() {
        return (
            <div >
                <Route exact path='/' component={HomePage} />
                <Route exact path='/addClassmate' component={AddClassmate} />
                <Route exact path='/takeAttendance' component={TakeAttendance} />
                <Route exact path='/hereToday' component={HereToday} />
                <Route exact path='/done' component={Done}/>
            </div>);
    }
}

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
