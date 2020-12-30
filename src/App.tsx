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
import {Nav} from './components/Nav';


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`


function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
               <Nav/>
            </Wrapper>
        </Router>
    );
}


export default App;
