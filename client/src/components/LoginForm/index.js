import React, { Component } from 'react';
import googleImage from './google.png'

import './css.css'
import InputGroup from './InputGroup'
import AdditionalLinks from './AdditionalLinks'

class LoginForm extends Component {
   render() {
      return (
         <div>
            <div className="modal" id="exampleModal" tabIndex="-1" role="dialog"
               aria-labelledby="exampleModal" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content modal_window">
                     <div className="modal-body">
                        <p className="top_text text-center">Log in to collaborate on "Schools"</p>
                        <span className="col-1"></span>
                        <button type="button" className="google_button btn btn-outline-dark col-10 my-4">
                           <img className="googleImage mx-3 " src={googleImage} alt="sdfe"/> 
                           Log in with Google</button>
                        <p className="or_text text-center">or</p>
                        <InputGroup />
                        <AdditionalLinks />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default LoginForm