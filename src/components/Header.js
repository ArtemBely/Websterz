import React from 'react';
import { NavLink } from 'react-router-dom';
import bee from '../../public/images/Frame 17.svg';


class Header extends React.Component {

  constructor() {

    super()

    var user;

    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }

    this.span_down = React.createRef();
    this.span_up = React.createRef();
    this.mobile_menu = React.createRef();
  }

  appearClose = () => {
    this.span_up.current.classList.toggle('appearUp');
    this.span_down.current.classList.toggle('appearDown');
    this.mobile_menu.current.classList.toggle('appearMenu');
  }

  render() {

      return (
        <div className='wrap_header'>
            <div className='header'>
               <p className='wrap_logo'><NavLink to={this.state.user ? '/profile' : '/'}>
                <img src={bee} id='bee1' className='bee'/></NavLink></p>
                <NavLink to='#' className='header_link team_header'>Команда</NavLink>
                <NavLink to='#' className='header_link vote_header'>Голосовать</NavLink>
                <NavLink to='#' className='header_link'>Контакты</NavLink>
                <a href={this.state.user ? '/profile/logout' :
                '/login'} className='header_link enter_link'>
                {this.state.user ? "Выйти" : "Войти"}
                </a>
                <p className='wrap_span' onClick={this.appearClose}>
                   <p className='each_span span_up' ref={this.span_up}></p>
                   <p className='each_span span_down' ref={this.span_down}></p>
                </p>
                <div className='wrap_mobile_menu' ref={this.mobile_menu}>
                   <div className='mobile_menu'>
                       <NavLink to='#' className='mobile_link'>Команда</NavLink>
                       <NavLink to='#' className='mobile_link'>Голосовать</NavLink>
                       <NavLink to='#' className='mobile_link'>Контакты</NavLink>
                       <a href={this.state.user ? '/profile/logout' :
                       '/login'} className='mobile_link'>
                       {this.state.user ? "Выйти" : "Войти"}
                       </a>
                   </div>
                </div>
            </div>
        </div>
      )

    }
  }

export default Header;
