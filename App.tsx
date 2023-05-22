import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const App = () => {
  const [value, setValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstValue, setFirstValue] = useState(0);
  const [isActivated, setIsActivated] = useState(false);

  const addNumber = (n) => {
    let newValue = value;
    if (value === '0' && n !== '.') {
      newValue = n;
    } else if (n === '.' && value.includes('.')) {
      return;
    } else {
      newValue += n;
    }
    setValue(newValue);
  };

  const clearMemory = () => {
    setValue('0');
    setOperator('');
    setFirstValue(0);
    setIsActivated(false);
  };

  const setOperation = (operation) => {
    if (!isActivated) {
      const newValue = parseFloat(value);
      setFirstValue(newValue);
      setValue('0');
      setIsActivated(true);
    } else {
      calculateResult();
    }
    setOperator(operation);
  };

  const calculateResult = () => {
    const secondValue = parseFloat(value);
    let result = 0;

    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
    }

    setValue(result.toString());
    setFirstValue(result);
    setIsActivated(false);
    setOperator('');
  };

  return (
    <View style={styles.container}>
      <Display value={value} />
      <View style={styles.buttons}>
        <Button title="AC" label="AC" triple onClick={clearMemory} />
        <Button
          title="/"
          label="/"
          operation
          onClick={() => setOperation('/')}
        />
        <Button title="7" label="7" onClick={() => addNumber('7')} />
        <Button title="8" label="8" onClick={() => addNumber('8')} />
        <Button title="9" label="9" onClick={() => addNumber('9')} />
        <Button
          title="*"
          label="*"
          operation
          onClick={() => setOperation('*')}
        />
        <Button title="4" label="4" onClick={() => addNumber('4')} />
        <Button title="5" label="5" onClick={() => addNumber('5')} />
        <Button title="6" label="6" onClick={() => addNumber('6')} />
        <Button
          title="-"
          label="-"
          operation
          onClick={() => setOperation('-')}
        />
        <Button title="1" label="1" onClick={() => addNumber('1')} />
        <Button title="2" label="2" onClick={() => addNumber('2')} />
        <Button title="3" label="3" onClick={() => addNumber('3')} />
        <Button
          title="+"
          label="+"
          operation
          onClick={() => setOperation('+')}
        />
        <Button title="0" label="0" double onClick={() => addNumber('0')} />
        <Button title="." label="." onClick={() => addNumber('.')} />
        <Button
          title="="
          label="="
          operation
          onClick={() => calculateResult()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
