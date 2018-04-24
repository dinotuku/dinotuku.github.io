import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
