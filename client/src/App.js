
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";


import Courses from "./components/Courses";


const routes = () => (
  <Router>
    <div>
    
      <Switch>
        <Route exact path="/" component={Courses} />
        
      </Switch>
    </div>
  </Router>
);

export default routes
