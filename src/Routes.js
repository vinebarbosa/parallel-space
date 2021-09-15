import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Login from './pages/Login'
import Register from './pages/Register'
import Recover from './pages/Recover'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/recover" component={Recover} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
