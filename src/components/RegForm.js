import React from 'react';
import { NavLink } from 'react-router-dom';


function RegForm() {


    return (
      <div className='wrap_reg'>
          <div className='login_inside'>
              <form action='/login/registration' method='POST' className='login_form'>
                  <p className='enter_to comm'>Зарегистрировать аккаунт</p>
                    <p><span className='no_acc comm'>Уже зарегистрированы?</span>
                      <NavLink to='/login' className='reg_but comm'>
                        Войти</NavLink></p>
                        <p className='your_email comm'>Ваш email</p>
                        <input type='text' placeholder='email@site.com' name='email' className='login_inp' required/>
                        <p className='design_pass comm'>Пароль</p>
                        <input type='password' placeholder='●●●●●●●●●●●●●●' name='password' className='login_inp inp_pass' required/>
                        <input type='radio' className='login_inp radio_inp'/>
                        <input type='hidden' name='scores' value="0" />
                        <input type='hidden' name='votation' value="" />
                        <input type='hidden' name='arrayOfResults' value="" />
                      <span className='remember_me comm'>Запомнить меня</span>
                    <span className='forgot_pass' style={{ opacity: 0, zIndex: 0 }}>Забыли пароль?</span>
                  <button type='submit' id='reg_but2'>Зарегистрироваться</button>
              </form>
          </div>
      </div>
    )

}

export default RegForm;
