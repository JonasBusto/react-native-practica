import React, {useEffect, useState, CSSProperties} from 'react';
import {
  View,
  Button,
  Pressable,
  Text,
  Image,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';

const styleButton = {
  backgroundColor: 'green',
  width: 150,
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: 10,
  padding: '2%',
};

const Hola = () => {
  const [show, setShow] = useState(false);

  const changeIcon = () => setShow(!show);

  useEffect(() => {
    console.log('show es: ', show);
  }, [show]);

  return (
    <View>
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
      <Pressable style={styleButton} onPress={() => changeIcon()}>
        <Text
          style={{
            color: '#fff',
            marginLeft: 'auto',
            marginRight: 'auto',
            textTransform: 'uppercase',
          }}>
          Cambiar icono
        </Text>
      </Pressable>
      {!show ? (
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
      ) : (
        <Image
          source={{
            uri: 'https://p.kindpng.com/picc/s/583-5831002_mario-fire-flower-8-bit-png-transparent-png.png',
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
      )}
    </View>
  );
};
export default Hola;
