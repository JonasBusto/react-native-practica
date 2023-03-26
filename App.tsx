import React from 'react';
import Hola from './src/Components/Hola';
import InputCustom from './src/Components/InputCustom';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

type CatProps = {
  name: string;
};

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
    </ScrollView>
  );
}

export default App;
