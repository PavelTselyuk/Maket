import React from 'react';

import './loginPage.css'
import logo from './logo.jpg'
import LoginInputs from './LoginInputs'

function LoginLeftSide() {
   return (

      <div className="col-4 container">
         <div className="row align-items-start ml-5 mt-5">
            <img src={logo} alt="Logo" />
         </div>
         <div className="row align-items-center ml-5 inputGroup">
            <LoginInputs />
         </div>
         <p className="text-center bottom_text">© 2020 EnSchool by Tapson. All rights reserved.</p>
      </div>

   );
}

export default LoginLeftSide