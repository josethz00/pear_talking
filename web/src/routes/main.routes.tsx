import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Profile from '../pages/Profile';
import Chat from '../pages/Chat';
import Dashboard from '../pages/Dashboard';
import CreateRoom from '../pages/CreateRoom';

const UserRoutes: React.FC = ()=>{

    return(
        <div style={{ marginTop: 25, marginLeft: 15, marginRight: 15 }}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Dashboard} exact />
                    <Route path="/create-room" component={CreateRoom} />
                    <Route path="/chat_com_params" component={Chat} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
export default UserRoutes;