import React from 'react';

import './loginPage.css'
import logo from './logo.jpg'
import LoginInputs from './LoginInputs'

function LoginLeftSide() {
   return (

      <div className="left-side_container">
         <div className="logo">
            <img src={logo} alt="Logo" />
         </div>
         <div className="inputSection">
            <LoginInputs />
         </div>
         <p className="bottom_text">© 2020 EnSchool by Tapson. All rights reserved.</p>
      </div>

   );
}

export default LoginLeftSide