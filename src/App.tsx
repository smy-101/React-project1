import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {Redirect} from 'react-router';
import {Money} from './views/Money';
import {Tags} from './views/Tags';
import {Statistics} from './views/Statistics';
import {NoMatch} from './views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`

function App() {
    return (
        <AppWrapper>
        <Router>
            <Switch>
                <Redirect exact from="/" to="/money"/>
                <Route path="/money">
                    {Money}
                </Route>
                <Route path="/tags">
                    {Tags}
                </Route>
                <Route path="/statistics">
                    {Statistics}
                </Route>
                <Route path="*">
                    {NoMatch}
                </Route>
            </Switch>
        </Router>
        </AppWrapper>
    );
}


export default App;
