import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/register';
import Dash from './pages/dashboard';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" component={Login} exact/>
            <Route path="/dashboard" component={Dash}/>
            <Route path="/register" component={Register}/>
        </BrowserRouter>
    )
}

export default Routes;