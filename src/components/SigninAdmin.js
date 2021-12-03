import React from 'react';

function SigninAdmin() {

    return (
      <div className='wrap_SigninAdmin'>
          <div className='SigninAdmin'>
              <form action='/login/admin_router_signin' method='POST' className='form_SigninAdmin'>
                 <input type='text' name='email' required/>
                 <input type='password' name='password' required/>
                 <button type='submit'>Войти</button>
              </form>
          </div>
      </div>
    )

}

export default SigninAdmin;
