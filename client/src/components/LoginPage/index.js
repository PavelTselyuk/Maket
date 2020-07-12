import React from 'react';

import './loginPage.css'
import RightImage from './RightImage.jpg'
import LoginLeftSide from './LoginLeftSide'

function LoginPage() {
   return (
      <div className="">
         <div className="row">
            <LoginLeftSide />
            <div className="col-7">
               <img className="right_image" src={RightImage} alt="Awesome Image here" />
            </div>
         </div>
      </div>

   );
}

export default LoginPage