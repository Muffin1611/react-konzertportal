import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {NavBar} from './NavBar/navbar';
import {Concert} from './Concert/concert';

console.log(process.env.PUBLIC_URL);
ReactDOM.render(<NavBar />, document.getElementById('navbar'));
ReactDOM.render(<Concert source={process.env.PUBLIC_URL + '/concerts.json'}/>, document.getElementById('concert'));
registerServiceWorker();
