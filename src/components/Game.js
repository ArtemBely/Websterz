import React from 'react';
import { NavLink } from 'react-router-dom';
import mainScreen from '../../public/images/pattern.png';
import teamLogo from '../../public/images/Group (2).svg';


class Game extends React.Component {


  showEnemy = () => {
    if(this.props.data && this.props.data.logoOfEnemy) {
      //let actualEnemy = this.props.data[this.props.data.length - 1];
      return(
        <p className='for_window_game enemy'>
            <img src={'uploads/' + this.props.data.logoOfEnemy} id='central_logo'/>
        </p>
      )
    }
  }

  render() {
    return (
      <div className='wrap_game'>
          <div className='game'>
              <p className='next_game' id='next_link'>ПРЕДСТОЯЩИЙ МАТЧ</p>
                <div className='game_window'>
                     <p className='for_window_game teamLogoSvg'><img src={teamLogo} /></p>
                       <p className='vs for_window_game'>VS</p>
                       {this.showEnemy()}
                    </div>
                 <div className='do_choice'>
               <NavLink to='/login' className='choice_inside'>Сделать свой выбор</NavLink>
            </div>
          </div>
      </div>
    )
  }
}

export default Game;
