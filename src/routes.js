import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/login" component={Login} exact/>
        </BrowserRouter>
    )
}

export default Routes;