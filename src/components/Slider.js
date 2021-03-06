import React from 'react';
import { NavLink } from 'react-router-dom';
import mini1 from '../../public/images/unsplash_Hlkuojv_P6I.png';
import mini2 from '../../public/images/image 6.png';
import mini3 from '../../public/images/unsplash_crs2vlkSe98.png';
import mini4 from '../../public/images/unsplash_trYl7JYATH0.png';
import mini5 from '../../public/images/unsplash_Bq7nHY4trGA.png';
import mini6 from '../../public/images/unsplash_bZZp1PmHI0E.png';
import slide1 from '../../public/images/Frame 491.png';
import slide2 from '../../public/images/unsplash_Uj_g1ZSzPoY.png';
import slide3 from '../../public/images/unsplash_R6pSdFliZy4.png';
import slide4 from '../../public/images/unsplash_JJPz0BFfkLI.png';
import slide5 from '../../public/images/unsplash_fwVo1x7CktY.png';
import slide6 from '../../public/images/unsplash_AZuhLLBG6iw.png';


class Slider extends React.Component {

  constructor() {

    super()

    this.slide1 = React.createRef();
    this.slide2 = React.createRef();
    this.slide3 = React.createRef();
    this.slide4 = React.createRef();
    this.slide5 = React.createRef();
    this.slide6 = React.createRef();
    this.move_right1 = React.createRef();
    this.move_right2 = React.createRef();
    this.move_right3 = React.createRef();
    this.move_right4 = React.createRef();
    this.move_right5 = React.createRef();
    this.move_right6 = React.createRef();
  }

  showSlide1 = () => {
    document.querySelectorAll('.wrap_active_sliders').forEach(slide => {
      if(slide.classList.contains('appearSlide')) {
           slide.classList.remove('appearSlide');
           slide.classList.add('slowAnim');
      }
    });
    document.querySelectorAll('.move_right').forEach(right => {
      if(right.classList.contains('move_right_start')) {
        right.classList.remove('move_right_start');
        right.classList.add('opaForRight');
      }
    });
    this.slide1.current.classList.add('appearSlide');
    this.move_right1.current.classList.contains('opaForRight') ?
    this.move_right1.current.classList.remove('opaForRight') : null;
    this.move_right1.current.classList.add('move_right_start');
  }

