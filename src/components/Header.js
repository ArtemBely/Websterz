import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
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

  returnHeader = () => {
    if(typeof window !== "undefined" && window.location.pathname == '/') {
      return (
        <div className='header'>
           <p className='wrap_logo'><a href={this.state.user ? '/profile' : '/'}>
            <img src={bee} id='bee1' className='bee'/></a></p>
            <Link activeClass="active"
                className='header_link team_header'
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
                className='header_link vote_header'
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
                className='header_link'
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
            '/login'} className='header_link enter_link'>
            {this.state.user ? "Выйти" : "Войти"}
            </a>
            <p className='wrap_span' onClick={this.appearClose}>
               <p className='each_span span_up' ref={this.span_up}></p>
               <p className='each_span span_down' ref={this.span_down}></p>
            </p>
            <div className='wrap_mobile_menu' ref={this.mobile_menu}>
               <div className='mobile_menu'>
                   <Link activeClass="active"
                       className='mobile_link'
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
                       className='mobile_link'
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
                       className='mobile_link'
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
                   '/login'} className='mobile_link'>
                   {this.state.user ? "Выйти" : "Войти"}
                   </a>
               </div>
            </div>
        </div>
      )
    }
    else {
      return (
        <div className='header'>
           <p className='wrap_logo'><NavLink to={this.state.user ? '/profile' : '/'}>
            <img src={bee} id='bee1' className='bee'/></NavLink></p>
            <a href='/'
                className='header_link team_header'>
                Команда</a>
            <a href='/'
                className='header_link vote_header'>
                Голосовать</a>
            <a href='/'
                className='header_link'>
                Контакты</a>
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
                   <a href='/'
                       className='mobile_link'>
                       Команда</a>
                   <a href='/'
                       className='mobile_link'>
                       Голосовать</a>
                   <a href='/'
                       className='mobile_link'>
                       Контакты</a>
                   <a href={this.state.user ? '/profile/logout' :
                   '/login'} className='mobile_link'>
                   {this.state.user ? "Выйти" : "Войти"}
                   </a>
               </div>
            </div>
        </div>
      )
    }
  }

  render() {

      return (
        <div className='wrap_header'>
          {this.returnHeader()}
        </div>
      )

    }
  }

export default Header;
