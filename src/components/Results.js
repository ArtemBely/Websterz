import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import bee from '../../public/images/Frame 17.svg';
import teamLogo from '../../public/images/Group (2).svg';
import gamer1 from '../../public/images/unsplash_WZB_ZOqR4dA.png';
import gamer2 from '../../public/images/unsplash_pUhxoSapPFA2.png';
import gamer3 from '../../public/images/unsplash_eyFbjKWlR2g2.png';
import gamer4 from '../../public/images/unsplash_d1UPkiFd04A2.png';
import gamer5 from '../../public/images/unsplash_WNoLnJo7tS82.png';

class Results extends React.Component{

  constructor() {

    super()

    var user;
    var actualGameId;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      actualGameId = window.__INITIAL_GAME__;
    }

    this.state = {
      user,
      actualGameId
    }

    this.checkInp = React.createRef();
    this.bestKd = React.createRef();
    this.firstKill = React.createRef();
    this.comKillImg1 = React.createRef();
    this.comKillImg2 = React.createRef();
    this.comKillImg3 = React.createRef();
    this.comKillImg4 = React.createRef();
    this.comKillImg5 = React.createRef();
    this.bestKdImg1 = React.createRef();
    this.bestKdImg2 = React.createRef();
    this.bestKdImg3 = React.createRef();
    this.bestKdImg4 = React.createRef();
    this.bestKdImg5 = React.createRef();
    this.kd1 = React.createRef();
    this.kd2 = React.createRef();
    this.kd3 = React.createRef();
    this.kd4 = React.createRef();
    this.kd5 = React.createRef();
    this.fk1 = React.createRef();
    this.fk2 = React.createRef();
    this.fk3 = React.createRef();
    this.fk4 = React.createRef();
    this.fk5 = React.createRef();
  }

  kd1F = () => {
    this.bestKd.current.value = this.kd1.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs2').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer2').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.kd1.current.classList.add('choosenGamerText');
    this.bestKdImg1.current.classList.add('choosenGamer');
    this.bestKdImg1.current.classList.add('getColor');
  }
  kd2F = () => {
    this.bestKd.current.value = this.kd2.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs2').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer2').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.kd2.current.classList.add('choosenGamerText');
    this.bestKdImg2.current.classList.add('choosenGamer');
    this.bestKdImg2.current.classList.add('getColor');
  }
  kd3F = () => {
    this.bestKd.current.value = this.kd3.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs2').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer2').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.kd3.current.classList.add('choosenGamerText');
    this.bestKdImg3.current.classList.add('choosenGamer');
    this.bestKdImg3.current.classList.add('getColor');
  }
  kd4F = () => {
    this.bestKd.current.value = this.kd4.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs2').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer2').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.kd4.current.classList.add('choosenGamerText');
    this.bestKdImg4.current.classList.add('choosenGamer');
    this.bestKdImg4.current.classList.add('getColor');
  }
  kd5F = () => {
    this.bestKd.current.value = this.kd5.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs2').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer2').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.kd5.current.classList.add('choosenGamerText');
    this.bestKdImg5.current.classList.add('choosenGamer');
    this.bestKdImg5.current.classList.add('getColor');
  }

  fk1F = () => {
    this.firstKill.current.value = this.fk1.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer1').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.comKillImg1.current.classList.add('choosenGamer');
    this.comKillImg1.current.classList.add('getColor');
    this.fk1.current.classList.add('choosenGamerText');
  }
  fk2F = () => {
    this.firstKill.current.value = this.fk2.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer1').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.comKillImg2.current.classList.add('choosenGamer');
    this.comKillImg2.current.classList.add('getColor');
    this.fk2.current.classList.add('choosenGamerText');
  }
  fk3F = () => {
    this.firstKill.current.value = this.fk3.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer1').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.comKillImg3.current.classList.add('choosenGamer');
    this.comKillImg3.current.classList.add('getColor');
    this.fk3.current.classList.add('choosenGamerText');
  }
  fk4F = () => {
    this.firstKill.current.value = this.fk4.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer1').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.comKillImg4.current.classList.add('choosenGamer');
    this.comKillImg4.current.classList.add('getColor');
    this.fk4.current.classList.add('choosenGamerText');
  }
  fk5F = () => {
    this.firstKill.current.value = this.fk5.current.innerHTML;
    document.querySelectorAll('.common_kills_imgs').forEach(item =>
    item.classList.remove('choosenGamer', 'getColor'));
    document.querySelectorAll('.nick_of_gamer1').forEach(item =>
    item.classList.remove('choosenGamerText'));
    this.comKillImg5.current.classList.add('choosenGamer');
    this.comKillImg5.current.classList.add('getColor');
    this.fk5.current.classList.add('choosenGamerText');
  }

  actualId = () => {
    if(this.state.actualGameId) {
      return (
        <input type='hidden' name='actGameId' value={this.state.actualGameId._id} />
      )
    }
  }

  actualEnemyName = () => {
    if(this.state.actualGameId && this.state.actualGameId.logoOfEnemy) {
      return(
        <p className='enemy2'><img src={'../uploads/' + this.state.actualGameId.logoOfEnemy} id='img_inside3'/></p>
      )
    }
  }

  scoresOfBattle = () => {
    if(this.state.actualGameId && typeof this.state.actualGameId.scoresOfGame != 'undefined') {
      return(
        <p className='qty'>{this.state.actualGameId.scoresOfGame + ' баллов'}</p>
      )
    }
    else {
      return(
        <p className='qty'>0 баллов</p>
      )
    }
  }

  scoresOfKill = () => {
    if(this.state.actualGameId && typeof this.state.actualGameId.firstKillOfGame != 'undefined') {
      return(
        <p className='scores_kill'>{this.state.actualGameId.firstKillOfGame + ' баллов'}</p>
      )
    }
    else {
      return(
        <p className='scores_kill'>0 баллов</p>
      )
    }
  }

  scoresOfMinutes = () => {
    if(this.state.actualGameId && typeof this.state.actualGameId.timeOfGame != 'undefined') {
      return(
        <p className='scores_kill min_during'>{this.state.actualGameId.timeOfGame + ' баллов'}</p>
      )
    }
    else {
      return(
        <p className='scores_kill min_during'>0 баллов</p>
      )
    }
  }

  scoresOfKd = () => {
    if(this.state.actualGameId && typeof this.state.actualGameId.kdOfTeam != 'undefined') {
      return(
          <p className='scores_kill kd_25'>{this.state.actualGameId.kdOfTeam + ' баллов'}</p>
      )
    }
    else {
      return(
        <p className='scores_kill kd_25'>0 баллов</p>
      )
    }
  }

  scoresOfKills = () => {
    if(this.state.actualGameId && typeof this.state.actualGameId.killsOfTeam != 'undefined') {
      return(
          <p className='scores_kill kill_during'>{this.state.actualGameId.killsOfTeam + ' баллов'}</p>
      )
    }
    else {
      return(
        <p className='scores_kill kill_during'>0 баллов</p>
      )
    }
  }

  render() {
    return(
      <div className='wrap_results'>
          <form action='/profile/vote/results' method='POST' className='results_form'>
                  <div className='result_scores'>
                      <p className='will_score' id='which_score'>Какой будет счёт?</p>
                      {this.scoresOfBattle()}
                      <p className='logo_team'><img src={teamLogo} id='teamLogo3'/></p>
                      <input type='text' name='score1' className='scores_inp scores_inp1' placeholder='30' required/>
                      <span className='vs2'>:</span>
                      <input type='text' name='score2' className='scores_inp scores_inp2' placeholder='12' required/>
                      {this.actualEnemyName()}
                  </div>
                  <div className='kills'>
                    <input type='text' name='firstKill' ref={this.firstKill} style={{
                      opacity: 0,
                      zIndex: '-1',
                      position: 'absolute',
                      top: '320px'
                    }} required />
                      <p className='who_kill'>Кто совершит первый килл?</p>
                      {this.scoresOfKill()}
                      <div className='wrap_gamers3'>
                          <p className='everyGamer' onClick={this.fk1F}><img src={gamer1} className='common_kills_imgs' ref={this.comKillImg1}/>
                              <p className='nick_of_gamer1' ref={this.fk1}>klydeep</p>
                              <p className='name_of_gamer1'>Arsenii Pilguev</p>
                          </p>
                          <p className='everyGamer' onClick={this.fk2F}><img src={gamer2} className='common_kills_imgs' ref={this.comKillImg2}/>
                              <p className='nick_of_gamer1' ref={this.fk2}>Re1GN</p>
                              <p className='name_of_gamer1'>Daniil Chekanin</p>
                          </p>
                          <p className='everyGamer' onClick={this.fk3F}><img src={gamer3} className='common_kills_imgs' ref={this.comKillImg3}/>
                              <p className='nick_of_gamer1' ref={this.fk3}>Chill</p>
                              <p className='name_of_gamer1'>Artsiom Mankevich</p>
                          </p>
                          <p className='everyGamer' onClick={this.fk4F}><img src={gamer4} className='common_kills_imgs' ref={this.comKillImg4}/>
                              <p className='nick_of_gamer1' ref={this.fk4}>h1te</p>
                              <p className='name_of_gamer1'>Vladislav Khait</p>
                          </p>
                          <p className='everyGamer' onClick={this.fk5F}><img src={gamer5} className='common_kills_imgs' ref={this.comKillImg5}/>
                              <p className='nick_of_gamer1' ref={this.fk5}>Remill</p>
                              <p className='name_of_gamer1'>Andrey Romanov</p>
                          </p>
                      </div>
                  </div>
                  <div className='wrap_minutes'>
                      <div className='minutes'>
                                 <p className='will_score'>Сколько минут продлится игра?</p>
                                 {this.scoresOfMinutes()}
                                 <input type='text' name='minutes' className='scores_inp scores_inp1' id='min_inp' placeholder='30' required/>
                      </div>
                  </div>
                  <div className='wrap_allKills'>
                      <div className='allKills'>
                                 <p className='will_score qty_kills'>Сколько киллов совершит команда Websterz?</p>
                                 {this.scoresOfKills()}
                                 <input type='text' name='kills' className='scores_inp scores_inp1' id='kill_inp2' placeholder='144' required/>
                      </div>
                  </div>
                  <div className='kills2'>
                      <p className='who_kill' id='whom1'>У кого будет лучший показатель КД?</p>
                      <input type='text' name='bestKd' ref={this.bestKd} style={{
                        opacity: 0,
                        zIndex: '-1',
                        position: 'absolute',
                        top: '320px'
                      }} required/>
                      {this.actualId()}
                      {this.scoresOfKd()}
                      <div className='wrap_gamers3 wrap_gamers3_down'>
                          <p className='everyGamer2' onClick={this.kd1F}><img src={gamer1} className='common_kills_imgs2' ref={this.bestKdImg1}/>
                              <p className='nick_of_gamer2' ref={this.kd1}>klydeep</p>
                              <p className='name_of_gamer1'>Arsenii Pilguev</p>
                          </p>
                          <p className='everyGamer2' onClick={this.kd2F}><img src={gamer2} className='common_kills_imgs2' ref={this.bestKdImg2}/>
                              <p className='nick_of_gamer2' ref={this.kd2}>Re1GN</p>
                              <p className='name_of_gamer1'>Daniil Chekanin</p>
                          </p>
                          <p className='everyGamer2' onClick={this.kd3F}><img src={gamer3} className='common_kills_imgs2' ref={this.bestKdImg3}/>
                              <p className='nick_of_gamer2' ref={this.kd3}>Chill</p>
                              <p className='name_of_gamer1'>Artsiom Mankevich</p>
                          </p>
                          <p className='everyGamer2' onClick={this.kd4F}><img src={gamer4} className='common_kills_imgs2' ref={this.bestKdImg4}/>
                              <p className='nick_of_gamer2' ref={this.kd4}>h1te</p>
                              <p className='name_of_gamer1'>Vladislav Khait</p>
                          </p>
                          <p className='everyGamer2' onClick={this.kd5F}><img src={gamer5} className='common_kills_imgs2' ref={this.bestKdImg5}/>
                              <p className='nick_of_gamer2' ref={this.kd5}>Remill</p>
                              <p className='name_of_gamer1'>Andrey Romanov</p>
                          </p>
                      </div>
                  </div>
                  <div className='wrap_send_vote'>
                        <button type='submit' id='sent_result'>Отправить</button>
                  </div>
            </form>
      </div>
    )
  }
}

export default Results;
