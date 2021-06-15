import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/app/Login/Login';
import Home from './src/app/Home/Home';
import ProductTable from './src/app/product/ProductTable';
import AddProduct from './src/app/product/AddProduct';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="All Products" component={ProductTable} />
        <Drawer.Screen name="Add a Product" component={AddProduct} />
        {/* <Drawer.Screen name="Update a Product" component={UpdateProduct} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
