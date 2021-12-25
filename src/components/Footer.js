import React from 'react';
import { NavLink } from 'react-router-dom';
import bee from '../../public/images/Frame 17.svg';

class Footer extends React.Component {

  constructor() {

    super()

    var user;

    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }
  }

render() {
  return (
    <div className='wrap_footer'>
        <div className='footer'>
            <div className='high_footer'>
               <img src={bee} id='bee2' className='bee'/>
               <NavLink to='#' className='each_footer firstFoot'>Команда</NavLink>
               <NavLink to='#' className='each_footer secondFoot'>Голосовать</NavLink>
               <NavLink to='#' className='each_footer thirdFoot'>Контакты</NavLink>
               <a href={this.state.user ? '/profile/logout' :
               '/login'} className='each_footer enter_footer_link'>
               {this.state.user ? "Выйти" : "Войти"}
               </a>
            </div>
            <div className='middle_footer'>
               <p className='contact_us'>Связаться с нами</p>
               <p className='credentials post1'>Ваша электронная почта</p>
               <form method='POST' className='form_1'>
                 <input type='text' placeholder='email@site.com' className='footer_inputs'/>
                 <p className='credentials quest1'>Вопрос</p>
                 <input type='text' placeholder='Введите ваш вопрос здесь' className='footer_inputs quest2'/>
                 <button type='submit' id='sub_form'>Отправить</button>
               </form>
               <p className='push_me'>Нажимая на кнопку «Отправить»,  вы даёте согласие на обработку данных</p>
            </div>
            <div className='low_footer'>
                © Websterz, 2021
            </div>
        </div>
    </div>
  )
 }

}

export default Footer;
