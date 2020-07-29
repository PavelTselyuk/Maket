import React, { useState } from 'react';

import './profile.css'
import logo from './logo.jpg'
import avatar from './avatar.jpg'

function Header() {
   let [notificationCounter, setNotificationCounter] = useState(1);

   let addNotificationCounter = () => {
      setNotificationCounter(notificationCounter + 1);
   }

   let clearNotificationCounter = () => {
      setNotificationCounter(0);
   }

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
            <button id="addCount" className="addCount" onClick={addNotificationCounter}>+notificator</button>
            <button id="clearCount" className="clearCount" onClick={clearNotificationCounter}>to0notificator</button>
         </div>


         <div className="avatarNName">
            <div className="notifications_group">
               <div className="profile_notifications_counter_div">
                  <div className={notificationCounter > 0 ?
                     "profile_notifications_counter addcount" : "profile_notifications_counter"}
                     data-count={notificationCounter}></div>
                  <span className="material-icons bell-icon">notifications_none</span>
               </div>
            </div>
            <img className="avatar" src={avatar} alt="Avatar" />
            <div className="profile_userName_div">
               <span className="profile_userName">Имя Фамилия</span>
            </div>
         </div>

      </div >
   );
}

export default Header