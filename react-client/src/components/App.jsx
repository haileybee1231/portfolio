import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter, browserHistory } from 'react-router-dom';
import $ from 'jquery';

import Main from './Main.jsx';

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
        </Switch>
      </Router>
    )
  }
}

export default App;
