import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter, browserHistory } from 'react-router-dom';
import $ from 'jquery';

import Main from './Main.jsx';
import Portfolio from './Portfolio.jsx';
import MusicPage from './MusicPage.jsx';
import Advocacy from './Advocacy.jsx';
import Games from './Games.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';
import Snake from '../projects/snake/Snake.jsx';
import WoTR_Calc from '../projects/calc/WoTR_Calc.jsx';

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
          <Route path='/projects/wotr_calc' component={ WoTR_Calc } />
          <Route path='/projects' component={ Portfolio } />
          <Route path='/music' component={ MusicPage } />
          <Route path='/advocacy' component={ Advocacy } />
          <Route path='/games' component={ Games } />
          <Route path='/resume' component={ Resume } />
          <Route path='/contact' component={ Contact } />
          <Route path='/contact' component={ Contact } />
        </Switch>
      </Router>
    )
  }
}

export default App;
