import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

function Home() {
  const [open, setOpen] = useState(false);
  return (
      <ScrollView>
    <View>
      <Text>Home</Text>
    </View>
    </ScrollView>
  );
}

export default Home;
