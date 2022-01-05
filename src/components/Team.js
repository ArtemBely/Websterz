import React from 'react';
import { NavLink } from 'react-router-dom';
import gamer1 from '../../public/images/unsplash_d1UPkiFd04A.png';
import gamer2 from '../../public/images/unsplash_WNoLnJo7tS8.png';
import gamer3 from '../../public/images/unsplash_eyFbjKWlR2g.png';
import gamer4 from '../../public/images/unsplash_pUhxoSapPFA.png';
import gamer5 from '../../public/images/unsplash_v2aKnjMbP_k.png';
import gamer6 from '../../public/images/unsplash_EPi3TRQc5Z0.png';
import nick1 from '../../public/images/unsplash_KIPqvvTOC1s.svg';
import nick2 from '../../public/images/unsplash_RxiAV5LC-ww.svg';
import nick3 from '../../public/images/unsplash_6GgCyNnF6Zs.svg';
import nick4 from '../../public/images/unsplash_a19OVaa2rzA.svg';
import star1 from '../../public/images/Star-36.svg';

class Team extends React.Component {

  render() {
    return (
      <div className='wrap_team'>
        {/*<p className='wrap_star1'><img src={star1} /></p>*/}
          <div className='team'>
              <p className='teamTitle' id='team_link'>КОМАНДА</p>
                 <div className='wrap_gamers' id='wr_gamers1'>
                      <div className='gamers' id='Pilguev'>
                          <img src={gamer1} className='img_for_each_gamer'/>
                          <p className='nicks klydeep'>klydeep</p>
                          <p className='namesForNicks pilguev'>Arsenii Pilguev</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer2} className='img_for_each_gamer'/>
                          <p className='nicks re1GN' id='Re1GN1'>Re1GN</p>
                          <p className='namesForNicks Chekanin' id='Re1GN2'>Daniil Chekanin</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer3} className='img_for_each_gamer'/>
                          <p className='nicks nickChill'>Chill</p>
                          <p className='namesForNicks nickChill2'>Artsiom Mankevich</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer4} className='img_for_each_gamer'/>
                          <p className='nicks magnolia'>Magnolia</p>
                          <p className='namesForNicks rodnov'>Kirill Rodnov</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer5} className='img_for_each_gamer'/>
                          <p className='nicks remill'>Remill</p>
                          <p className='namesForNicks romanov'>Andrey Romanov</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer6} className='img_for_each_gamer'/>
                          <p className='nicks h1te'>h1te</p>
                          <p className='namesForNicks khait'>Vladislav Khait</p>
                      </div>
                </div>
                <div className='wrap_nicks' id='wr_nicks1'>
                      <div className='all_nicks'>
                          <img src={nick1} className='spec_imgs'/>
                          <p className='wrap_creds'>
                              <p className='nicks2'>Nickname</p>
                              <p className='namesForNicks2'>Name Surname</p>
                          </p>
                      </div>
                      <div className='all_nicks'>
                          <img src={nick2} className='spec_imgs'/>
                          <p className='wrap_creds'>
                              <p className='nicks2'>Nickname</p>
                              <p className='namesForNicks2'>Name Surname</p>
                          </p>
                      </div>
                      <div className='all_nicks'>
                          <img src={nick3} />
                          <p className='wrap_creds'>
                              <p className='nicks2'>Nickname</p>
                              <p className='namesForNicks2'>Name Surname</p>
                          </p>
                      </div>
                      <div className='all_nicks'>
                          <img src={nick4} />
                          <p className='wrap_creds'>
                              <p className='nicks2'>Nickname</p>
                              <p className='namesForNicks2'>Name Surname</p>
                          </p>
                      </div>
                </div>
          </div>
      </div>
    )
  }
}

export default Team;
