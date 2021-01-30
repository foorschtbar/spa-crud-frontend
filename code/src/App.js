import { React, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Navbar from './Navbar';
import Members from './Members'

class App extends Component {

  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
  }

  handler() {
    this.setState({
      someVar: 'some value'
    })
  }

  render() {
    return (
      <Router>
        <Container>
          <Navbar handler={this.handler} />
          <Switch>
            <Route path="/members">
              <Members />
            </Route>
            <Route path="/">
              <Members />
            </Route>
          </Switch>
        </Container>
      </Router >
    );
  }
}

export default App;