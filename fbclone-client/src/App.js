import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles/";
import jwtDecode from "jwt-decode";
import themeObject from "./util/theme";
//Redux
import {Provider} from 'react-redux';
import store from './redux/store';

//Components
import NavBar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";
//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme(themeObject);

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodeToken = jwtDecode(token);
  if (decodeToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute
                  exact
                  path="/signup"
                  component={signup}
                  authenticated={authenticated}
                />
                <AuthRoute
                  exact
                  path="/login"
                  component={login}
                  authenticated={authenticated}
                />
              </Switch>
            </div>
          </Router>
        </Provider>
       
      </MuiThemeProvider>
    );
  }
}

export default App;
