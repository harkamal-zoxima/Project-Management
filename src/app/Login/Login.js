import React, {useState} from 'react';
import { useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import styles from './LoginStyles.js';

function Login() {
  



  return (
    <ScrollView>
      <View>
        <View>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/sdyst67kxwlqzfsnaecf',
            }}
            style={styles.image}
          />
          <TextInput style={styles.text} placeholder="Username"></TextInput>
          <TextInput
            style={styles.text}
            secureTextEntry={true}
            placeholder="Password"></TextInput>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Menu')}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Login;
