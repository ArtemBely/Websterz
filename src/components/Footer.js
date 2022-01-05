import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
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

returnFooter = () => {
  if(typeof window != "undefined" && window.location.pathname == '/') {
    return (
      <div className='high_footer'>
         <img src={bee} id='bee2' className='bee'/>
         <Link activeClass="active"
             className='each_footer firstFoot'
             to="team_link"
             spy={true}
             smooth={true}
             hashSpy={true}
             duration={700}
             isDynamic={true}
             onSetActive={this.handleSetActive}
             onSetInactive={this.handleSetInactive}
             ignoreCancelEvents={false}>
             Команда</Link>
         <Link activeClass="active"
             className='each_footer secondFoot'
             to="next_link"
             spy={true}
             smooth={true}
             hashSpy={true}
             duration={700}
             isDynamic={true}
             onSetActive={this.handleSetActive}
             onSetInactive={this.handleSetInactive}
             ignoreCancelEvents={false}>
             Голосовать</Link>
         <Link activeClass="active"
             className='each_footer thirdFoot'
             to="bee2"
             spy={true}
             smooth={true}
             hashSpy={true}
             duration={700}
             isDynamic={true}
             onSetActive={this.handleSetActive}
             onSetInactive={this.handleSetInactive}
             ignoreCancelEvents={false}>
             Контакты</Link>
         <a href={this.state.user ? '/profile/logout' :
         '/login'} className='each_footer enter_footer_link'>
         {this.state.user ? "Выйти" : "Войти"}
         </a>
      </div>
    )
  }
  else {
    return (
      <div className='high_footer'>
         <img src={bee} id='bee2' className='bee'/>
         <a href='/'
             className='each_footer firstFoot'>
             Команда</a>
         <a href='/'
             className='each_footer secondFoot'>
             Голосовать</a>
         <a href='/'
             className='each_footer thirdFoot'>
             Контакты</a>
         <a href={this.state.user ? '/profile/logout' :
         '/login'} className='each_footer enter_footer_link'>
         {this.state.user ? "Выйти" : "Войти"}
         </a>
      </div>
    )
  }
}

render() {
  return (
    <div className='wrap_footer'>
        <div className='footer'>
            {this.returnFooter()}
            <div className='middle_footer'>
               <p className='contact_us'>Связаться с нами</p>
               <p className='credentials post1'>Ваша электронная почта</p>
               <form method='POST' action='/send_post_to' className='form_1'>
                 <input type='text' name='email' placeholder='email@site.com' className='footer_inputs' required/>
                 <p className='credentials quest1'>Вопрос</p>
                 <input type='text' name='question' placeholder='Введите ваш вопрос здесь' className='footer_inputs quest2' required/>
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
