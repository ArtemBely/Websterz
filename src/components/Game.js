import React from 'react';
import { NavLink } from 'react-router-dom';
import mainScreen from '../../public/images/Frame 510.png';
import teamLogo from '../../public/images/Group (2).svg';


class Game extends React.Component {

  render() {
    return (
      <div className='wrap_game'>
          <div className='game'>
              <p className='next_game'>ПРЕДСТОЯЩИЙ МАТЧ</p>
                <div className='game_window'>
                     <p className='for_window_game teamLogoSvg'><img src={teamLogo} /></p>
                       <p className='vs for_window_game'>VS</p>
                     <p className='for_window_game enemy'>CHEESE</p>
                  </div>
                 <div className='do_choice'>
               <p className='choice_inside'>Сделать свой выбор</p>
            </div>
          </div>
      </div>
    )
  }
}

export default Game;
