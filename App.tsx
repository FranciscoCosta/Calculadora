/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, Systrace, StyleSheet} from 'react-native';
import Button from './src/components/Button';

const App = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.buttons}>
        <Button title="AC" label="AC" />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
