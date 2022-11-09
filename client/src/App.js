import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import withContext from "./Context";
import Courses from "./components/Courses";



const HeaderWithContext = withContext(Header);


const route = () => (
  <Router>
    <div>
    <HeaderWithContext />
      <Switch>
        <Route exact path="/" component={Courses} />
      </Switch>
    </div>
  </Router>
);

export default route

//Treehouse Set up the React App - starter project files