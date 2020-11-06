import React, { Component } from 'react';
import {BrowserRouter as Router,Route, } from "react-router-dom";
import Main from '../Components/Main';
import Mobile from '../Components/Mobile';

class AppRouter extends Component {
      render(){
          return(
              <Router>
               <Route exact path="/" component={Main} />
               <Route path="/Mobile" component={Mobile} />
              </Router>
            )
    }
}

export default AppRouter;