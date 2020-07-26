import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './profile.css'


function LeftNavbar() {
   return (
      <div className="left_navbar">
         <div className="profile_LeftNavbar-content">
            <ul className="profile_LeftNavbar_options">
               <li className="profile_LeftNavbar_li profile_dashboard">
                  <NavLink to="/dashboard" className="profile_navbar_link">
                     <span className="material-icons sidebar_icons">dashboard</span>
                     Дашбоард
                  </NavLink>
               </li>
               <li className="profile_LeftNavbar_li profile_groups">
                  <NavLink to="/groups" className="profile_navbar_link">
                     <span className="material-icons sidebar_icons">group</span>
                     Группы
                  </NavLink>
               </li>
               <li className="profile_LeftNavbar_li profile_materials">
                  <NavLink to="/materials" className="profile_navbar_link">
                     <span className="material-icons sidebar_icons">folder</span>
                     Материалы
                  </NavLink>
               </li>
            </ul>

            <ul className="profile_LeftNavbar_li profile_LeftNavbar_settings">
               <li className="profile_settings">
                  <NavLink to="/settings" className="profile_navbar_link">
                     <span className="material-icons sidebar_icons">settings</span>
                     Настройки
                  </NavLink>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default LeftNavbar