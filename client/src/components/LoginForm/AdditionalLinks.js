import React from 'react';

import './css.css'

function AdditionalLinks() {


   return (

      <div className="additional">
         <div className="row justify-content-center my-3">
            <a className="text-center" href="#">Log in with SAML SSO</a>
         </div>

         <div className="row justify-content-center my-3">
            <a className="text-center" href="#">Forgot password?</a>
         </div>

         <div className="row justify-content-center my-3">
            <p className="bottom_text">No account? <a className="text-center" href="#">Create one</a></p>
         </div>
      </div>


   );
}

export default AdditionalLinks