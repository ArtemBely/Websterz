import React from 'react';
import { NavLink } from 'react-router-dom';

class NewPassword extends React.Component {

  constructor() {

    super()

    var token;
    var errors;
    if(__isBrowser__) {
      token = window.__INITIAL_DATA__;
      errors = window.__INITIAL_ERRORS__;
    }

    this.state = {
      token,
      errors
    }

  }

  errMsgs2 = () => {
    if(this.state.errors) {
      return (
        <p className='wrap_reg_errors2 wrap_reg_errors2_top'>
           {this.state.errors.map(err => (
             <p className='reg_errors'>{err}</p>
           ))}
        </p>
      )
    }
  }

  render() {
    return (
      <p className='wrap_newpass'>
          <div className='newpass'>
              <form action={'/login/reset/' + this.state.token} method='POST' className='login_form rec_form'>
                  <p className='enter_to comm'>Восстановление пароля</p>
                    <p className='no_acc comm n_pass1'>Введите новый пароль</p>
                    <input type='password' name='recovery_pass' className='login_inp rec_inp2 n_pass_inp' required/>
                    <p className='your_email comm rec_email2'>Повторите пароль</p>
                    <input type='password' name='recovery_pass2' className='login_inp rec_inp2 n_pass_inp' required/>
                  <button type='submit' className='n_pass_but' id='enter_but'>Восстановить</button>
                  {this.errMsgs2()}
              </form>
          </div>
      </p>
    )
  }

}

export default NewPassword;
