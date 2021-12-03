import Main from './Main';
import Enter from './Enter';
import Profile from './Profile';
import Vote from './Vote';
import LoginAdmin from './LoginAdmin';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    path: ['/login', '/registration', '/login/registration'],
    exact: true,
    component: Enter
  },
  {
    path: '/profile/vote',
    exact: true,
    component: Vote
  },
  {
    path: '/login/admin_router',
    exact: true,
    component: LoginAdmin
  }
]

export default routes;
