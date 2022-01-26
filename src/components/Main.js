import React from 'react';
import Header from './Header';
import Slider from './Slider';
import BlackScreen from './BlackScreen';
import Team from './Team';
import Star1 from './Star1';
import Game from './Game';
import Presents from './Presents';
import Star2 from './Star2';
import Star3 from './Star3';
import Footer from './Footer';

class Main extends React.Component{

  constructor() {

    super()

    var actualGame2;
    if(__isBrowser__) {
      actualGame2 = window.__INITIAL_DATA__;
    }

    this.state = {
      actualGame2
    }

  }

  render() {
    return(
      <div className='bubble'>
          <Header />
          <Slider />
          <BlackScreen />
          <Team />
          <Star1 />
          <Game data={this.state.actualGame2 ?
                      this.state.actualGame2 :
                      null}/>
          <Presents />
          <Star2 />
          <Star3 />
          <p className='wrap_main_footer'><Footer /></p>
      </div>
    )
  }
}

export default Main;
