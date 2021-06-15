import {createStackNavigtor} from 'react-navigation-stack';
import Home from '../Home/Home';
import AddProduct from '../product/AddProduct';
import ProductTable from '../product/ProductTable';

const AppNavigation = createStackNavigtor(
  {
    Home: {screen: Home},
    Product: {screen: ProductTable},
    AddProduct: {screen: AddProduct},
  },
  {
    initialRouterName: 'Home',
  },
);

export default AppNavigation;
