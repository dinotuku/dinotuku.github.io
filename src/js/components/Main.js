import React, { Component } from 'react';
import FrontPage from './FrontPage';
import Projects from './Projects';
import Hobbies from './Hobbies';

class Main extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="main">
        <FrontPage />
        <Projects />
        <Hobbies />
      </div>
    );
  }
}

export default Main;
