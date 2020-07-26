import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './profile.css'
import Header from './Header'
import GroupsNStudents from './GroupsNStudents'
import LeftNavbar from './LeftNavbar'


function Profile() {
   return (
      <div className="main_profile_div">
         <div className="main_profile_flex-container">
            <Header />
            <div className="profile_content">
               <Router>
                  <LeftNavbar />
                  <Route exact path="/settings" component={GroupsNStudents} />
                  <Route exact path="/groups" component={GroupsNStudents} />
                  <Route path="/groups/:id" component={GroupsNStudents} />
                  <Route exact path="/materials" component={GroupsNStudents} />
                  <Route exact path="/dashboard" component={GroupsNStudents} />
               </Router>
            </div>
         </div>
      </div>

   );
}

export default Profile