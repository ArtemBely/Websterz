import React from 'react';
import { Route } from 'react-router-dom';
import RegAdmin from './RegAdmin';
import SigninAdmin from './SigninAdmin';

function LoginAdmin() {


    return (
      <div className='wrap_LoginAdmin'>
          <div className='LoginAdmin'>
              <Route exact path={['/login/admin_router', '/admin_router']} component={RegAdmin} />
          </div>
      </div>
    )

}

export default LoginAdmin;
