'use strict';

import React from 'react';
const ReactRouter = require('react-router');

import Main from './components/main';
import Home from './components/home';
import NotFound from './components/errors/not_found';

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;

const Routes = {
    get: function (config) {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Main}>
                    <IndexRoute config={config} component={Home}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        );
    }
};

export {Routes};