  showSlide2 = () => {
    document.querySelectorAll('.wrap_active_sliders').forEach(slide => {
      if(slide.classList.contains('appearSlide')) {
           slide.classList.remove('appearSlide');
           slide.classList.add('slowAnim');
      }
    });
    document.querySelectorAll('.move_right').forEach(right => {
      if(right.classList.contains('move_right_start')) {
        right.classList.remove('move_right_start');
        right.classList.add('opaForRight');
      }
    });
    this.slide2.current.classList.add('appearSlide');
    this.move_right2.current.classList.contains('opaForRight') ?
    this.move_right2.current.classList.remove('opaForRight') : null;
    this.move_right2.current.classList.add('move_right_start');
  }
  showSlide3 = () => {
    document.querySelectorAll('.wrap_active_sliders').forEach(slide => {
      if(slide.classList.contains('appearSlide')) {
           slide.classList.remove('appearSlide');
           slide.classList.add('slowAnim');
      }
    });
    document.querySelectorAll('.move_right').forEach(right => {
      if(right.classList.contains('move_right_start')) {
        right.classList.remove('move_right_start');
        right.classList.add('opaForRight');
      }
    });
    this.slide3.current.classList.add('appearSlide');
    this.move_right3.current.classList.contains('opaForRight') ?
    this.move_right3.current.classList.remove('opaForRight') : null;
    this.move_right3.current.classList.add('move_right_start');
  }
  showSlide4 = () => {
    document.querySelectorAll('.wrap_active_sliders').forEach(slide => {
      if(slide.classList.contains('appearSlide')) {
           slide.classList.remove('appearSlide');
           slide.classList.add('slowAnim');
      }
    });
    document.querySelectorAll('.move_right').forEach(right => {
      if(right.classList.contains('move_right_start')) {
        right.classList.remove('move_right_start');
        right.classList.add('opaForRight');
      }
    });
    this.slide4.current.classList.add('appearSlide');
    this.move_right4.current.classList.contains('opaForRight') ?
    this.move_right4.current.classList.remove('opaForRight') : null;
    this.move_right4.current.classList.add('move_right_start');
  }
  showSlide5 = () => {
    document.querySelectorAll('.wrap_active_sliders').forEach(slide => {
      if(slide.classList.contains('appearSlide')) {
           slide.classList.remove('appearSlide');
           slide.classList.add('slowAnim');
      }
    });
    document.querySelectorAll('.move_right').forEach(right => {
      if(right.classList.contains('move_right_start')) {
        right.classList.remove('move_right_start');
        right.classList.add('opaForRight');
      }
    });
    this.slide5.current.classList.add('appearSlide');
    this.move_right5.current.classList.contains('opaForRight') ?
    this.move_right5.current.classList.remove('opaForRight') : null;
    this.move_right5.current.classList.add('move_right_start');
  }
  showSlide6 = () => {
    document.querySelectorAll('.wrap_active_sliders').forEach(slide => {
      if(slide.classList.contains('appearSlide')) {
           slide.classList.remove('appearSlide');
           slide.classList.add('slowAnim');
      }
    });
    document.querySelectorAll('.move_right').forEach(right => {
      if(right.classList.contains('move_right_start')) {
        right.classList.remove('move_right_start');
        right.classList.add('opaForRight');
      }
    });
    this.slide6.current.classList.add('appearSlide');
    this.move_right6.current.classList.contains('opaForRight') ?
    this.move_right6.current.classList.remove('opaForRight') : null;
    this.move_right6.current.classList.add('move_right_start');
  }


componentDidMount() {
    window.addEventListener('load', () => {
      setInterval(() => {
        setTimeout(() => {
          this.showSlide2();
        }, 0);
        setTimeout(() => {
          this.showSlide3();
        }, 4000);
        setTimeout(() => {
          this.showSlide4();
        }, 8000);
        setTimeout(() => {
          this.showSlide5();
        }, 12000);
        setTimeout(() => {
          this.showSlide6();
        }, 16000);
        setTimeout(() => {
          this.showSlide1();
        }, 20000);
      }, 25000);
    });
}


  render() {
    return (
      <div className='wrap_slider'>
          <div className='slider'>
              <div className='active_sliders'>
                  <p className='wrap_active_sliders appearSlide' ref={this.slide1}><img src={slide1} /></p>
                  <p className='wrap_active_sliders' ref={this.slide2}><img src={slide2} /></p>
                  <p className='wrap_active_sliders' ref={this.slide3}><img src={slide3} /></p>
                  <p className='wrap_active_sliders' ref={this.slide4}><img src={slide4} /></p>
                  <p className='wrap_active_sliders' ref={this.slide5}><img src={slide5} /></p>
                  <p className='wrap_active_sliders' ref={this.slide6}><img src={slide6} /></p>
              </div>
              <div className='down_sliders'>
                  <div className='each_down_slide' onClick={this.showSlide1}><img src={mini1} /><div className='wrap_move'><p className='move_right' ref={this.move_right1}></p></div></div>
                  <div className='each_down_slide' onClick={this.showSlide2}><img src={mini2} /><div className='wrap_move'><p className='move_right' ref={this.move_right2}></p></div></div>
                  <div className='each_down_slide' onClick={this.showSlide3}><img src={mini3} /><div className='wrap_move'><p className='move_right' ref={this.move_right3}></p></div></div>
                  <div className='each_down_slide' onClick={this.showSlide4}><img src={mini4} /><div className='wrap_move'><p className='move_right' ref={this.move_right4}></p></div></div>
                  <div className='each_down_slide' onClick={this.showSlide5}><img src={mini5} /><div className='wrap_move'><p className='move_right' ref={this.move_right5}></p></div></div>
                  <div className='each_down_slide' onClick={this.showSlide6}><img src={mini6} /><div className='wrap_move'><p className='move_right' ref={this.move_right6}></p></div></div>
              </div>
          </div>
      </div>
    )
  }
}

export default Slider;
