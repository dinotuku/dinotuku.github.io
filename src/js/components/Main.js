import React, { Component } from 'react';
import FrontPage from './FrontPage';
import Projects from './Projects';
import Publications from './Publications';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <FrontPage />
        <Projects />
        <Publications />
      </div>
    );
  }
}

export default Main;
