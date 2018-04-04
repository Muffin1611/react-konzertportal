import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {NavBar} from './NavBar/navbar';
import {Concert} from './Concert/concert';
import {Featured} from './Featured/featured';
import {Footer} from "./Footer/footer";

ReactDOM.render(<NavBar />, document.getElementById('navbar'));
ReactDOM.render(<Featured source={process.env.PUBLIC_URL + '/concerts.json'}/>, document.getElementById('featured'));
ReactDOM.render(<Concert source={process.env.PUBLIC_URL + '/concerts.json'}/>, document.getElementById('concert'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
registerServiceWorker();
