import React from 'react';
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './components/AppliedRoute';
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default function Router({appProps}) {
    return(
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <AppliedRoute path="/login" component={Login} appProps={appProps} />

            <Route component={NotFound} />
        </Switch>
    )
}