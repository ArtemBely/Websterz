import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BlackScreen from './BlackScreen';
import { NavLink } from 'react-router-dom';
import bee from '../../public/images/Frame 17.svg';
import eye from '../../public/images/Group-3.svg';
import teamLogo from '../../public/images/Group (2).svg';
import im1 from '../../public/images/Star 36 (1) — копия.svg';

class Profile extends React.Component{

  constructor() {

    super()

    var user;
    var actualGameId2;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      actualGameId2 = window.__INITIAL_GAME__;
    }

    this.state = {
      user,
      actualGameId2
    }

    this.checkInp = React.createRef();
  }

  actualEnemyNameProfile = () => {
    if(this.state.actualGameId2) {
      return(
        <p className='for_window_game enemy_prof2'><img src={this.state.actualGameId2.logoOfEnemy} id='img_inside4'/></p>
      )
    }
    else if(typeof this.state.actualGameId2 == 'undefined') {
      return (
        <p className='for_window_game enemy_prof2'>CHECKING</p>
      )
    }
  }

  actualEnemyNameProfile2 = () => {
    if(this.state.actualGameId2) {
      return (
        <p className='for_window_game enemy_prof'><img src={this.state.actualGameId2.logoOfEnemy} id='img_inside'/></p>
      )
    }
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

  didChoise = () => {
    if(this.state.user && typeof this.state.user.votation[0] == 'object') {
      return(
        <div className='didChoise'>
          Выбор сделан
        </div>
      )
    }
    else {
      return (
        <NavLink to='/profile/vote' className='choice_inside2'>Сделать свой выбор</NavLink>
      )
    }
  }

  firstKill = () => {
    if(this.state.user && typeof this.state.user.votation[0] == 'object') {
      return (
        <div className='inside_game_window_prof'>
             <p className='for_window_game_prof teamLogoSvg_prof2'><img src={teamLogo} className='teamLogo2 teamLogoSvg_prof2_img'/></p>
               <p className='vs_prof2 for_window_game'>
                 <span className='score_prof'>{this.state.user.votation[0].score1}&nbsp;</span>
                 <span className='score_prof'>:</span>
                 <span className='score_prof'>&nbsp;{this.state.user.votation[0].score2}</span>
               </p>
             {this.actualEnemyNameProfile()}
            <div className='kill_block'>
                <p className='each_kill_block'>Первое убийство <span className='each_color_text'>&nbsp;{this.state.user.votation[0].firstKill}</span></p>
                <p className='each_kill_block'>Лучший КД <span className='each_color_text'>&nbsp;{this.state.user.votation[0].bestKd}</span></p>
                <p className='each_kill_block'>Длительность игры <span className='each_color_text'>&nbsp;{this.state.user.votation[0].minutes}</span></p>
                <p className='each_kill_block'>Киллов Websterz <span className='each_color_text'>&nbsp;{this.state.user.votation[0].kills}</span></p>
            </div>
        </div>
      )
    }
    else {
      return (
        <div className='inside_game_window_prof'>
             <p className='for_window_game_prof teamLogoSvg_prof'><img src={teamLogo} className='teamLogo2'/></p>
               <p className='vs_prof for_window_game'>VS</p>
               {this.actualEnemyNameProfile2()}
        </div>
      )
    }
  }

  scanGame = () => {
    if(this.state.user && typeof this.state.user.votation[0] == 'object') {
      return(
        <div className='game_window_prof_voted'>
            {this.firstKill()}
         </div>
      )
    }
    else {
      return(
        <div className='game_window_prof'>
            {this.firstKill()}
         </div>
      )
    }
  }


  render() {
    return(
      <p className='wrap_profile'>
      <BlackScreen />
      <div className='wrap_star2 spec_star22'></div>
      <div className='wrap_star3 spec_star33'><p className='wrap_star3_img'><img src={im1} /></p></div>
        <div className='wrap_head_prof'><Header /></div>
          <div className='profile'>
              <div className='wrap_data_of_user'>
                  {this.displayData()}
              </div>
          </div>
          <div className='wrap_game_prof'>
              <div className='game'>
                  <p className='next_game_prof'>ПРЕДСТОЯЩИЙ МАТЧ</p>
                     {this.scanGame()}
                     <div className='do_choice_prof'>
                   {this.didChoise()}
                </div>
              </div>
          </div>

          <div className={this.state.user && typeof this.state.user.votation[0] == 'object'
          ?  'wrap_present_prof_choosen'
          :  'wrap_present_prof'}>
              <div className='present'>
                  <div className='votes_prof'>ПОТРАТИТЬ БАЛЛЫ</div>
                  <div className='wrap_wear'>
                     <p className='each_wear'></p>
                     <p className='each_wear'></p>
                     <p className='each_wear'></p>
                     <p className='each_wear'></p>
                  </div>
              </div>
          </div>

          <div className={this.state.user && typeof this.state.user.votation[0] == 'object'
          ?  'wrap_footer_prof_choosen'
          :  'wrap_footer_prof'}><Footer /></div>
      </p>
    )
  }
}

export default Profile;
