import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Team from './Team';

class Main extends React.Component{
  render() {
    return(
      <div className='bubble'>
          <Header />
          <Slider />
          <Team />
      </div>
    )
  }
}

export default Main;
