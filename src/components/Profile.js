import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import bee from '../../public/images/Frame 17.svg';
import eye from '../../public/images/Group-3.svg';

class Profile extends React.Component{

  constructor() {

    super()

    var user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }

    this.checkInp = React.createRef();
  }

  changeColorInp = () => {
    this.checkInp.current.classList.toggle('forProfInp');
  }

  displayData = () => {
    if(this.state.user) {
      return (
        <div className='data_of_user'>
            <p className='main_mail'>{this.state.user.email}</p>
            <p className='wrap_postProfile'>
                  <span className='name_of_cred'>Почта</span>
                  <p className='post_inside'>{this.state.user.email}</p>
            </p>
            <p className='wrap_passProfile'>
                  <span className='name_of_cred'>Пароль</span>
                    <p className='pass_inside'>●●●●●●●●●●●●●●
                    <img src={eye} id='eye'/>
                  </p>
            </p>
            <p className='wrap_check1'>
               <p className='wrap_checkService' ref={this.checkInp} onClick={this.changeColorInp}>
               <input type='checkbox' id='check1'/></p>
               <p className='check1_inside'>
                  Service announcements, updates, and feedback and surveys
               </p>
            </p>
            <p className='profile_scores'>{this.state.user.scores}  баллов</p>
        </div>
      )
    }
  }

  render() {
    return(
      <p className='wrap_profile'>
        <div className='wrap_head_prof'><Header /></div>
          <div className='profile'>
              <div className='wrap_data_of_user'>
                  {this.displayData()}
              </div>
          </div>
      </p>
    )
  }
}

export default Profile;
