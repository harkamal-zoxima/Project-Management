import {createStackNavigtor} from 'react-navigation-stack';
import Login from '../Login/Login';
import Home from '../Home/Home';

const AuthNavigation = createStackNavigtor(
  {
    Login: {screen: Login},
    Home: {screen: Home}
  },
  {
    initialRouterName: 'Login',
  },
);

export default AuthNavigation;
