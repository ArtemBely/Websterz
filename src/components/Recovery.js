import React from 'react';
import { NavLink } from 'react-router-dom';

class Recovery extends React.Component {

  constructor() {

    super()

    var errors;
    if(__isBrowser__) {
      errors = window.__INITIAL_ERRORS__;
    }

    this.state = {
      errors
    }

  }

  errMsgs = () => {
    if(this.state.errors) {
      return (
        <p className='wrap_reg_errors2'>
           {this.state.errors.map(err => (
             <p className='reg_errors'>{err}</p>
           ))}
        </p>
      )
    }
  }

  render() {
    return (
      <div className='wrap_recovery'>
          <div className='recovery'>
              <form action='/login/recovery' method='POST' className='login_form rec_form rec_form2'>
                  <p className='enter_to comm'>Восстановление пароля</p>
                    <p className='no_acc comm enter_email1'>Введите свой email, мы отправим Вам код для восстановления пароля</p>
                        <p className='your_email comm rec_email'>Ваш email</p>
                        <input type='text' name='recovery_email' placeholder='email@site.com' className='login_inp rec_inp' required/>
                  <button type='submit' className='rec_but' id='enter_but'>Восстановить</button>
                  {this.errMsgs()}
              </form>
          </div>
      </div>
    )
  }

}

export default Recovery;
