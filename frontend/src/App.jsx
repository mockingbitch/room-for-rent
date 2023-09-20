import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/Admin.jsx";
import AuthLayout from "./layouts/Auth.js";
import HouseHolderLayout from './layouts/HouseHolder.jsx';
import Layout from './layouts/Layout.jsx';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                    <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                    {/* <Route exact path="/" render={(props) => <HouseHolderLayout {...props} />} /> */}
                    <Route path="/householder" render={(props) => <HouseHolderLayout {...props}/>} />
                    <Route path="/" render={(props) => <Layout {...props} />} />
                    {/* <Redirect from="/" to="/admin/index" /> */}
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App