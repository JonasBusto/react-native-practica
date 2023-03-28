import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Pressable,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Hola = ({navigation}: any) => {
  const [show, setShow] = useState(false);

  const changeIcon = () => setShow(!show);

  return (
    <ScrollView>
      <View style={homeStyle.containViewDisplay}>
        <TouchableOpacity
          style={homeStyle.btnNav}
          onPress={() => navigation.navigate('Login')}>
          <Text style={homeStyle.btnText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homeStyle.btnNav}
          onPress={() => navigation.navigate('Counter')}>
          <Text style={homeStyle.btnText}>Contador</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={homeStyle.btnNav}
          onPress={() => navigation.navigate('Characters')}>
          <Text style={homeStyle.btnText}>Personajes</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={homeStyle.btnNav}
        onPress={() => navigation.navigate('Game-1')}>
        <Text style={homeStyle.btnText}>Adivina el número</Text>
      </TouchableOpacity>
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
      <Pressable style={homeStyle.btnChangeIcon} onPress={() => changeIcon()}>
        <Text
          style={{
            color: 'black',
            marginLeft: 'auto',
            marginRight: 'auto',
            textTransform: 'uppercase',
            fontWeight: '600',
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
            marginTop: '5%',
            marginBottom: '5%',
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
            marginTop: '5%',
            marginBottom: '5%',
          }}
        />
      )}
    </ScrollView>
  );
};

const homeStyle = StyleSheet.create({
  btnNav: {
    width: '30%',
    backgroundColor: 'rgba(216,74,0,1)',
    margin: 8,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '600',
    padding: 6,
    fontSize: 12,
  },
  containViewDisplay: {
    flexDirection: 'row',
  },
  btnChangeIcon: {
    backgroundColor: 'yellow',
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    padding: '2%',
  },
});

export default Hola;
