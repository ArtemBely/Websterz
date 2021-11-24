import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import RegForm from './RegForm';

class Enter extends React.Component{
  render() {
    return(
      <p className='enter'>
          <Header />
            <Route exact path='/login' component={Login} />
            <Route exact path={['/login/registration', '/registration']} component={RegForm} />
          <Footer />
      </p>
    )
  }
}

export default Enter;
