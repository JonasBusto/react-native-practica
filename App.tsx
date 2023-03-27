import React from 'react';
import Hola from './src/Components/Hola';
import Login from './src/Components/InputCustom';
import Register from './src/Components/Register';
import Counter from './src/Components/Counter';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

function App(): JSX.Element {
  const stylesCustomText = {
    color: 'blue',
    fontWeight: '700',
    marginTop: '2%',
    marginBottom: '5%',
    textAlign: 'center',
    textTransform: 'uppercase',
  };

  return (
    <ScrollView>
      <Hola />
      <Counter />
      <Login object={stylesCustomText} />
      <Register object={stylesCustomText} />
    </ScrollView>
  );
}

export default App;
