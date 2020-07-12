import React, { Component } from 'react';
import googleImage from './google.png'

import './css.css'
import InputGroup from './InputGroup'

class LoginForm extends Component {
   render() {
      return (
         <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
               Запустить модальное окно
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
               aria-labelledby="exampleModal" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content modal_window">
                     <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="modal-body">
                        <p className="top_text text-center">Log in to collaborate on "Schools"</p>
                        <span className="col-1"></span>
                        <button type="button" className="google_button btn btn-outline-dark col-10 my-4">
                           <img className="googleImage mx-3 " src={googleImage} alt="sdfe"/> 
                           Log in with Google</button>
                        <p className="or_text text-center">or</p>
                        <InputGroup />
                     </div>
                     {/* <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default LoginForm