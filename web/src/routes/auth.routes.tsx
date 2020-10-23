import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

const UserRoutes: React.FC = ()=>{

    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={SignIn} exact />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
        </BrowserRouter>
        </>
    );
};

export default UserRoutes;