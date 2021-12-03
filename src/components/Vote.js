import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Results from './Results';
import { NavLink } from 'react-router-dom';
import eye from '../../public/images/Group-3.svg';
import teamLogo from '../../public/images/Group (2).svg';

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
    if(this.state.actualGame) {
      return(
        <p className='for_window_game enemy'>{this.state.actualGame.nameOfEnemy}</p>
      )
    }
  }

  render() {
    return(
      <p className='wrap_profile'>
        <div className='wrap_head_prof'><Header /></div>
          <div className='wrap_game'>
              <div className='game_vote'>
                  <p className='next_game_vote'>ДО НАЧАЛА МАТЧА</p>
                   <p className='date_of_game'>
                   {new Date().getDate() + ' ДЕНЬ ' + new Date().getHours() +
                    ' ЧАСОВ ' + new Date().getMinutes() + ' МИНУТ'}</p>
                    <div className='game_window_vote'>
                         <p className='for_window_game teamLogoSvg'><img src={teamLogo} /></p>
                           <p className='vs for_window_game'>VS <span id='conf'>Мероприятие</span></p>
                         {this.actualEnemyNameVote()}
                      </div>
                     <div className='do_choice_vote'>
                   <p className='choice_inside_vote'>Дать прогноз и получить баллы за правильный ответ</p>
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
