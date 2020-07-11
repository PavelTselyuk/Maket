import React, { Component } from 'react';

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
                  <div className="modal-content container">
                     {/* <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div> */}
                     <div className="modal-body align-self-center">
                        <h4 className="text-center">Log in to collaborate on "Schools"</h4>
                        <button type="button" class="btn btn-outline-dark col my-4">Темный</button>
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