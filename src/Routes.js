import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';


import Followers from './pages/followers';
import Following from './pages/following';
import Home from './pages/home';
import Repos from './pages/repos';
import UserPage from './pages/userpage';
import UserPage2 from './pages/userpage2';


const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/userpage" exact component={ UserPage } />
            <Route path="/repos" exact component={ Repos } />
            <Route path="/following" exact component={ Following } />
            <Route path="/followers" exact component={ Followers } />
            <Route path="/userpage2" exact component={ UserPage2 } />
        </Switch>
    </BRouter>
);

export default Routes;