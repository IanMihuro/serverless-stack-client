import React from 'react';
import { Route, Switch } from "react-router-dom";
import AppliedRoute from './components/AppliedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";

import Test from './components/TestComponent';

export default function Router({appProps}) {
    return(
        <Switch>
            <AppliedRoute path="/" exact component={Home} appProps={appProps} />
            <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
            <UnauthenticatedRoute path="/login/reset" exact component={ResetPassword} props={appProps} />{/*TODO: change to unauthenticated route */}
            <UnauthenticatedRoute path="/test" component={Test} />

            {/* Default password*/}
            <Route component={NotFound} />
        </Switch>
    )
}