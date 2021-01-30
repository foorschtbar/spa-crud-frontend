import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Navbar from './components/navbar.component';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import List from './components/list.component';
import View from './components/view.component';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <br />
          <Switch>

            <Route path='/list' component={List} />
            <Route path='/view/:id' component={View} />
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/' component={Index} />
          </Switch>
        </Container>
      </Router >
    );
  }
}

export default App;