import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

type CustomProps = {
  object: object;
};

const InputCustom = (props: CustomProps) => {
  return (
    <View>
      <Text style={props.object}>Ingrese su nombre</Text>
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
