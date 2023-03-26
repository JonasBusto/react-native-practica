import React from 'react';
import Hola from './src/Components/Hola';
import InputCustom from './src/Components/InputCustom';
import Counter from './src/Components/Counter';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

function App(): JSX.Element {
  const stylesCustomText = {
    color: 'blue',
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '4%',
  };

  return (
    <ScrollView>
      <Hola />
      <InputCustom object={stylesCustomText} />
      <Counter />
    </ScrollView>
  );
}

export default App;
