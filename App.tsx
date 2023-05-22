/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';
import {useState} from 'react';

const App = () => {
  const [value, setvalue] = useState(0);

  const addNumber = (n: any): number => {
    setvalue(n);
    return n;
  };

  const clearMemory = () => {
    setvalue(0);
  };

  const setOperation = (operation: any) => {
    console.log(operation);
  };
  return (
    <View style={Styles.container}>
      <Display value={value} />
      <View style={Styles.buttons}>
        <Button title="AC" label="AC" triple onClick={clearMemory} />
        <Button
          title="/"
          label="/"
          operation
          onClick={() => setOperation('/')}
        />
        <Button title="7" label="7" onClick={addNumber} />
        <Button title="8" label="8" onClick={addNumber} />
        <Button title="9" label="9" onClick={addNumber} />
        <Button
          title="*"
          label="*"
          operation
          onClick={() => setOperation('*')}
        />
        <Button title="4" label="4" onClick={addNumber} />
        <Button title="5" label="5" onClick={addNumber} />
        <Button title="6" label="6" onClick={addNumber} />
        <Button
          title="-"
          label="-"
          operation
          onClick={() => setOperation('-')}
        />
        <Button title="1" label="1" onClick={addNumber} />
        <Button title="2" label="2" onClick={addNumber} />
        <Button title="3" label="3" onClick={addNumber} />
        <Button
          title="+"
          label="+"
          operation
          onClick={() => setOperation('+')}
        />
        <Button title="0" label="0" double onClick={addNumber} />
        <Button title="." label="." onClick={addNumber} />
        <Button
          title="="
          label="="
          operation
          onClick={() => setOperation('=')}
        />
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
