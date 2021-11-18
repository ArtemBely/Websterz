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

class Team extends React.Component {

  render() {
    return (
      <div className='wrap_team'>
          <div className='team'>
              <p className='teamTitle'>КОМАНДА</p>
                 <div className='wrap_gamers'>
                      <div className='gamers'>
                          <img src={gamer1} />
                          <p className='nicks'>klydeep</p>
                          <p className='namesForNicks'>Arsenii Pilguev</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer2} />
                          <p className='nicks'>Re1GN</p>
                          <p className='namesForNicks'>Daniil Chekanin</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer3} />
                          <p className='nicks nickChill'>Chill</p>
                          <p className='namesForNicks nickChill2'>Artsiom Mankevich</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer4} />
                          <p className='nicks'>Magnolia</p>
                          <p className='namesForNicks'>Kirill Rodnov</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer5} />
                          <p className='nicks'>Remill</p>
                          <p className='namesForNicks'>Andrey Romanov</p>
                      </div>
                      <div className='gamers'>
                          <img src={gamer6} />
                          <p className='nicks'>h1te</p>
                          <p className='namesForNicks'>Vladislav Khait</p>
                      </div>
                </div>
                <div className='wrap_nicks'>
                      <div className='all_nicks'>
                          <img src={nick1} />
                          <p className='wrap_creds'>
                              <p className='nicks2'>Nickname</p>
                              <p className='namesForNicks2'>Name Surname</p>
                          </p>
                      </div>
                      <div className='all_nicks'>
                          <img src={nick2} />
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
