import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import RegForm from './RegForm';
import Recovery from './Recovery';
import NewPassword from './NewPassword';

class Enter extends React.Component{

    constructor() {

      super()

      var errors;
      var errorsLogin;
      if(__isBrowser__) {
        errors = window.__INITIAL_DATA__;
        errorsLogin = window.__INITIAL_ERRORS__;
      }

      this.state = {
        errors,
        errorsLogin
      }

    }

    componentDidMount() {
      if(typeof window != 'undefined') {
        window.scrollTo(0, 0);
      }
    }

  render() {
    return(
      <p className='enter'>
          <Header />
            <Route exact path='/login'>
                <Login errorsLogin={this.state.errorsLogin ? this.state.errorsLogin : null}/>
            </Route>
            <Route exact path={['/login/registration', '/registration']}>
                <RegForm errors={this.state.errors ? this.state.errors : null} />
            </Route>
            <Route exact path='/login/recovery'>
                <Recovery />
            </Route>
            <Route exact path='/login/reset/:token'>
                <NewPassword />
            </Route>
          <p className='wrap_reg_foot'><Footer /></p>
      </p>
    )
  }
}

export default Enter;
