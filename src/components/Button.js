import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDuble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
  operation: {
    color: '#fff',
    fontSize: 40,
    backgroundColor: '#fa8231',
  },
});

export default props => {
  const stylesButton = [styles.button];
  if (props.double) {
    stylesButton.push(styles.buttonDuble);
  }
  if (props.triple) {
    stylesButton.push(styles.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(styles.operation);
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};
