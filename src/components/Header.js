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
  }

  render() {

      return (
        <div className='wrap_header'>
            <div className='header'>
               <p className='wrap_logo'><NavLink to={this.state.user ? '/profile' : '/'}>
                <img src={bee} id='bee'/></NavLink></p>
                <NavLink to='#' className='header_link team_header'>Команда</NavLink>
                <NavLink to='#' className='header_link vote_header'>Голосовать</NavLink>
                <NavLink to='#' className='header_link'>Контакты</NavLink>
                <a href={this.state.user ? '/profile/logout' :
                '/login'} className='header_link'>
                {this.state.user ? "Выйти" : "Войти"}
                </a>
            </div>
        </div>
      )

    }
  }

export default Header;
