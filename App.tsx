import React from 'react';
import Hola from './src/Components/Hola';
import InputCustom from './src/Components/InputCustom';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const stylesCustomText = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '2%',
  color: 'red',
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: 20,
};

function App(): JSX.Element {
  return (
    <ScrollView>
      <Hola />
      <InputCustom />
    </ScrollView>
  );
}

export default App;
