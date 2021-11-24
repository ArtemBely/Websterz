import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {


    return (
      <div className='wrap_login'>
          <div className='login_inside'>
              <form action='/login/signin' method='POST' className='login_form'>
                  <p className='enter_to comm'>Войти в аккаунт</p>
                    <p><span className='no_acc comm'>Нет аккаунта?</span>
                      <NavLink to='/registration' className='reg_but comm'>
                        Зарегистрироваться</NavLink></p>
                        <p className='your_email comm'>Ваш email</p>
                        <input type='text' placeholder='email@site.com' name='email' className='login_inp' required/>
                        <p className='design_pass comm'>Пароль</p>
                        <input type='password' placeholder='●●●●●●●●●●●●●●' name='password' className='login_inp inp_pass' required/>
                        <input type='radio' className='login_inp radio_inp'/>
                      <span className='remember_me comm'>Запомнить меня</span>
                    <span className='forgot_pass'>Забыли пароль?</span>
                  <button type='submit' id='enter_but'>Войти</button>
              </form>
          </div>
      </div>
    )

}

export default Login;
