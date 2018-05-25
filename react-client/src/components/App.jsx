import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter, browserHistory } from 'react-router-dom';
import $ from 'jquery';

import Main from './Main.jsx';
import Portfolio from './Portfolio.jsx';
import Resume from './Resume.jsx';
import Snake from '../snake/Snake.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  // App component handles all redirections based on path options below
  // switch first route to Profile to see profile
  render() {
    return (

      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route path='/projects/snake' component={ Snake } />
          <Route path='/projects' component={ Portfolio } />
          <Route path='/music' component={ Main } />
          <Route path='/advocacy' component={ Main } />
          <Route path='/games' component={ Main } />
          <Route path='/resume' component={ Resume } />
        </Switch>
      </Router>
    )
  }
}

export default App;
