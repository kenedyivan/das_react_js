import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history'
import LandingPage from "./Pages/LandingPage";

const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter>
        <Route history={history} path='/' component={LandingPage}
               exact/>
        <Route history={history} path='/districts/:id/sub-counties' component={App}
               exact/>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
