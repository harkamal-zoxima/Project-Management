import {createStackNavigtor} from 'react-navigation-stack';
import Home from '../Home/Home';

const AppNavigation = createStackNavigtor(
  {
    Home: {screen: Home},
  },
  {
    initialRouterName: 'Home',
  },
);

export default AppNavigation;
