import Main from './Main';
import Enter from './Enter';
import Profile from './Profile';

const routes = [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: ['/login', '/registration', '/login/registration'],
    exact: true,
    component: Enter
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  },
]

export default routes;
