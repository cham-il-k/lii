import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
//import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx';
//import { store, persistStor } from './store/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    
        <Router >
            <App />
        </Router>        

    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
