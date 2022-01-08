import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Results from './Results';
import BlackScreen from './BlackScreen';
import { NavLink } from 'react-router-dom';
import eye from '../../public/images/Group-3.svg';
import teamLogo from '../../public/images/Group (2).svg';
import im1 from '../../public/images/Star 36 (1) — копия.svg';

class Vote extends React.Component{

  constructor() {

    super()

    var user;
    var actualGame;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      actualGame = window.__INITIAL_GAME__;
    }

    this.state = {
      user,
      actualGame
    }

    this.checkInp = React.createRef();
  }

  actualEnemyNameVote = () => {
    if(this.state.actualGame && this.state.actualGame.logoOfEnemy) {
      return(
        <p className='for_window_game enemy'><img src={'../uploads/' + this.state.actualGame.logoOfEnemy} id='img_inside2' /></p>
      )
    }
  }

  actualDate = () => {
    if(this.state.actualGame && this.state.actualGame.startOfGame) {
      console.log(this.state.actualGame.startOfGame.getHours());
      return (
        <p className='date_of_game'>
        {(this.state.actualGame.startOfGame.getDate() - new Date().getDate() > 1 &&
          this.state.actualGame.startOfGame.getHours() < new Date().getHours() ?
          this.state.actualGame.startOfGame.getDate() - new Date().getDate() - 1 :
          this.state.actualGame.startOfGame.getDate() - new Date().getDate() == 1 &&
          (this.state.actualGame.startOfGame.getHours() - 1) <= new Date().getHours() ?
          0 : this.state.actualGame.startOfGame.getDate() - new Date().getDate()
        )
           + ' ДЕНЬ ' +

         ((this.state.actualGame.startOfGame.getHours() - 1) > new Date().getHours() &&
          this.state.actualGame.startOfGame.getMinutes() < new Date().getMinutes() ?
          this.state.actualGame.startOfGame.getHours() - new Date().getHours() - 2 :
          (this.state.actualGame.startOfGame.getHours() - 1) > new Date().getHours() ?
          this.state.actualGame.startOfGame.getHours() - new Date().getHours() - 1 :
          23 - ((new Date().getHours() + 1) - this.state.actualGame.startOfGame.getHours())) + ' ЧАСОВ ' +

          (this.state.actualGame.startOfGame.getMinutes() > new Date().getMinutes() ?
           this.state.actualGame.startOfGame.getMinutes() - new Date().getMinutes() - 1 :
           60 - (new Date().getMinutes() - this.state.actualGame.startOfGame.getMinutes())) + ' МИНУТ '
        }</p>
      )
    }
    else {
      return (
        <p className='date_of_game'>В ОЖИДАНИИ ИГРЫ</p>
      )
    }
  }

  render() {
    return(
      <p className='wrap_profile'>
      <BlackScreen />
      <div className='wrap_star1 spec_star1'></div>
      <div className='wrap_star2 spec_star2_vote'>
      </div>
      <div className='wrap_star3 spec_star3_vote'>
          <p className='star3_inside'>
              <img src={im1} />
          </p>
      </div>
        <div className='wrap_head_prof'><Header /></div>
          <div className='wrap_game baby_game'>
              <div className='game_vote'>
                  <p className='next_game_vote'>ДО НАЧАЛА МАТЧА</p>
                  {this.actualDate()}
                    <div className='game_window_vote'>
                         <p className='for_window_game teamLogoSvg'><img src={teamLogo} /></p>
                           <p className='vs for_window_game'>VS <span id='conf'>Мероприятие</span></p>
                         {this.actualEnemyNameVote()}
                      </div>
                     <div className='do_choice_vote'>
                   <p className='choice_inside_vote' style={{
                     width: typeof window !== "undefined" && window.screen.width > 1320 ? '556px' : '275px'
                   }}>{typeof window !== "undefined" && window.screen.width > 1320 ?
                   'Дать прогноз и получить баллы за правильный ответ' :
                   'Сделать свой выбор'}</p>
                </div>
              </div>
          </div>
          <Results />
          <p className='wrap_res_foot'><Footer /></p>
      </p>
    )
  }
}

export default Vote;
