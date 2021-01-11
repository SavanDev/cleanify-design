import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLayerGroup, faLaptop, faBox, faBoxes, faGavel, faToolbox } from '@fortawesome/free-solid-svg-icons';

const hashHistory = require('history').createHashHistory();

library.add(faLayerGroup, faLaptop, faBox, faBoxes, faGavel, faToolbox);

ReactDOM.render(
    <Router history={hashHistory} >
        <App />
    </Router>,
    document.getElementById('root'));
