import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Text,
  ProgressBarAndroid,
  ProgressViewIOS
} from 'react-native';

import Clicker from './components/Clicker/Clicker';

import rootReducers from "./redux/rootReducers";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 20,
    marginBottom: 5
  }
});

export default function App() {
  const store = createStore(rootReducers);

  const [text, setText] = useState('');

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.text}>Clicker components (with button): </Text>
        <Clicker></Clicker>
        <Text style={styles.text}>Input component:</Text>
        {
          Platform.OS === 'android' ?
            <ProgressBarAndroid styleAttr="Horizontal" /> :
            <ProgressViewIOS progress="0.5"></ProgressViewIOS>
        }
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(t) => setText(t)}
          value={text}
        />
      </View>
    </Provider>
  );
}

