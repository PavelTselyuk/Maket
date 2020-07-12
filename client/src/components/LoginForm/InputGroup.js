import React from 'react';

import './css.css'

function InputGroup() {


   return (
      <form className="row justify-content-center mx-1">
         <div className="form-row">
            <div className="col">
               <span className="col-1"></span>
               <input className="col-10 mt-4 mb-3 form-control modal_window_input" id="email" type="text" size="60" placeholder="Email" />
            </div>
         </div>

         <div className="form-row">
            <div className="col">
               <span className="col-1"></span>
               <input className="col-10 mt-3 mb-4 form-control modal_window_input" id="password" type="text" size="60" placeholder="Password" />
            </div>
         </div>

         <button type="button" className="login_button btn btn-outline-dark col-10 my-4">Log in</button>
      </form>
   );
}

export default InputGroup