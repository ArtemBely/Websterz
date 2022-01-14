import React from 'react';
import greyimg from '../../public/images/Group 19.png';
import chooseimg from '../../public/images/Group 18.png';

function Present() {


    return (
      <div className='wrap_present'>
          <div className='present'>
              <div className='votes'>голосуй и Получай призы</div>
              <div className='wrap_wear'>
                 <p className='each_wear'><img src={greyimg} className='greyimg' id='greyimg1'/><img src={chooseimg} className='chooseimg' id='chooseimg1'/></p>
                 <p className='each_wear'><img src={greyimg} className='greyimg' id='greyimg2'/><img src={chooseimg} className='chooseimg' id='chooseimg2'/></p>
                 <p className='each_wear'><img src={greyimg} className='greyimg' id='greyimg3'/><img src={chooseimg} className='chooseimg' id='chooseimg3'/></p>
                 <p className='each_wear'><img src={greyimg} className='greyimg' id='greyimg4'/><img src={chooseimg} className='chooseimg' id='chooseimg4'/></p>
              </div>
          </div>
      </div>
    )

}


export default Present;
