import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Feed from './Feed';
import Settings from './Settings';
import InsepectProfile from './InsepectProfile';
import ProfileSetting from './ProfileSetting';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/feed'>
                    <Feed />
                </Route>
                <Route path='/settings'>
                    <Settings />
                </Route>
                <Route path="/insepect-profile">
                    <InsepectProfile />
                </Route>
                <Route path="/profile-setting">
                    <ProfileSetting />
                </Route>
                <Route path='/'>
                    <App />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Router;
