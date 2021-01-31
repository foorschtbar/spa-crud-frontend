import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

import Navbar from './components/navbar.component';
import List from './components/list.component';
import Form from './components/form.component';

import DemoEntries from './demoentries';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleNavbarTitleChange = this.handleNavbarTitleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddDemoEntries = this.handleAddDemoEntries.bind(this);
    this.state = {
      search: "",
      navbartitle: "Main",
      listRefresh: false,
      alertmsg: ""
    };
  }

  // Save the search field value
  handleSearch(value) {
    this.setState({
      search: value,
    });
  }

  handleNavbarTitleChange(title) {
    this.setState({ navbartitle: title });
  }

  handleAddDemoEntries() {
    this.setState({
      alertmsg: "Please wait..."
    })

    DemoEntries(this);

    this.setState({
      alertmsg: "Done! Give backend a second to store data..."
    })
    setTimeout(() => {
      this.setState({
        alertmsg: "",
        listRefresh: !this.state.listRefresh
      })
    }, 1000);
  }

  render() {
    return (
      <Router>
        <Container>
          <Navbar
            search={this.state.search}
            handleSearch={this.handleSearch}
            handleAddDemoEntries={this.handleAddDemoEntries}
            navbartitle={this.state.navbartitle}
          />
          <br />
          {this.state.alertmsg && <><Alert severity="success">{this.state.alertmsg}</Alert><br /></>}
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/view/:id`} render={(props) => <Form
              formmode="view"
              onNavbarTitleChange={this.handleNavbarTitleChange}
              {...props} />} />
            <Route exact path={`${process.env.PUBLIC_URL}/create`} render={(props) => <Form
              formmode="create"
              onNavbarTitleChange={this.handleNavbarTitleChange}
              {...props} />} />
            <Route path={`${process.env.PUBLIC_URL}/edit/:id`} render={(props) => <Form
              formmode="edit"
              onNavbarTitleChange={this.handleNavbarTitleChange}
              {...props} />} />
            <Route path={`${process.env.PUBLIC_URL}/`} render={() => <List
              alertmsg={this.state.alertmsg}
              search={this.state.search}
              listRefresh={this.state.listRefresh}
              handleSearch={this.handleSearch}
              onNavbarTitleChange={this.handleNavbarTitleChange} />} />
          </Switch>
        </Container>
      </Router >
    );
  }
}

export default App;