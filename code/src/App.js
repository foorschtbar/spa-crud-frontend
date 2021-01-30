import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Navbar from './components/navbar.component';
import List from './components/list.component';
import Form from './components/form.component';

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
            <Route path='/view/:id' render={(props) => <Form
              formmode="view"
              onNavbarTitleChange={this.handleNavbarTitleChange}
              {...props} />} />
            <Route exact path='/create' render={(props) => <Form
              formmode="create"
              onNavbarTitleChange={this.handleNavbarTitleChange}
              {...props} />} />
            <Route path='/edit/:id' render={(props) => <Form
              formmode="edit"
              onNavbarTitleChange={this.handleNavbarTitleChange}
              {...props} />} />
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