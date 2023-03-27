import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type CustomProps = {
  object: object;
};

const authStyle = StyleSheet.create({
  backImgCustom: {
    width: '100%',
    borderColor: 'gray',
    borderTopWidth: 1,
    backgroundColor: 'rgba(0,20,31,1)',
  },
  authContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '6%',
    marginBottom: '6%',
    paddingTop: '5%',
    borderRadius: 10,
  },
  authInput: {
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '2%',
    marginBottom: '2%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    color: 'white',
  },
  authTitle: {
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 15,
  },
  authButton: {
    backgroundColor: 'rgba(232,123,18,1)',
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 7,
    borderWidth: 2,
  },
  authButtonText: {
    paddingTop: '5%',
    paddingBottom: '5%',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
});

const Register = (props: CustomProps) => {
  return (
    <View style={authStyle.backImgCustom}>
      <View style={authStyle.authContainer}>
        <Text style={authStyle.authTitle}>Registro</Text>
        <TextInput
          style={authStyle.authInput}
          placeholder="Correo Electronico"
          keyboardType="email-address"
        />
        <TextInput
          style={authStyle.authInput}
          placeholder="Nombre completo"
          keyboardType="default"
        />
        <TextInput
          style={authStyle.authInput}
          placeholder="Contraseña"
          keyboardType="visible-password"
        />
        <TextInput
          style={authStyle.authInput}
          placeholder="Confirmar contraseña"
          keyboardType="visible-password"
        />
        <TouchableOpacity style={authStyle.authButton} onPress={() => {}}>
          <Text style={authStyle.authButtonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
