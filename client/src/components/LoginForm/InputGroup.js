import React from 'react';

import './css.css'

function InputGroup() {


   return (
      <form className="row justify-content-center mx-1">
         <div className="form-row">
            <div className="col">
               <span className="col-1"></span>
               <input className="col-10 my-4 form-control" id="email" type="text" size="60" placeholder="Email"
                  onKeyDown />
            </div>
         </div>

         <div className="form-row">
            <div className="col">
               <span className="col-1"></span>
               <input className="col-10 my-4 form-control" id="password" type="text" size="60" placeholder="Password"
                  onKeyDown />
            </div>
         </div>

         <button type="button" className="btn btn-outline-dark col-10 my-4">Log in</button>
      </form>
   );
}

export default InputGroup