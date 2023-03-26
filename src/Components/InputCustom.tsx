import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const InputCustom = () => {
  return (
    <View>
      <Text
        style={{
          color: 'blue',
          fontWeight: '700',
          fontSize: 20,
          textAlign: 'center',
          marginBottom: '4%',
        }}>
        Ingrese su nombre
      </Text>
      <TextInput
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
        }}
      />
    </View>
  );
};

export default InputCustom;
