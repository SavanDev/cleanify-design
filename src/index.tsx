import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDownload, faBook, faLayerGroup, faLaptop, faBox, faBoxes, faGavel } from '@fortawesome/free-solid-svg-icons';

const hashHistory = require('history').createHashHistory({ basename: process.env.PUBLIC_URL + '/' });

library.add(faDownload, faBook, faLayerGroup, faLaptop, faBox, faBoxes, faGavel);

ReactDOM.render(
    <Router history={hashHistory} >
        <App />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
