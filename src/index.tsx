import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import './external/dark.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLayerGroup, faLaptop, faBox, faBoxes, faGavel, faToolbox } from '@fortawesome/free-solid-svg-icons';

const hashHistory = require('history').createHashHistory({ basename: process.env.PUBLIC_URL });

library.add(faLayerGroup, faLaptop, faBox, faBoxes, faGavel, faToolbox);

ReactDOM.render(
    <Router history={hashHistory} >
        <App />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
