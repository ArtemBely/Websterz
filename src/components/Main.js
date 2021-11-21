import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Team from './Team';
import Game from './Game';
import Presents from './Presents';
import Footer from './Footer';

class Main extends React.Component{
  render() {
    return(
      <div className='bubble'>
          <Header />
          <Slider />
          <Team />
          <Game />
          <Presents />
          <Footer />
      </div>
    )
  }
}

export default Main;
