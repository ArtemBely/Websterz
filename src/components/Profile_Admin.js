import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import bee from '../../public/images/Frame 17.svg';
import eye from '../../public/images/Group-3.svg';
import teamLogo from '../../public/images/Group (2).svg';

class Admin extends React.Component{

  constructor() {

    super()

    var actualGame;
    if(__isBrowser__) {
      actualGame = window.__INITIAL_GAME__;
    }

    this.state = {
      actualGame
    }

    this.checkShow = React.createRef();
  }

  changeColor = () => {
    this.checkShow.current.classList.toggle('for_wrap_checkShow');
  }

  idOfActualGame = () => {
    if(this.state.actualGame) {
      return (
        <input type='hidden' name='actualGameFinished' value={this.state.actualGame._id} />
      )
    }
  }

    render() {
      return(
        <p className='wrap_admin'>
           <div className='wrap_head_admin'><Header /></div>
            <div className='wrap_form_start'>

              <div className='wrap_start_game'>
        <form action='/profile/start_game' method='POST' className='form_start'>
                   <div className='start_game'>
                      <p className='start_game_title'>НАЧАТЬ МАТЧ</p>
                          <span className='name_enemy_text'>Название противника</span>
                          <input type='text' name='nameOfEnemy' className='input_enemy_text' placeholder='EnemyTeam' required/>
                          <span className='name_enemy_text'>Логотип противника</span>
                          <input type='text' name='logoOfEnemy' className='input_enemy_text' placeholder='Логотип противника' required/>
                          <span className='name_enemy_text'>Ссылка на мероприятие</span>
                          <input type='text' name='linkToGame' className='input_enemy_text' placeholder='https://play.esea.net/' required/>
                          <span className='name_enemy_text'>Когда начало матча</span>
                          <input type='text' name='startOfGame' className='input_enemy_text' placeholder='1 февраля 2021 17:45 Мск' required/>
                      <p className='show_link'>
                        <p className='wrap_checkShow' ref={this.checkShow} onClick={this.changeColor}><input type='checkbox' id='link_to_game'/></p>
                        Отображать ссылку на мероприятие</p>
                   </div>

                   <div className='scores_start_game'>
                      <p className='start_game_title for_each_score'>Расстановка баллов</p>
                          <span className='name_enemy_text' id='score_of_game'>Счёт игры</span>
                          <input type='text' name='scoresOfGame' className='input_enemy_text down_input2' placeholder='15 баллов' required/>
                          <span className='name_enemy_text kill_down2'>Совершил первый килл</span>
                          <input type='text' name='firstKillOfGame' className='input_enemy_text down_input2' placeholder='15 баллов' required/>
                          <span className='name_enemy_text kill_down2'>Длительность игры</span>
                          <input type='text' name='timeOfGame' className='input_enemy_text down_input2' placeholder='15 баллов' required/>
                          <span className='name_enemy_text kill_down2'>Киллов у команды</span>
                          <input type='text' name='killsOfTeam' className='input_enemy_text down_input2' placeholder='15 баллов' required/>
                          <span className='name_enemy_text kill_down2'>Показатель КД</span>
                          <input type='text' name='kdOfTeam' className='input_enemy_text down_input2' placeholder='15 баллов' required/>
                        <button type='submit' className='start_button'>Начать матч</button>
                   </div>
            </form>
            <form action='/profile/finish_game' method='POST' className='form_start' style={{height: '750px'}}>
                   <div className='scores_final_game'>
                      <p className='final_game_title'>ЗАВЕРШИТЬ МАТЧ</p>
                        <p className='final'>Итог</p>
                          <span className='name_enemy_text' id='score_of_game' style={{
                            gridRow: '3/4'
                          }}>Счёт игры</span>
                          <input type='text' name='scores_final' className='input_short down_input2' placeholder='30'/><span className='between1'>:</span>
                          <input type='text' name='scores_final2' className='input_short input_short2 down_input2' placeholder='15'/>
                          <span className='name_enemy_text kill_down2'>Совершил первый килл</span>
                          <input type='text' name='kill_final' className='input_enemy_text down_input2' placeholder='Выбрать игрока'/>
                          <span className='name_enemy_text kill_down2'>Длительность игры</span>
                          <input type='text' name='time_final' className='input_enemy_text down_input2' placeholder='85 минут'/>
                          <span className='name_enemy_text kill_down2'>Киллов у команды</span>
                          <input type='text' name='team_kill_final' className='input_enemy_text down_input2' placeholder='144'/>
                          <span className='name_enemy_text kill_down2'>Показатель КД</span>
                          <input type='text' name='kd_final' className='input_enemy_text down_input2' placeholder='Выбрать игрока'/>
                          {this.idOfActualGame()}
                        <button type='submit' className='start_button_end'>Завершить матч</button>
                   </div>
                   </form>
                </div>
          </div>
          <div className='wrap_foot_admin'><Footer /></div>
        </p>
      )
    }

}

export default Admin;
