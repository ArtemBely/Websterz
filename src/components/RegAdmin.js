import React from 'react';

function RegAdmin() {


    return (
      <div className='wrap_RegAdmin'>
          <div className='RegAdmin'>
              <form action='/login/admin_router' method='POST' className='form_RegAdmin'>
                 <input type='text' name='email' required/>
                 <input type='password' name='password' required/>
                 <button type='submit'>Зарегистрироваться</button>
              </form>
          </div>
      </div>
    )

}

export default RegAdmin;
