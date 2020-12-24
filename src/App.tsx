import React, { FunctionComponent } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import { AppHeader, AppLayout, AppSection } from './app-styles';
import history from './history';
import { Home } from './pages/Home';

export const App: FunctionComponent = () => {
    return (
        <AppLayout>
            <Router history={history}>
                <AppHeader />
                <AppSection>
                    <Switch>
                        <Route path="*" name="Home" component={Home} />
                    </Switch>
                </AppSection>
            </Router>
        </AppLayout>
    );
};
