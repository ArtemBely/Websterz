import React from 'react';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {

  returnErrorsLogin = () => {
    if(this.props.errorsLogin) {
      return (
        <p className='wrap_reg_errors errs_login'>
            {this.props.errorsLogin.map(error => (
              <p className='reg_errors'>{error}</p>
            ))}
        </p>
      )
    }
  }

  render() {
    return (
      <div className='wrap_login'>
          <div className='login_inside'>
              <form action='/login/signin' method='POST' className='login_form'>
                  <p className='enter_to comm'>Войти в аккаунт</p>
                    <p><span className='no_acc comm'>Нет аккаунта?</span>
                      <NavLink to='/registration' className='reg_but comm'>
                         Регистрация</NavLink></p>
                        <p className='your_email comm'>Ваш email</p>
                        <input type='text' placeholder='email@site.com' name='email' className='login_inp' required/>
                        <p className='design_pass comm'>Пароль</p>
                        <input type='password' placeholder='●●●●●●●●●●●●●●' name='password' className='login_inp inp_pass' required/>
                        <input type='radio' className='radio_inp'/>
                      <span className='remember_me comm'>Запомнить меня</span>
                    <NavLink to='/login/recovery' className='forgot_pass'>Забыли пароль?</NavLink>
                  <button type='submit' id='enter_but'>Войти</button>
              </form>
              {this.returnErrorsLogin()}
          </div>
      </div>
    )
  }

}

export default Login;
