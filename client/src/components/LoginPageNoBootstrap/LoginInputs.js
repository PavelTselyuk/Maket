import React, { useState } from 'react';

import './loginPage.css'

function LoginInputs() {
   let [visibility, setVisibility] = useState(false);

   return (
      <div className="">
         <div className="voydite_nadpis">
            <h3>Войдите в свой аккаунт</h3>
         </div>
         <form className="inputs_form">
            <div className="above_inputs">
               <span className="">Логин</span>
            </div>
            <div className="">
               <input className="loginPage_inputs login_input" id="email" type="text" size="60" placeholder="Email" />
            </div>

            <div className="above_inputs">
               <span className="">Пароль</span>
               <a className="" href="">Забыли пароль?</a>
            </div>
            <div className="with_icon loginPage_inputs">
               <input className="password_input" id="password" type={visibility ? "text" : "password"} size="60" placeholder="Password" />
               {visibility ?
                  <i className="material-icons" onClick={() => setVisibility(!visibility)}>visibility</i>
                  :
                  <i className="material-icons" onClick={() => setVisibility(!visibility)}>visibility_off</i>
               }
            </div>
         </form>
         <div className="">
            <button type="button" className="login_button" data-toggle="modal" data-target="#exampleModal">
               <div className="login_button_div">
                  <span></span>
                  <span className="">Войти</span>
                  <span>→</span>
               </div>
            </button>
         </div>
      </div >
   );
}

export default LoginInputs