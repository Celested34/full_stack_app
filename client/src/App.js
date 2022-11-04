
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



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
