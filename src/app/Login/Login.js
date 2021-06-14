import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import styles from './LoginStyles';
import SideMenu from '../side menu/sideMenu';

function Login() {
  const [open, setOpen] = useState(false);
  return (
      <ScrollView>
    <View>
      <View>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Image
            source={{
              uri: 'https://img-premium.flaticon.com/png/512/1828/1828859.png?token=exp=1623666371~hmac=f19a5805268df1aa2a8a200d760f742c',
            }}
            style={{width: 30, height: 30, margin: 10}}
          />
        </TouchableOpacity>

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
      <View>
        <SideMenu />
      </View>
    </View>
    </ScrollView>
  );
}

export default Login;
