import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Login from './src/app/Login/Login';
import SideMenu from './src/app/side menu/sideMenu';

const App = () => {
  return (
    <SafeAreaView >
      <Login />
      {/* <SideMenu /> */}
      
    </SafeAreaView>
  );
};

export default App;
