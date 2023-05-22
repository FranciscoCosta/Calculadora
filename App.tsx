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
        <Button title="/" label="/" />
        <Button title="7" label="7" />
        <Button title="8" label="8" />
        <Button title="9" label="9" />
        <Button title="*" label="*" />
        <Button title="4" label="4" />
        <Button title="5" label="5" />
        <Button title="6" label="6" />
        <Button title="-" label="-" />
        <Button title="1" label="1" />
        <Button title="2" label="2" />
        <Button title="3" label="3" />
        <Button title="+" label="+" />
        <Button title="0" label="0" />
        <Button title="." label="." />
        <Button title="=" label="=" />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
