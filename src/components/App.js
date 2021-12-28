import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import '../../public/styles/style1.css';
import '../../public/styles/style2.css';
import '../../public/styles/style3.css';
import '../../public/styles/style4.css';
import '../../public/styles/style5.css';
import '../../public/styles/style6.css';
import '../../public/styles/tablet992.css';
import '../../public/styles/tablet768.css';
import '../../public/styles/tablet576.css';
import '../../public/styles/tablet320.css';
import '../../public/styles/tablet_personal_account992.css';
import '../../public/styles/tablet_personal_account768.css';
import '../../public/styles/tablet_personal_account576.css';
import '../../public/styles/tablet_personal_account320.css';

class App extends React.Component {
  render() {
    return (
      <div className='main_wrap'>
          <Switch>
            {routes.map((route, i) => (
              <Route
              key={1}
              path={route.path}
              exact={route.exact}
              component={route.component}
              />
            ))}
          </Switch>
      </div>
    )
  }
}

export default App;
