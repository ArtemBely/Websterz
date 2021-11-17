import React from 'react';
import { NavLink } from 'react-router-dom';
import bee from '../../public/images/Frame 17.svg';


function Header() {


    return (
      <div className='wrap_header'>
          <div className='header'>
             <p className='wrap_logo'><NavLink to='/'><img src={bee} id='bee'/></NavLink></p>
              <NavLink to='#' className='header_link team_header'>Команда</NavLink>
              <NavLink to='#' className='header_link vote_header'>Голосовать</NavLink>
              <NavLink to='#' className='header_link'>Контакты</NavLink>
              <NavLink to='/enter' className='header_link'>Войти</NavLink>
          </div>
      </div>
    )

}

export default Header;
