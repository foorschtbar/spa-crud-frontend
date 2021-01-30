import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Navbar from './components/navbar.component';
import Create from './components/create.component';
import Edit from './components/edit.component';
import List from './components/list.component';
import View from './components/view.component';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleNavbarTitleChange = this.handleNavbarTitleChange.bind(this);
    this.state = {
      search: "",
      navbartitle: "Main"
    };
  }

  // Save the search field value
  handleSearch(event) {
    this.setState({
      search: event.target.value,
    });
  }

  handleNavbarTitleChange(title) {
    this.setState({ navbartitle: title });
  }

  render() {
    return (
      <Router>
        <Container>
          <Navbar
            search={this.state.search}
            handleSearch={this.handleSearch.bind(this)}
            navbartitle={this.state.navbartitle}
          />
          <br />
          <Switch>
            <Route path='/view/:id' render={(props) => <View
              onNavbarTitleChange={this.handleNavbarTitleChange} {...props} />} />
            <Route exact path='/create' render={() => <Create
              onNavbarTitleChange={this.handleNavbarTitleChange} />} />
            <Route path='/edit/:id' render={(props) => <Edit
              onNavbarTitleChange={this.handleNavbarTitleChange} {...props} />} />
            <Route path='/' render={() => <List
              search={this.state.search}
              onNavbarTitleChange={this.handleNavbarTitleChange} />} />
          </Switch>
        </Container>
      </Router >
    );
  }
}

export default App;