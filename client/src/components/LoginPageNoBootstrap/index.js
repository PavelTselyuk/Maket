import React from 'react';

import './loginPage.css'
import RightImage from './RightImage.jpg'
import LoginLeftSide from './LoginLeftSide'

function LoginPage() {
   return (
      <div className="main_div">
         <div className="main_flex-container">
            <LoginLeftSide />
            <div className="img_container">
               <img className="image" src={RightImage} alt="Awesome Image here" />
            </div>
         </div>
      </div>

   );
}

export default LoginPage