import React, { Component } from 'react';
import {BrowserRouter as Router,Route, } from "react-router-dom";
import Main from '../Components/Main';
import Mobile from '../Components/Mobile';
import Cars from '../Components/Cars';
import Header from '../Components/Header';
import Next from '../Components/Next';
import Next1 from '../Components/Next1';
import Chat from '../Components/Chat';
import Motor from '../Components/Motor';
import House from '../Components/House';
import Tv from '../Components/Tv';
import Tablet from '../Components/Tablet';
import Chat1 from '../Components/Chat1';

class AppRouter extends Component {
      render(){
          return(
              <Router>
               <Route exact path="/" component={Main} />
               <Route path="/Mobile" component={Mobile} />
               <Route path="/Cars" component={Cars} />
               <Route path="/header" component={Header} />
               <Route path="/Next" component={Next} />
               <Route path="/Next1" component={Next1} />
               <Route path="/Chat" component={Chat} />
               <Route path="/Motor" component={Motor} />
               <Route path="/House" component={House} />
               <Route path="/Tv" component={Tv} />
               <Route path="/Tablet" component={Tablet} />
               <Route path="/Chat1" component={Chat1} />

              </Router>
            )
    }
}

export default AppRouter;