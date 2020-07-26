import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './profile.css'


function GroupsNStudents() {
   let [groups, setGroups] = useState([
      { name: 304, id: 1, level: 'Beginner', quantity: 12 },
      { name: 305, id: 2, level: 'Intermediate', quantity: 11 },
      { name: 306, id: 3, level: 'Advanced', quantity: 14 }
   ]);

   let [activeGroup, setActiveGroup] = useState({ name: 304, id: 1, level: 'Beginner', quantity: 12 });

   let changeActiveGroup = e => {
      let name = e.target.textContent;
      let id = e.target.getAttribute('id');
      let level = e.target.dataset.level;
      let quantity = e.target.dataset.quantity;
      console.log('name: ', name, ' id: ', id);
      setActiveGroup({ name, id, level, quantity })
   }

   let groupList = groups.map(group => (
      <li className="profile_groupNavItem" key={group.id}>
         <NavLink to={`/groups/${group.id}`} id={group.id} data-level={group.level} data-quantity={group.quantity}
            className="profile_group_NavItem_Link" onClick={(e) => changeActiveGroup(e)}>
            {group.name}
         </NavLink>
      </li>
   ));



   return (
      <div className="profile_content-right_part">
         <div className="profile_GroupsNStudents">
            <div className="profile_listOfGroups">
               <div className="profile_listOfGroups_groups">
                  <ul className="profile_groupsNav">
                     {groupList}
                     <li className="underlined_gray_tagli">
                        <span className="underlined_gray_tag"></span>
                     </li>
                  </ul>
               </div>

               <div className="profile_listOfGroups_addGroup">
                  <button className="addGroup">+ Новая группа</button>
               </div>
            </div>


            <div className="profile_groupNumber">
               <h2 className="profile_groupNumber_h2">
                  Группа {activeGroup.name}
               </h2>
               <div className="profile_groupNumber_innerDiv">
                  <span className="profile_groupNumber_span">{activeGroup.level}</span>
                  <span className="profile_groupNumber_span">{activeGroup.quantity} студентов</span>
               </div>
            </div>

            <div className="profile_listOfStudents">
               <table>
                  <thead>
                     <tr>
                        <th scope="col">№</th>
                        <th scope="col">Студент</th>
                        <th scope="col">Успеваемость</th>
                        <th scope="col">Посещение, ч</th>
                        <th scope="col">Пройдено</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>1</td>
                        <td>Петров</td>
                        <td>9</td>
                        <td>75/102</td>
                        <td>57%</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Петров</td>
                        <td>6</td>
                        <td>75/102</td>
                        <td>57%</td>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Петров</td>
                        <td>7</td>
                        <td>75/102</td>
                        <td>57%</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}

export default GroupsNStudents