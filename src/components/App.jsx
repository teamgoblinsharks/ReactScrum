import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Board from './Board.jsx';

class App extends Component {
    render() {
    return (
        <Router>
        <div>
            <Header />
            <Switch>
            <Route exact path="/" component={Board} />
            </Switch>
        </div>
        </Router>
    );
    }
}

export default App;
