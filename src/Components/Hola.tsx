import React, {useState} from 'react';
import {
  View,
  Button,
  Pressable,
  Text,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

const styleButton = {};

const Hola = () => {
  return (
    <ScrollView>
      <Text
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '2%',
          color: 'red',
          textTransform: 'uppercase',
          fontWeight: '700',
          fontSize: 20,
        }}>
        Hola, estoy probando react native
      </Text>
      <Pressable>
        <Text>Boton</Text>
      </Pressable>
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/9b/52/e3/9b52e3feaf2978ba28dbf7af4ac5082c--super-mario-tattoo-super-mario-art.jpg',
        }}
        style={{
          width: 200,
          height: 200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '10%',
          marginTop: '10%',
        }}
      />
    </ScrollView>
  );
};
export default Hola;
