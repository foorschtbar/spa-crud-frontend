import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

//import Navbar from './Navbar';
import Members from './Members'

export default function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/">
            <Members />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}