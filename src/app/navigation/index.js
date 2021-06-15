import {createSwitchNavigtor, createAppContainer} from 'react-navigation';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const SwitchNavigator = createSwitchNavigtor(
  {
    Auth: AuthNavigation,
    App: AppNavigation,
  },
  {
    initialRouterName: 'Auth',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
