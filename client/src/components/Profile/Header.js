import React from 'react';

import './profile.css'
import logo from './logo.jpg'
import avatar from './avatar.jpg'

function Header() {
   return (
      <div className="profile_header">
         <div className="profile_header_logo">
            <img className="profile_header_logo_img" src={logo} alt="Logo" />
         </div>

         <div className="profile_search_div">
            <div className="profile_search_inner_div">
               <span className="material-icons magnifier">search</span>
               <input className="profile_search_input" id="search" type="text" size="60" placeholder="Поиск по группам, материалам..." />
            </div>
         </div>


         <div className="avatarNName">
            <span className="material-icons bell-icon">notifications_none</span>
            <img className="avatar" src={avatar} alt="Avatar" />
            <div className="profile_userName_div">
               <span className="profile_userName">Имя Фамилия</span>
            </div>
         </div>

      </div>
   );
}

export default Header