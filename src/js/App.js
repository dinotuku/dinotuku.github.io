import React, { Component } from 'react';
import { Switch } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Hobbies from './components/Hobbies';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';

import '../css/index.css';

class App extends Component {
  render() {
    const supportsHistory = 'pushState' in window.history
    return (
      <Router basename={process.env.PUBLIC_URL} forceRefresh={!supportsHistory}>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/hobbies" component={Hobbies}></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
