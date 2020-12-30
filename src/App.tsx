import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import {Redirect} from 'react-router';
import {Money} from './views/Money';
import {Tags} from './views/Tags';
import {Statistics} from './views/Statistics';
import {NoMatch} from './views/NoMatch';
import styled from 'styled-components';


const Wrapper = styled.div`
  border: 1px solid black;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  border: 1px solid red;
  flex-grow: 1;
  overflow: auto;
`
const Nav = styled.nav`
  border: 1px solid blue;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }  
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
                <Nav>
                    <ul>
                        <li>
                            <Link to="/tags">标签</Link>
                        </li>
                        <li>
                            <Link to="/money">记账</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计</Link>
                        </li>
                    </ul>
                </Nav>
            </Wrapper>
        </Router>
    );
}


export default App;
