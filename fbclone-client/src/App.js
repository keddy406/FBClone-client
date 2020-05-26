import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles/';

//Components
import NavBar from "./components/Navbar";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8ae4ff',
      main: '#50b2f4',
      dark: '#0083c1',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e1684f',
      main: '#aa3925',
      dark: '#740000',
      contrastText: '#ffffff',
    },
  },
    typography:{
      userNextVariants: true
    }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme ={theme}>
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
      </MuiThemeProvider>
    );
  }
}

export default App;
