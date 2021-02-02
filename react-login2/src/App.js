import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import navBar from './navBar'
import Login from './Login'


function App() {
  return (
      <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/navbar" component={navBar}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
