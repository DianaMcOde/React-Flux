import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import NotFoundPage from './NotFoundPage'
import ManageCoursePage from './ManageCoursePage';

//Route component is used to create the route in the URL and passes its props 
//to the component stated - history, location & match. It is available to all components
//within the App
function App(){
     return (
         <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
         </div>
     ) 
}

export default App;