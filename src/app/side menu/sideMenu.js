import React from 'react';
import {Text, View} from 'react-native';
import styles from './SideMenuStyle';

function SideMenu() {
  return (
    <View
      style={{
        // width: '60%',
        // height: '100%',
        borderWidth: 1,
        borderColor: 'black',
        position: 'absolute',
        left: 0,
        top: 50,
        zIndex: 10000,
        backgroundColor: 'white',
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
      }}>
      <Text style={{fontSize: 22, margin: 20, marginTop: 40, color: '#1b394d'}}>
        Login
      </Text>
      <Text style={{fontSize: 22, margin: 20, color: '#1b394d'}}>Home</Text>
      <Text style={{fontSize: 22, margin: 20, color: '#1b394d'}}>
        Product Management
      </Text>
      <Text style={{fontSize: 22, margin: 20, color: '#1b394d'}}>Cart</Text>
    </View>
  );
}

export default SideMenu;
