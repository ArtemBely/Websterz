import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile_Customer from './Profile_Customer';
import Profile_Admin from './Profile_Admin';


class Profile extends React.Component {

  constructor() {

    super()

    var user;
    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      user
    }

  }

  checkStatusOfAdmin = () => {
    if(this.state.user && this.state.user.admin == 'true') {
      return(
        <Profile_Admin />
      )
    }
    else if(this.state.user && this.state.user.admin == 'false') {
      return <Profile_Customer />
    }
  }

  render() {
    return (
      <p className='choose_prof'>
       {this.checkStatusOfAdmin()}
       </p>
    )
  }
}

export default Profile;
