import React from 'react';

import './loginPage.css'

function LoginInputs() {
   return (

      <div className="col">
         <div className="row mb-4 mx-0">
            <h3>Войдите в свой аккаунт</h3>
         </div>
         <form className="row justify-content-center mx-0">
            <div className="form-row justify-content-between fullWidth">
               <span className="above_inputs">Логин</span>
            </div>
            <div className="form-row">
               <input className="col-12 mb-3 px-3 form-control loginPage_input" id="email" type="text" size="60" placeholder="Email" />
            </div>

            <div className="form-row justify-content-between fullWidth">
               <span className="above_inputs">Пароль</span>
               <a className="above_inputs" href="">Забыли пароль</a>
            </div>
            <div className="form-row">
               <input className="col-12 mb-4 px-3 form-control loginPage_input" id="password" type="password" size="60" placeholder="Password" />
            </div>
         </form>
         <div className="row mt-2 mx-0">
            <button type="button" className="btn btn-primary col login_button justify-content-between" data-toggle="modal" data-target="#exampleModal">
               <div className="form-row justify-content-between fullWidth">
                  <span></span>
                  <span>Войти</span>
                  <span>→</span>
               </div>
            </button>
         </div>
      </div >
   );
}

export default LoginInputs