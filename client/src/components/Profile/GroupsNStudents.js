import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './profile.css'
import avatar from './avatar.jpg'


function GroupsNStudents() {
   let [groups, setGroups] = useState([
      { name: 304, id: 1, level: 'Beginner', quantity: 12 },
      { name: 305, id: 2, level: 'Intermediate', quantity: 11 },
      { name: 306, id: 3, level: 'Advanced', quantity: 14 }
   ]);

   let [students, setStudents] = useState([
      { id: 1, name: "Петров Стас",    marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 2, name: "Сидоров Влад",   marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 3, name: "Конева Юля",     marks: 9.1, attendance: "75",  done: "50%",  photo: avatar },
      { id: 4, name: "Сидоров Влад",   marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 5, name: "Конева Юля",     marks: 3.9, attendance: "75",  done: "50%",  photo: avatar },
      { id: 6, name: "Сидоров Влад",   marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 7, name: "Конева Юля",     marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 8, name: "Сидоров Влад",   marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 9, name: "Конева Юля",     marks: 9.3, attendance: "75",  done: "50%",  photo: avatar },
      { id: 10, name: "Сидоров Влад",  marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 11, name: "Конева Юля",    marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 12, name: "Сидоров Влад",  marks: 7,   attendance: "75",  done: "50%",  photo: avatar },
      { id: 13, name: "Конева Юля",    marks: 3.7, attendance: "75",  done: "50%",  photo: avatar }
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
            Группа {group.name}
         </NavLink>
      </li>
   ));

   let maxMark = Math.max(...(students.map(student => (student.marks))));
   console.log(maxMark);
   let studentsList = students.map((student, index) => {
      return (
         <tr className="profile_studentFromList" key={student.id}>
            <td className="profile_TableOfStudents№">{index + 1} </td>
            <td><img className="photo" src={student.photo} alt="Ava" /> {student.name}</td>
            <td className="td_with_icon">
               {student.marks == maxMark && student.marks > 4 ?
                  <span className="material-icons profile_studentFromListIcon">star</span> : ""
               }
               {student.marks > 9 && student.marks != maxMark ?
                  <span className="material-icons profile_studentFromListIcon">stars</span> : ""
               }
               {student.marks <= 4 ?
                  <span className="material-icons profile_studentFromListIcon">error</span> : ""
               }
               {student.marks < 9 && student.marks != maxMark && student.marks > 4 ? <span className="profile_studentFromListPseudoIcon"></span> : ""}

               <span className="profile_studentFromListMark">{student.marks}</span></td>
            <td>{student.attendance}<span className="profile_studentFromListAttendance">/102</span></td>
            <td className="profile_TableOfStudentsDone">{student.done}</td>
         </tr >
      )
   }
   );



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
                  <button id="addGroup" className="addGroup">+ Новая группа</button>
               </div>
            </div>


            <div className="profile_groupNumber">
               <h2 className="profile_groupNumber_h2">
                  {activeGroup.name}
               </h2>
               <div className="profile_groupNumber_innerDiv">
                  <span className="profile_groupNumber_span">{activeGroup.level}</span>
                  <span className="profile_groupNumber_span">{activeGroup.quantity} студентов</span>
               </div>
            </div>

            <div className="profile_listOfStudents">
               <div className="profile_listOfStudents_tableWrapper">
                  <table className="profile_tableOfStudents">
                     <thead className="profile_headOfTableOfStudents">
                        <tr>
                           <th scope="col" className="profile_TableOfStudents№">№</th>
                           <th scope="col">Студент</th>
                           <th scope="col">Успеваемость</th>
                           <th scope="col">Посещение, ч</th>
                           <th scope="col" className="profile_TableOfStudentsDone">Пройдено</th>
                        </tr>
                     </thead>
                     <tbody className="profile_bodyOfTableOfStudents">
                        {studentsList}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}

export default GroupsNStudents