import React from 'react';
import ReactDOM from 'react-dom';
import './core/styling/fonts.css';

import * as serviceWorker from './serviceWorker';
import App from './core/modules/app/App';

import './core/i18next';

ReactDOM.render(<App />, document.getElementById('react-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
