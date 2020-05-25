import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import NavBar from './components/Navbar'

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/login" component={login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App
